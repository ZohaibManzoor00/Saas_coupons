import { db } from "@/drizzle/db";
import { and, eq } from "drizzle-orm";
import { ProductCustomizationTable, ProductTable } from "@/drizzle/schema";
import {
  CACHE_TAGS,
  dbCache,
  getUserTag,
  revalidateDbCache,
} from "@/lib/cache";

export const getProducts = (userId: string, { limit }: { limit?: number }) => {
  const cacheFn = dbCache(getProductsInternal, {
    tags: [getUserTag(userId, CACHE_TAGS.products)],
  });
  return cacheFn(userId, { limit });
};

export const getProduct = ({ id, userId }: { id: string; userId: string }) => {
  const cacheFn = dbCache(getProductInternal, {
    tags: [getUserTag(id, CACHE_TAGS.products)],
  });
  return cacheFn({ id, userId });
};

export const updateProduct = async (
  data: Partial<typeof ProductTable.$inferInsert>,
  { id, userId }: { id: string; userId: string }
) => {
  const { rowCount } = await db
    .update(ProductTable)
    .set(data)
    .where(and(eq(ProductTable.clerkUserId, userId), eq(ProductTable.id, id)));

  if (rowCount > 0) revalidateDbCache({ tag: CACHE_TAGS.products, userId, id });
  return rowCount > 0;
};

export const createProduct = async (data: typeof ProductTable.$inferInsert) => {
  const [newProduct] = await db
    .insert(ProductTable)
    .values(data)
    .returning({ id: ProductTable.id, userId: ProductTable.clerkUserId });

  try {
    await db
      .insert(ProductCustomizationTable)
      .values({
        productId: newProduct.id,
      })
      .onConflictDoNothing({ target: ProductCustomizationTable.productId });
  } catch (e) {
    await db.delete(ProductTable).where(eq(ProductTable.id, newProduct.id));
  }
  revalidateDbCache({
    tag: CACHE_TAGS.products,
    userId: newProduct.userId,
    id: newProduct.id,
  });
  return newProduct;
};

export const deleteProduct = async ({
  id,
  userId,
}: {
  id: string;
  userId: string;
}) => {
  const { rowCount } = await db
    .delete(ProductTable)
    .where(and(eq(ProductTable.id, id), eq(ProductTable.clerkUserId, userId)));

  if (rowCount > 0) revalidateDbCache({ tag: CACHE_TAGS.products, userId, id });
  return rowCount > 0;
};

function getProductsInternal(userId: string, { limit }: { limit?: number }) {
  return db.query.ProductTable.findMany({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
    orderBy: ({ createdAt }, { desc }) => desc(createdAt),
    limit,
  });
}

function getProductInternal({ id, userId }: { id: string; userId: string }) {
  return db.query.ProductTable.findFirst({
    where: ({ clerkUserId, id: idCol }, { eq, and }) =>
      and(eq(clerkUserId, userId), eq(idCol, id)),
  });
}

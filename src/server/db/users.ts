import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { ProductTable, UserSubscriptionTable } from "@/drizzle/schema";

export const deleteUser = async (clerkUserId: string) => {
  return db.batch([
    db
      .delete(UserSubscriptionTable)
      .where(eq(UserSubscriptionTable.clerkUserId, clerkUserId)),

    db.delete(ProductTable).where(eq(ProductTable.clerkUserId, clerkUserId)),
  ]);
};

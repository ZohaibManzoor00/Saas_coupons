"use server";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { productDetailsSchema } from "@/schemas/products";
import {
  createProduct as createProductDb,
  deleteProduct as deleteProductDb,
} from "@/server/db/products";

export const createProduct = async (
  unsafeData: z.infer<typeof productDetailsSchema>
): Promise<{ error: boolean; message: string } | undefined> => {
  const { userId } = await auth();
  const { success, data } = productDetailsSchema.safeParse(unsafeData);

  if (!success || userId == null) {
    return { error: true, message: "Error creating product" };
  }

  const { id } = await createProductDb({ ...data, clerkUserId: userId });

  redirect(`/dashboard/products/${id}/edit?tab=countries`);
};

export const deleteProduct = async (id: string) => {
  const { userId } = await auth();
  const errorMsg = "There was an error deleting your product"
  const successMsg = "Successfully deleted your product"

  if (!userId) return { error: true, message: errorMsg };

  const isSuccess = await deleteProductDb({ id, userId });
  return { error: !isSuccess, message: isSuccess ? successMsg : errorMsg}
};

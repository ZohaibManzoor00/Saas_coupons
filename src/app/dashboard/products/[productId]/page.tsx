import { getProduct } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import PageWithBackButton from "../../_components/pageWithBackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductDetailsForm } from "../../_components/forms/productDetailsForm";

interface EditProductPageProps {
  params: { productId: string };
  searchParams: { tab?: string };
}

export default async function EditProductPage({
  params: { productId },
  searchParams: { tab = "details" },
}: EditProductPageProps) {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  const product = await getProduct({ id: productId, userId });
  if (!product) return notFound();

  return (
    <PageWithBackButton
      backButtonHref="/dashboard/products"
      pageTitle="Edit Product"
    >
      <Tabs defaultValue={tab}>
        <TabsList className="bg-background/60">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="country">Country</TabsTrigger>
          <TabsTrigger value="customizations">Customizations</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <DetailsTabs product={product} />
        </TabsContent>
        <TabsContent value="country">Country</TabsContent>
        <TabsContent value="customizations">Customizations</TabsContent>
      </Tabs>
    </PageWithBackButton>
  );
}
export type Product = {
  id: string;
  name: string;
  description: string | null;
  url: string;
};
function DetailsTabs({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Product Details</CardTitle>
        <CardContent>
          <ProductDetailsForm product={product} />
        </CardContent>
      </CardHeader>
    </Card>
  );
}

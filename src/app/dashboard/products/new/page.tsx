import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWithBackButton from "../../_components/pageWithBackButton";
import { ProductDetailsForm } from "../../_components/forms/productDetailsForm";

const NewProductPage = () => {
  return (
    <>
      <PageWithBackButton
        pageTitle="New Product"
        backButtonHref="/dashboard/products"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Product Details</CardTitle>
            <CardContent className="p-0">
              <ProductDetailsForm />
            </CardContent>
          </CardHeader>
        </Card>
      </PageWithBackButton>
    </>
  );
};

export default NewProductPage;

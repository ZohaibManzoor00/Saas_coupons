import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { type FC } from "react";

interface Product {
  id: string;
  name: string;
  url: string;
  description?: string | null;
}
interface ProductGridProps {
  products: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2 justify-between items-end">
          <CardTitle>
            <Link href={`/dashboard/products/${product.id}/edit`}>
              {product.name}
            </Link>
          </CardTitle>
          <Dialog>
            

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="size-8 p-0">
                <div className="sr-only">Action Menu</div>
                <DotsHorizontalIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/products/${product.id}/edit`}>
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Add to Site</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </Dialog>

        </div>
        <CardDescription>{product.url}</CardDescription>
      </CardHeader>
      {product?.description && <CardContent>{product.description}</CardContent>}
    </Card>
  );
};

import { Button } from "@/components/ui/button";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode, type FC } from "react";

interface PageWithBackButtonProps {
  backButtonHref: string;
  pageTitle: string;
  children: ReactNode;
}

const PageWithBackButton: FC<PageWithBackButtonProps> = ({
  backButtonHref,
  pageTitle,
  children,
}) => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-8">
      <Button asChild className="rounded-full" variant="outline" size="icon">
        <Link href={backButtonHref}>
          <div className="sr-only">Back</div>
          <CaretLeftIcon className="size-8" />
        </Link>
      </Button>
      <h1 className="text-2xl font-semibold self-center">{pageTitle}</h1>
      <div className="col-start-2">{children}</div>
    </div>
  );
};

export default PageWithBackButton;

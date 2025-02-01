import { ReactNode, type FC } from "react";
import Navbar from "./_components/navbar";

interface MarketingLayoutProps {
  children: ReactNode;
}

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <Navbar />
      {children}
    </div>
  );
};

export default MarketingLayout;

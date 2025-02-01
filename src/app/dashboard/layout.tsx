import { ReactNode, type FC } from "react";
import Navbar from "./_components/navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-accent/5 min-h-screen">
      <Navbar />
      <div className="container py-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;

import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import TabNavigation from "./TabNavigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="relative min-h-screen">
      {/* Show fixed navigation on home page */}
      {isHomePage && <Navigation variant="fixed" />}
      
      {/* Show tab navigation on all pages */}
      <TabNavigation />
      
      {children}
    </div>
  );
};

export default Layout;
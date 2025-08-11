import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="relative min-h-screen">
      {/* Only show fixed navigation on home page */}
      {isHomePage && <Navigation variant="fixed" />}
      {!isHomePage && (
        <header className="fixed top-2 left-4 z-[60]">
          <Link
            to="/"
            aria-label="Go to Needful homepage"
            className="font-script text-lg sm:text-xl text-muted-foreground hover:text-foreground transition-colors"
          >
            Needful
          </Link>
        </header>
      )}
      {children}
    </div>
  );
};

export default Layout;
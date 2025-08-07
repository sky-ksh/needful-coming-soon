import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="fixed top-4 right-4 z-[100]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem asChild>
            <Link to="/" className="w-full">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/nri-solutions" className="w-full">
              NRI Solutions
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/enterprise" className="w-full">
              Business Solutions
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/faq" className="w-full">
              Helpful Links
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navigation;
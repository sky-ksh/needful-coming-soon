import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  variant?: 'fixed' | 'inline';
}

const Navigation = ({ variant = 'fixed' }: NavigationProps) => {
  const content = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 z-[100] bg-background border">
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
  );

  if (variant === 'fixed') {
    return (
      <div className="fixed top-4 right-4 z-[100]">
        {content}
      </div>
    );
  }

  return content;
};

export default Navigation;
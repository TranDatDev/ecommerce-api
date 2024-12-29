import React from "react";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
const LandingPage: React.FC = () => {
  return (
    <div className="">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
      <div>
        <h1 className="text-4xl">Newly</h1>
      </div>

      <p>Đăng nhập để thực hiện</p>
      <Button variant="default">
        <Link to="/login">
          <p>Đăng nhập</p>
        </Link>
      </Button>
    </div>
  );
};

export default LandingPage;

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

import LandingHero from "./LandingPage/LandingHero";
import LandingNav from "./LandingPage/LandingNav";
import { Button } from "@/components/ui/button";
import LandingFooter from "./LandingPage/LandingFooter";
import { Helmet } from "react-helmet-async";
import ProductList from "./LandingPage/ProductList";
const LandingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Trang chủ - Ecommerce</title>
        <meta
          name="description"
          content="Đây là trang chủ của website ecommerce."
        />
        <meta property="og:title" content="Trang chủ - Ecommerce" />
        <meta
          property="og:description"
          content="Chào mừng bạn đến với cửa hàng trực tuyến của chúng tôi."
        />
      </Helmet>
      <div>
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
        <div className="flex container mx-auto p-5 justify-between items-center">
          <div>
            <h1 className="text-4xl">Newly</h1>
          </div>
          <LandingNav />
          <Link to="/login">
            <Button variant="default">
              <p>Đăng nhập</p>
            </Button>
          </Link>
        </div>

        <LandingHero />
      </div>
      <ProductList />
      <LandingFooter />
    </>
  );
};

export default LandingPage;

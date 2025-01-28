"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavigationPath = () => {
  return (
    <div className="w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-end">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-end">
        <Sheet>
          <SheetTrigger className="p-2 hover:bg-gray-100 rounded-lg" asChild>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle></SheetTitle>
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/docs"
                className="text-lg font-medium hover:text-gray-600 transition-colors"
              >
                Documentation
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavigationPath;

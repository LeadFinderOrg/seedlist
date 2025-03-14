"use client";

import Image from "next/image";
import Link from "next/link";

import { Settings } from "lucide-react";

import { MENU_ITEMS } from "@/utils/constants/menu-items";

import NavItem from "./NavItem";

const smallLogo = "/images/smallLogo.png";

export function AppSidebar() {
  return (
    <aside className="h-screen fixed left-0 top-0 z-40 flex md:w-20 w-16 flex-col bg-blue-50 border-r border-gray-300">
      <div className="flex h-16 items-center justify-center">
        <Link href="/" className="flex items-center justify-center">
          <Image src={smallLogo} alt="SeedList Logo" width={30} height={30} />
        </Link>
      </div>
      <div className="flex flex-1 flex-col items-center gap-6 py-4">
        {MENU_ITEMS.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 py-4 mt-auto">
        <NavItem
          href="/settings"
          icon={<Settings color="#1d4ed8" strokeWidth={2.25} />}
          label="Settings"
        />
      </div>
    </aside>
  );
}

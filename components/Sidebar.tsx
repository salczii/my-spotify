"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        label: "search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return <div>{children}</div>;
};

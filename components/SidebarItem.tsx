import React from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  href,
}) => {
  return <div>SideBarItem </div>;
};

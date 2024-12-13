"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

type SubNavItem = {
   title: string;
   url: string;
};

type NavItem = {
   title: string;
   url?: string;
   icon?: LucideIcon;
   isActive?: boolean;
   subNavItems?: SubNavItem[];
};

type NavGroup = {
   [key: string]: NavItem[] | undefined;
};

type NavMainProps = {
   items: NavGroup[];
};

export function AppSidebarMain({ items }: NavMainProps) {
   return (
      <SidebarGroup>
         {items.map((obj, index) => {
            const [groupLabel, menuItems] = Object.entries(obj)[0] as [
               string,
               NavItem[]
            ];

            return (
               <div key={groupLabel}>
                  <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
                  <SidebarMenu>
                     {menuItems.map((item, idx) => (
                        <SidebarMenuItem key={`${item.title}${idx}`}>
                           {item.subNavItems ? (
                              <Collapsible
                                 asChild
                                 defaultOpen={item.isActive}
                                 className="group/collapsible"
                              >
                                 <div>
                                    <CollapsibleTrigger asChild>
                                       <SidebarMenuButton tooltip={item.title}>
                                          {item.icon && <item.icon />}
                                          <span>{item.title}</span>
                                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                       </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                       <SidebarMenuSub>
                                          {item.subNavItems.map(
                                             (subItem, subIdx) => (
                                                <SidebarMenuSubItem
                                                   key={`${subItem.title}${subIdx}`}
                                                >
                                                   <SidebarMenuSubButton
                                                      asChild
                                                   >
                                                      <Link href={subItem.url}>
                                                         <span>
                                                            {subItem.title}
                                                         </span>
                                                      </Link>
                                                   </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                             )
                                          )}
                                       </SidebarMenuSub>
                                    </CollapsibleContent>
                                 </div>
                              </Collapsible>
                           ) : (
                              <SidebarMenuButton asChild tooltip={item.title}>
                                 <Link href={item.url || "#"}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                 </Link>
                              </SidebarMenuButton>
                           )}
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </div>
            );
         })}
      </SidebarGroup>
   );
}

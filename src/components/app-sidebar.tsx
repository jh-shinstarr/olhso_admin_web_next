"use client";

import * as React from "react";
import { AppSidebarMain } from "@/components/app-sidebar-main";
import { NavProjects } from "@/components/nav-projects";
import { TeamSwitcher } from "@/components/team-switcher";
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail,
} from "@/components/ui/sidebar";
import { dummyNavItems, dummyUser } from "@/constants/\bdummy";
import { AppSidebarUser } from "./app-sidebar-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar collapsible="icon" {...props}>
         {/* <SidebarHeader>
            <TeamSwitcher teams={data.teams} />
         </SidebarHeader> */}
         <SidebarContent>
            <AppSidebarMain items={dummyNavItems} />
         </SidebarContent>
         <SidebarFooter>
            <AppSidebarUser user={dummyUser} />
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   );
}

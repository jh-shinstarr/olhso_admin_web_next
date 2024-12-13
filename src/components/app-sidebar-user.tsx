"use client";

import {
   BadgeCheck,
   Bell,
   ChevronsUpDown,
   CreditCard,
   LogOut,
   Settings,
   Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   useSidebar,
} from "@/components/ui/sidebar";
import { useAtom } from "jotai";
import { alertDialogAtom } from "@/atoms";
import { clearAuthHeader } from "@/utils/tokenHandler";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./theme-change";

type UserProps = {
   firstname: string;
   lastname: string;
   email: string;
   avatar?: string;
};

type AppSidebarUserProps = {
   user: UserProps;
};

export function AppSidebarUser({ user }: AppSidebarUserProps) {
   const { firstname, lastname, email, avatar } = user;
   const router = useRouter();
   const [alertDialog, setAlertDialog] = useAtom(alertDialogAtom);
   const closeAlertDialog = () => {
      setAlertDialog((prev) => ({ ...prev, open: false }));
   };
   const { isMobile } = useSidebar();
   const onLogout = () => {
      clearAuthHeader();
      closeAlertDialog();
      router.push("/");
   };

   const handleLogout = () => {
      setAlertDialog((prev) => ({
         ...prev,
         open: true,
         title: "Logout",
         description: "Do you want to logout?",
         actionTitle: "OK",
         action: onLogout,
         cancelTitle: "Cancel",
         cancel: closeAlertDialog,
      }));
   };

   const nameCapitalize = (name: string) =>
      name[0].toUpperCase() + name.slice(1).toLowerCase();

   return (
      <SidebarMenu>
         <SidebarMenuItem>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                     size="lg"
                     className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                     <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                           src={avatar}
                           alt={`${firstname} ${lastname}`}
                        />
                        <AvatarFallback className="rounded-lg">
                           {firstname[0].toUpperCase()}
                           {lastname[0].toUpperCase()}
                        </AvatarFallback>
                     </Avatar>
                     <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                           {`${nameCapitalize(firstname)} ${nameCapitalize(
                              lastname
                           )}`}
                        </span>
                        <span className="truncate text-xs">{email}</span>
                     </div>
                     <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
               </DropdownMenuTrigger>
               <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align="end"
                  sideOffset={4}
               >
                  <DropdownMenuLabel className="p-0 font-normal">
                     <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                           <AvatarImage
                              src={user.avatar}
                              alt={`${user.firstname} ${user.lastname}`}
                           />
                           <AvatarFallback className="rounded-lg">
                              CN
                           </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                           <span className="truncate font-semibold">
                              {`${firstname} ${lastname}`}
                           </span>
                           <span className="truncate text-xs">{email}</span>
                        </div>
                     </div>
                  </DropdownMenuLabel>
                  {/* <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                     <DropdownMenuItem>
                        <Sparkles />
                        Upgrade to Pro
                     </DropdownMenuItem>
                  </DropdownMenuGroup> */}
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                     <DropdownMenuItem>
                        <BadgeCheck />
                        Account
                     </DropdownMenuItem>
                     {/* <DropdownMenuItem>
                        <CreditCard />
                        Billing
                     </DropdownMenuItem> */}

                     <DropdownMenuItem>
                        <Settings />
                        Settings
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                     <LogOut />
                     Log out
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </SidebarMenuItem>
      </SidebarMenu>
   );
}

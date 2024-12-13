import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/theme-change";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
export default function DashboardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="h-screen flex">
         <SidebarProvider>
            <AppSidebar />
            <div className="w-full">
               <SidebarTrigger className="absolute" />
               <div className="flex justify-between">
                  <div className="p-4">
                     <Image
                        className="hidden lg:block"
                        src="/shinstarr-logo-lg.png"
                        alt="logo"
                        width={150}
                        height={150}
                        style={{ height: "auto" }}
                     />
                     <Image
                        className="block lg:hidden"
                        src="/shinstarr-logo-sm.png"
                        alt="logo"
                        width={40}
                        height={40}
                     />
                  </div>
                  <ModeToggle />
               </div>

               <div className="p-4">{children}</div>
            </div>
         </SidebarProvider>
      </div>
   );
}

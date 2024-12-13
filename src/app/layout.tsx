import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CustomAlertDialog } from "@/components/custom-alert-dialog";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-change";
import { CustomDialog } from "@/components/custom-dialog";
import AxiosInstance from "@/components/axios-instance";

const geistSans = localFont({
   src: "./fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900",
});
const geistMono = localFont({
   src: "./fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

const whichEnvironment = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const metadata: Metadata = {
   title: "Shinstarr Presents Admin",
   description: "Shinstarr Presents Admin Web",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {whichEnvironment !== "production" && (
                  <div className="bg-red-500 opacity-40 text-center absolute right-0 ">
                     {whichEnvironment}
                  </div>
               )}
               <AxiosInstance>{children}</AxiosInstance>
               <Toaster />
               <CustomDialog />
               <CustomAlertDialog />
            </ThemeProvider>
         </body>
      </html>
   );
}

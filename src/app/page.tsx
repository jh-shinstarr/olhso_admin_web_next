"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
   const title = process.env.NEXT_PUBLIC_ENVIRONMENT;
   const router = useRouter();
   const [isLoggedIn, setIsLoggedIn] = useState<string | null>(null);

   useEffect(() => {
      const accessToken = localStorage.getItem("@access_token");
      if (accessToken) {
         router.push("/main");
      } else {
         router.push("/signin");
      }
   }, [router]);

   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>{title}</div>
         </main>
         <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
   );
}

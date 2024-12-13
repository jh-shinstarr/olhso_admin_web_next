"use client";

import Link from "next/link";

import {
   CardTitle,
   CardDescription,
   CardHeader,
   CardContent,
   CardFooter,
   Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import logIn from "@/utils/cognito";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "../ui/toaster";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { useRouter } from "next/navigation";
import { setToken } from "@/utils/tokenHandler";

export function SigninForm() {
   const router = useRouter();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {}, []);

   const handleSignin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!email || !password) {
         toast({
            variant: "destructive",
            duration: 2000,
            description: "Please fill in all fields.",
         });
         return;
      }
      setIsLoading(true);
      logIn(email, password)
         .then((session: CognitoUserSession) => {
            if (setToken(session)) {
               router.push("/main");
            } else {
               toast({
                  variant: "destructive",
                  duration: 3000,
                  description: "Failed to save tokens",
               });
            }
         })
         .catch((e) => {
            console.log(e);
            toast({
               variant: "destructive",
               duration: 3000,
               description: e.message,
            });
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <div
         className="w-full min-h-screen flex items-center justify-center"
         style={{
            backgroundImage: 'url("/main-background.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
      >
         <form onSubmit={handleSignin}>
            <Card>
               <CardHeader className="space-y-1">
                  <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
                  <CardDescription>
                     Enter your details to sign in to your account
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="space-y-2">
                     {/* <Label htmlFor="email">Email</Label> */}
                     <Input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="space-y-2">
                     {/* <Label htmlFor="password">Password</Label> */}
                     <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
               </CardContent>

               <CardFooter className="flex flex-col">
                  {/* <button
                     className={`w-full bg-[${colors.primary}]`}
                     type="submit"
                  >
                     Sign In
                  </button> */}
                  <Button variant="destructive" disabled={isLoading}>
                     {isLoading && <Loader2 className="animate-spin" />}
                     Sign In
                  </Button>
               </CardFooter>
            </Card>
            {/* <div className="mt-4 text-center text-sm">
               Don't have an account?
               <Link className="underline ml-2" href="signup">
                  Sign Up
               </Link>
            </div> */}
         </form>
         {/* <Toaster /> */}
      </div>
   );
}

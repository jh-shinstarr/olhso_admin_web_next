"use client";

import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAtom } from "jotai";
import { alertDialogAtom } from "@/atoms";

export function CustomAlertDialog() {
   const [alertDialog] = useAtom(alertDialogAtom);

   return (
      <AlertDialog open={alertDialog.open}>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>{alertDialog.title}</AlertDialogTitle>
               <AlertDialogDescription>
                  {alertDialog.description}
               </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
               {alertDialog.cancelTitle && (
                  <AlertDialogCancel onClick={alertDialog.cancel}>
                     {alertDialog.cancelTitle}
                  </AlertDialogCancel>
               )}
               <AlertDialogAction onClick={alertDialog.action}>
                  {alertDialog.actionTitle}
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}

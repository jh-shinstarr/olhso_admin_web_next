"use client";

import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAtom } from "jotai";
import { dialogAtom } from "@/atoms";
import CustomDropdown from "./custom-dropdown";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";

export function CustomDialog() {
   const [dialog, setDialog] = useAtom(dialogAtom);

   const closeDialog = () => {
      setDialog((prev) => ({ ...prev, open: false }));
   };

   //    const handleDropdownChange = (value: string) => {
   //       console.log(value);
   //       // Update the dialog with the selected value
   //       setDialog((prev) => ({
   //          ...prev,
   //          items: prev.items.map((item) =>
   //             item.id === "usedWoks" ? { ...item, value } : item
   //          ),
   //       }));
   //    };

   // Dropdown에서 선택된 값 업데이트
   const handleDropdownChange = (value: string) => {
      setDialog((prev) => ({
         ...prev,
         items: prev.items.map((item) =>
            item.id === "usedWoks" ? { ...item, value } : item
         ),
      }));
      console.log("Selected Value:", value);
   };

   //    const handleInputChange = (id: string, value: string | number) => {
   //       setDialog((prev) => ({
   //          ...prev,
   //          items: prev.items.map((item) =>
   //             item.id === id ? { ...item, value: String(value) } : item
   //          ),
   //       }));
   //    };
   return (
      <Dialog
         open={dialog.open}
         onOpenChange={(isOpen) =>
            setDialog((prev) => ({ ...prev, open: isOpen }))
         }
      >
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>{dialog.title}</DialogTitle>
               <DialogDescription>{dialog.description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
               {dialog.items?.map((item, index) => (
                  <div
                     key={index}
                     className="grid grid-cols-4 items-center gap-4"
                  >
                     <Label htmlFor="name" className="text-right">
                        {item.label}
                     </Label>
                     {item.type === "dropdown" ? (
                        <CustomDropdown
                           item={item}
                           options={item.options}
                           onSelect={handleDropdownChange}
                        />
                     ) : (
                        <Input
                           id={item.id}
                           value={item.value ?? ""}
                           className="col-span-3"
                           disabled={item.disabled}
                        />
                     )}
                  </div>
               ))}
            </div>
            <DialogFooter>
               {dialog.cancelTitle && (
                  <Button variant="outline" onClick={dialog.cancel}>
                     {dialog.cancelTitle}
                  </Button>
               )}
               <Button onClick={dialog.action} type="submit">
                  {dialog.actionTitle}
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}

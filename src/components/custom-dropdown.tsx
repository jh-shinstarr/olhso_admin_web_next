import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";

type CustomDropdownProps = {
   item: any;
   options: string[] | number[] | undefined;
   onSelect: (value: string) => void;
};

const CustomDropdown = ({ options, onSelect, item }: CustomDropdownProps) => {
   return (
      <div>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="outline">{item.value ?? "0"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
               {options?.map((option, index) => (
                  <DropdownMenuItem
                     key={index}
                     onClick={() => onSelect(String(option))}
                  >
                     {option}
                  </DropdownMenuItem>
               ))}
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   );
};

export default CustomDropdown;

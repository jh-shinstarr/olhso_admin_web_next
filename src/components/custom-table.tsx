import React from "react";

import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableFooter,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";

type CustomTableProps = {
   tableCaption?: string;
   tableHead: string[];
   tableBody: React.ReactNode;
   tableFooter?: Record<string, any>;
};

const CustomTable: React.FC<CustomTableProps> = ({
   tableCaption,
   tableHead,
   tableBody,
   tableFooter,
}) => {
   return (
      <Table>
         {tableCaption && <TableCaption>{tableCaption}</TableCaption>}
         <TableHeader>
            <TableRow>
               {tableHead?.map((head, index) => (
                  <TableHead className="text-center" key={index}>
                     {head}
                  </TableHead>
               ))}
            </TableRow>
         </TableHeader>
         {tableBody}
         {tableFooter && (
            <TableFooter>
               <TableRow>
                  <TableCell colSpan={2}>{tableFooter.title}</TableCell>
                  <TableCell className="text-right">
                     {tableFooter.content}
                  </TableCell>
               </TableRow>
            </TableFooter>
         )}
      </Table>
   );
};

export default CustomTable;

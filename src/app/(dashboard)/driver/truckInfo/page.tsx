"use client";
import React, { useEffect, useState } from "react";

import { adminTruckControllerFindMany } from "@/api/service/admin-trucks/admin-trucks";
import { useAtom } from "jotai";
import { alertDialogAtom, dialogAtom } from "@/atoms";
import axios from "axios";
import { Button } from "@/components/ui/button";
import CustomTable from "@/components/custom-table";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Truck, TruckWok, UpdateTruckDto } from "@/api/model";

const TruckInfoPage = () => {
   const [dialog, setDialog] = useAtom(dialogAtom);
   const [alertDialog, setAlertDialog] = useAtom(alertDialogAtom);
   const [trucks, setTrucks] = useState<Truck[]>([]);
   const [truckTableHead, setTruckTableHead] = useState<string[]>([]);

   const [selectedTruck, setSelectedTruck] = useState<{
      id: string;
      licensePlateNumber: string;
      usedWoks: number;
   } | null>(null);

   const closeDialog = () => {
      setDialog((prev) => ({ ...prev, open: false }));
   };

   const closeAlertDialog = () => {
      setAlertDialog((prev) => ({ ...prev, open: false }));
   };

   const handleSave = async () => {
      console.log(dialog.items);
      closeDialog();
   };

   const fetchTrucks = async () => {
      try {
         const response = await adminTruckControllerFindMany();
         const data: Truck[] = response.data.items;
         setTrucks(data);
         setTruckTableHead([
            "Truck Number",
            "Truck Name",
            "Dashboard",
            "Driving Status",
            "Truck Availability",
            "Functional Woks",
            "Functional Woks Edit",
         ]);
      } catch (error) {
         setAlertDialog({
            open: true,
            title: "Error",
            description: "Failed to load truck datadsfa",
            actionTitle: "OK",
            action: closeAlertDialog,
         });
      }
   };

   const calculateUsedWoks = (usedWoks: TruckWok) => {
      return Object.entries(usedWoks).filter(
         ([key, value]) => key.includes("wok") && value
      ).length;
   };

   const tableBody = (
      <TableBody>
         {trucks.map((truck, index) => {
            return (
               <TableRow key={truck.licensePlateNumber}>
                  <TableCell className="text-center">
                     {truck.licensePlateNumber}
                  </TableCell>
                  <TableCell className="text-center">{truck.name}</TableCell>
                  <TableCell className="text-center">
                     {truck.distance}
                  </TableCell>
                  <TableCell className="text-center">
                     {truck.drivingStatus}
                  </TableCell>
                  <TableCell className="text-center">
                     {truck.vehicleStatus}
                  </TableCell>
                  <TableCell className="text-center">
                     {truck.usedWoks && calculateUsedWoks(truck.usedWoks)}
                  </TableCell>
                  <TableCell className="text-center">
                     <Button
                        onClick={() => {
                           setDialog((prev) => ({
                              ...prev,
                              open: true,
                              title: "Edit Truck Functional Woks",
                              items: [
                                 {
                                    type: "text",
                                    id: "truckNumber",
                                    label: "Truck Number",
                                    value: truck.licensePlateNumber,
                                    disabled: true,
                                 },
                                 {
                                    type: "dropdown",
                                    id: "usedWoks",
                                    label: "Functional Woks",
                                    options: ["0", "1", "2", "3", "4"],
                                    value: truck.usedWoks
                                       ? String(
                                            calculateUsedWoks(truck.usedWoks)
                                         )
                                       : "0",
                                 },
                              ],
                              actionTitle: "Save",
                              action: handleSave,
                              cancelTitle: "Cancel",
                              cancel: closeDialog,
                           }));
                        }}
                     >
                        Edit
                     </Button>
                  </TableCell>
               </TableRow>
            );
         })}
      </TableBody>
   );

   useEffect(() => {
      const initializeAxiosAndFetch = async () => {
         await new Promise((resolve) => setTimeout(resolve, 0));
         fetchTrucks();
      };
      initializeAxiosAndFetch();
   }, []);

   useEffect(() => {
      console.log(dialog);
      console.log(selectedTruck);
   }, [dialog]);

   return (
      <div className="">
         <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold mb-4">Truck info</h1>
         </div>
         <CustomTable tableHead={truckTableHead} tableBody={tableBody} />
      </div>
   );
};

export default TruckInfoPage;

"use client";

import { PromotionBanner } from "@/api/model";
import { promotionBannerControllerFindMany } from "@/api/service/promotion-banner/promotion-banner";
import CustomTable from "@/components/custom-table";
import { TableBody } from "@/components/ui/table";
import React, { useEffect, useState } from "react";

const PromotionBannerPage = () => {
   const [promotionBanner, setPromotionBanner] = useState([]);

   const [promotionBannerTableHead, setPromotionBannerTableHead] = useState<
      string[]
   >([]);

   const fetchData = async () => {
      const response = await promotionBannerControllerFindMany();
      //   const data: PromotionBanner[] = response.data.item;
      console.log("response   ", response);
      //   setPromotionBanner(data);
      setPromotionBannerTableHead(["ID", "Thumbnail", "Title"]);
   };

   useEffect(() => {
      const initializeAxiosAndFetch = async () => {
         await new Promise((resolve) => setTimeout(resolve, 0));
         fetchData();
      };
      initializeAxiosAndFetch();
   }, []);

   const tableBody = <TableBody></TableBody>;

   return (
      <div className="">
         <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold mb-4">Promotion Banner</h1>
         </div>
         <CustomTable
            tableHead={promotionBannerTableHead}
            tableBody={tableBody}
         />
      </div>
   );
};

export default PromotionBannerPage;

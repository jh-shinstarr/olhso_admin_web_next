import { FaHome, FaTruck } from "react-icons/fa";
import { MdFace } from "react-icons/md";

// 아이콘 컴포넌트 타입 정의
export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// SubItem 타입 정의
export interface SubItem {
   label: string;
   href: string;
}

// MenuItem 타입 정의
export interface MenuItem {
   icon: IconType;
   label: string;
   href: string;
   subItems?: SubItem[];
}

// MenuSection 타입 정의
export interface MenuSection {
   title: string;
   items: MenuItem[];
}

// 최상위 메뉴 타입 정의
export const menuItems: MenuSection[] = [
   {
      title: "MENU",
      items: [
         {
            icon: FaHome,
            label: "Home",
            href: "/main",
         },
         {
            icon: FaTruck,
            label: "Truck",
            href: "/truck",
            subItems: [
               { label: "Truck Info", href: "/truck/truckInfo" },
               {
                  label: "Truck Delivery Status",
                  href: "/truck/truckDeliveryStatus",
               },
               { label: "Driver Info", href: "/truck/driverInfo" },
               {
                  label: "Inventory Registration",
                  href: "/truck/inventoryRegistration",
               },
               { label: "Inventory", href: "/truck/inventory" },
            ],
         },
         {
            icon: MdFace,
            label: "Client",
            href: "/client",
            subItems: [
               { label: "Coupon", href: "/client/coupon" },
               { label: "BBQ Coin", href: "/client/bbqCoin" },
               { label: "Push Notification", href: "/client/pushNotification" },
               { label: "Menu", href: "/client/menu" },
               { label: "Notice", href: "/client/notice" },
               { label: "Scheduled Orders", href: "/client/scheduledOrders" },
               { label: "Total Orders", href: "/client/totalOrders" },
               { label: "Canceled Orders", href: "/client/canceledOrders" },
               { label: "Users", href: "/client/users" },
               { label: "Reviews", href: "/client/reviews" },
            ],
         },
      ],
   },
];

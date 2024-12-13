import {
   AudioWaveform,
   Command,
   Frame,
   GalleryVerticalEnd,
   Map,
   PieChart,
   Ticket,
   CircleDollarSign,
   BellDot,
   Layout,
   NotepadText,
   ReceiptText,
   UserRoundSearch,
   MessageSquareHeart,
   Truck,
   IdCard,
   CirclePlus,
   Grid2X2,
   ChartBar,
   TicketSlash,
} from "lucide-react";

const dummyUser = {
   firstname: "shinstarr",
   lastname: "dev",
   email: "shinstarrdev@gmail.com",
   avatar: "/shinstarr-logo-sm.png",
};

const dummyTeams = [
   {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
   },
   {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
   },
   {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
   },
];

const dummyNavItems = [
   {
      Driver: [
         {
            title: "Truck Info",
            url: "/driver/truckInfo",
            icon: Truck,
            isActive: false,
         },
         {
            title: "Truck Delivery Status",
            url: "/driver/truckDeliveryStatus",
            icon: ChartBar,
         },
         {
            title: "Driver Info",
            icon: IdCard,
            subNavItems: [
               {
                  title: "Driver",
                  url: "/driver/drivers",
               },
               {
                  title: "Commute",
                  url: "/driver/commute",
               },
               {
                  title: "Truck Assignment",
                  url: "/driver/truckAssignment",
               },
               {
                  title: "Release Assignment",
                  url: "/driver/releaseAssignment",
               },
            ],
         },
         {
            title: "Inventory Registration",
            url: "/driver/inventoryRegistration",
            icon: CirclePlus,
         },
         {
            title: "Inventory",
            url: "/driver/inventory",
            icon: Grid2X2,
         },
      ],
   },
   {
      Client: [
         {
            title: "Coupon",
            url: "/client/coupon",
            icon: Ticket,
         },
         {
            title: "BBQ Coin",
            url: "/client/bbqCoin",
            icon: CircleDollarSign,
         },
         {
            title: "Push Notification",
            url: "/client/pushNotification",
            icon: BellDot,
         },
         {
            title: "Promotion Banner",
            url: "/client/promotionBanner",
            icon: TicketSlash,
         },
         {
            title: "Menu",
            url: "/client/menu",
            icon: Layout,
         },
         {
            title: "Notice",
            url: "/client/notice",
            icon: NotepadText,
         },
         {
            title: "Order",
            url: "/client/order",
            icon: ReceiptText,
         },
         {
            title: "Users",
            url: "/client/user",
            icon: UserRoundSearch,
         },
         {
            title: "Review",
            url: "/client/review",
            icon: MessageSquareHeart,
         },
      ],
   },
];

const dummyProjects = [
   {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
   },
   {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
   },
   {
      name: "Travel",
      url: "#",
      icon: Map,
   },
];

export { dummyUser, dummyTeams, dummyNavItems, dummyProjects };

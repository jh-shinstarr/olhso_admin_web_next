import AttendanceChart from "@/components/attendance-chart";
import CountChart from "@/components/count-chart";
import EventCalendar from "@/components/event-calendar";
import FinanceChart from "@/components/finance-chart";
import Announcements from "@/components/announcements";
import UserCard from "@/components/user-card";

const MainPage = () => {
   return (
      <div className="p-4 flex gap-4 flex-col md:flex-row">
         {/* LEFT */}
         <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* USER CARDS */}
            <div className="flex gap-4 justify-between flex-wrap">
               <UserCard type="student" />
               <UserCard type="teacher" />
               <UserCard type="parent" />
               <UserCard type="staff" />
            </div>
            {/* MIDDLE CHARTS */}
            <div className="flex gap-4 flex-col lg:flex-row">
               {/* COUNT CHART */}
               <div className="w-full lg:w-1/3 h-[450px]">
                  <CountChart />
               </div>
               {/* ATTENDANCE CHART */}
               <div className="w-full lg:w-2/3 h-[450px]">
                  <AttendanceChart />
               </div>
            </div>
            {/* BOTTOM CHART */}
            <div className="w-full h-[500px]">
               <FinanceChart />
            </div>
         </div>
         {/* RIGHT */}
         <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalendar />
            <Announcements />
         </div>
      </div>
   );
};

export default MainPage;

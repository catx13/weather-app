import { NavigationMenuDemo } from "@/appcomponents/NavigationBar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <div className='bg-background text-foreground  flex flex-col h-screen'>
        <NavigationMenuDemo />
        <div className="h-8"></div>
       <div className=" bg-secondary h-full flex-grow"> <Outlet /></div>
      </div>
    </>
  );
}

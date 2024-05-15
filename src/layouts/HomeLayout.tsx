import { NavigationMenuDemo } from "@/appcomponents/NavigationBar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <div className='bg-background text-foreground '>
        <NavigationMenuDemo />
       <div className="pt-16 bg-secondary"> <Outlet /></div>
      </div>
    </>
  );
}

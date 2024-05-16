import { DemoNotifications } from "@/appcomponents/Notifications";
import { Card } from "@/components/ui/card";
import React from "react";

export default function Profile() {
  return (
    <div className='flex justify-center align-middle h-svh items-center'>
      <Card className='p-4'>
        <DemoNotifications />
      </Card>
    </div>
  );
}

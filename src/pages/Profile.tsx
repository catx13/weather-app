import { DemoNotifications } from "@/appcomponents/Notifications";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
  return (
    <div
      className='flex flex-col justify-center align-middle h-full  items-center p-4'>
      <h2 className=' text-4xl font-extralight  md:text-2xl p-2 text-left w-full '>
        Profile Settings
      </h2>
      <Card className='p-4 h-full w-full'>
        <Tabs
          defaultValue='notification'
          orientation={"vertical"}
          className='flex '
          style={{
            height: "100%",
          }}
        >
          <TabsList className='flex flex-col h-full justify-start '>
            <TabsTrigger value='Account' className='w-full'>
              Account
            </TabsTrigger>
            <TabsTrigger value='notification' className='w-full'>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value='Account' className='p-4'>
            Change your Account here.
          </TabsContent>
          <TabsContent value='notification' className='p-4 '>
            <DemoNotifications />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

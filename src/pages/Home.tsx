import { NavigationMenuDemo } from "@/appcomponents/NavigationBar";
import { ThemeProvider } from "@/components/theme-provider";
import { ProductCarousel } from "@/appcomponents/ProductCarousel";

import { DemoNotifications } from "@/appcomponents/Notifications.jsx";
function Home() {
 
  return (
    <>
    <ThemeProvider >
    <div className='bg-background text-foreground '>
      <NavigationMenuDemo />
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-4'>
         Book Club
      </h1>
    </div>
    <ProductCarousel/>
    <div className="p-16">
    <DemoNotifications/>
    </div>
    </ThemeProvider>
    </>
  );
}

export default Home;

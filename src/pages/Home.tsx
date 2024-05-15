import { NavigationMenuDemo } from "@/appcomponents/NavigationBar";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Home() {
  return (
    <>
      <div className='bg-background text-foreground'>
      
        <NavigationMenuDemo />
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
           Book Club
        </h1>
      </div>
    </>
  );
}

export default Home;

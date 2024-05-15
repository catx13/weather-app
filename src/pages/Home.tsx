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
import { ThemeProvider } from "@/components/theme-provider";

function Home() {
  return (
    <>
    <ThemeProvider>
    <div className='bg-background text-foreground'>
      
      <NavigationMenuDemo />
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
         Book Club
      </h1>
    </div>
    </ThemeProvider>
    </>
  );
}

export default Home;

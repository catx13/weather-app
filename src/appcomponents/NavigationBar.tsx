"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { Theme } from "@/globals/datatypes";
import { LoginButton } from "./LoginButton";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<Theme>("system");
  const handleThemeSwitch = () => {
    console.log(currentTheme, "curr");
    console.log(localStorage.getItem("vite-ui-theme"), "ls");
    currentTheme === "dark"
      ? setCurrentTheme("light")
      : setCurrentTheme("dark");
    console.log(currentTheme, "curr");
    setTheme(currentTheme);
  };
  React.useEffect(() => {
    setCurrentTheme(localStorage.getItem("vite-ui-theme") as Theme);
    console.log(currentTheme,"effect")
  }, []);
  return (
    <NavigationMenu className='p-1' style={{ maxWidth: "100%" }}>
      <div className='flex justify-between ' style={{ width: "100%" }}>
        <NavigationMenuList>
          {" "}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                      href='/'
                    >
                      <div className='mb-2 mt-4 text-lg font-medium'>
                        shadcn/ui
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href='/' title='Introduction'>
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href='/' title='Installation'>
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href='/' title='Typography'>
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button onClick={handleThemeSwitch}>
              {currentTheme === "dark" ? (
                <Moon className='' />
              ) : (
                <Sun className='' />
              )}
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Button>Login</Button> */}
            <LoginButton/>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

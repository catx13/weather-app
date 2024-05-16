import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button'
import { Theme } from '@/globals/datatypes';
import { Moon, Sun, SunDim } from 'lucide-react';
import React from 'react'

export default function ThemeSwitchButton() {
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
    console.log(currentTheme, "effect");
  }, []);
  return (
    <div> <Button variant={"link"} onClick={handleThemeSwitch}>
    {currentTheme === "dark" ? (
      <Moon className='' />
    ) : (
      <Sun className='' />
    )}
  </Button></div>
  )
}

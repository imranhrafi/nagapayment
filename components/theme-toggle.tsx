"use client";
import { Button } from "@/components/ui/button";
import { MoonStar, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  if (!mounted) return null;
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={handleThemeToggle}
      className='fixed bottom-5 right-5'
    >
      {theme === "light" ? <MoonStar /> : <SunMoon />}
    </Button>
  );
};

export default ThemeToggle;

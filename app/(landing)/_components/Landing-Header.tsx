"use client";

import { Button } from "@/components/ui/button";
import LandingNavigation from "./Landing-Header-Navigation";
import { useEffect, useState } from "react";
const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 mx-auto flex items-center justify-between 
        transition-[width,background,padding,top,transform,box-shadow] duration-500 
        ${
          isScrolled
            ? "max-w-5xl top-5 px-5 py-3 bg-accent/30 backdrop-blur-md rounded-full shadow-lg scale-95"
            : "w-full top-0 px-10 py-6 bg-transparent scale-100 shadow-none"
        }`}
    >
      {/* Logo and App Title */}
      <h3
        aria-label="App Logo and Title"
        className="text-xl font-semibold"
        style={{ fontFamily: "--babas-neue" }}
      >
        POCKET <span className="text-primary">LIBRARY</span>
      </h3>

      {/* Navigation and Actions */}
      <div className="hidden md:flex flex-row items-center gap-10">
        <LandingNavigation />
        <Button className={`${isScrolled ? "rounded-full" : ""}`}>
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default LandingHeader;

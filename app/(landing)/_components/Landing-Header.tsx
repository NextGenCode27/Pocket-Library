import { Button } from "@/components/ui/button";
import LandingNavigation from "./Landing-Navigation";
const LandingHeader = () => {
  return (
    <header className="fixed flex w-full  flex-row items-center justify-between px-10 py-6 shadow">
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
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default LandingHeader;

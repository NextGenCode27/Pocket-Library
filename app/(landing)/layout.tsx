import { Metadata } from "next";
import { ReactNode } from "react";
import LandingHeader from "./_components/Landing-Header";

export const metadata: Metadata = {
  title: "Pocket Library | Landing",
  description: "Welcome to Pocket Library",
};

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-[url('/images/library-image.jpg')] min-h-screen bg-fixed">
      <div className="bg-black/95 min-h-screen">
        <LandingHeader />
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;

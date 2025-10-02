import { Metadata } from "next";
import { ReactNode } from "react";
import LandingHeader from "./_components/Landing-Header";

export const metadata: Metadata = {
  title: "Pocket Library | Landing",
  description: "Welcome to Pocket Library",
};

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <LandingHeader />
      {children}
    </main>
  );
};

export default LandingLayout;

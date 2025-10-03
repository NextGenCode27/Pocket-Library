import Book3D from "@/components/book/Book-3D";
import { Button } from "@/components/ui/button";
import { BookConstants } from "@/constants/book-constants";
import LandingSignInModal from "./Landing-SignIn-Modal";

const LandingHeroSection = () => {
  return (
    <section
      id="hero-section"
      className="flex flex-row h-screen w-full items-center mx-auto p-10"
    >
      <div className="flex flex-col md:flex-row h-full w-full md:w-1/2 items-center justify-center">
        <div className="flex flex-col max-w-lg h-full gap-2 items-center justify-center">
          <h3 className="text-3xl font-bold">
            All the Knowledge You Need, Right in Your{" "}
            <span
              className="text-primary text-4xl animate-pulse"
              style={{ fontFamily: "--bebas-neue" }}
            >
              Pocket.
            </span>
          </h3>
          <p className="text-muted-foreground">
            Pocket Library brings thousands of books right to your device, so
            you can read anytime, anywhere. Whether it’s study, research, or
            leisure —{" "}
            <span className="text-primary">
              your library is always within reach.
            </span>
          </p>
          <div className="flex w-full items-start justify-start mt-4">
            <LandingSignInModal />
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-full w-1/2 items-center justify-center relative">
        <div className="inset-0 flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] ">
            <div className="absolute z-0 transform-3d right-10 top-10 rotate-[20deg] max-sm:hidden opacity-60">
              <Book3D bookCoverImageUrl={BookConstants[1].bookCoverImageUrl} />
            </div>
            <div className="absolute z-0 transform-3d left-10 top-0">
              <Book3D bookCoverImageUrl={BookConstants[1].bookCoverImageUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeroSection;

import LandingFAQSection from "./_components/Landing-FAQ-Section";
import LandingFooterSection from "./_components/Landing-Footer-Section";
import LandingHeroSection from "./_components/Landing-Hero-Section";
import LandingPricingSection from "./_components/Landing-Pricing-Section";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <LandingHeroSection />
      <LandingPricingSection />
      <LandingFAQSection />
      <LandingFooterSection />
    </div>
  );
}

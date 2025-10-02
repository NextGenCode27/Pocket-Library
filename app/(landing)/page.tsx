import LandingHeroSection from "./_components/Landing-Hero-Section";
import LandingPricingSection from "./_components/Landing-Pricing-Section";
import LandingServicesSection from "./_components/Landing-Service-Section";

export default function Home() {
  return (
    <div>
      <LandingHeroSection />
      <LandingServicesSection />
      <LandingPricingSection />
    </div>
  );
}

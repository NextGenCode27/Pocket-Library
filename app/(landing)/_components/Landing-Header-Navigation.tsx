import Link from "next/link";

const NavigationLinks = [
  { name: "Home", href: "#hero-section" },
  // { name: "Services", href: "#" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "FAQ", href: "#FAQ-section" },
  { name: "Contact", href: "#footer-section" },
];

const LandingHeaderNavigation = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ul className="flex flex-row gap-6">
      {NavigationLinks.map((link) => (
        <li key={link.name}>
          <button
            onClick={() => handleScroll(link.href.replace("#", ""))}
            className="text-muted-foreground hover:text-primary transition"
          >
            {link.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LandingHeaderNavigation;

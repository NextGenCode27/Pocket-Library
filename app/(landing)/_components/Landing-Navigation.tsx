import Link from "next/link";

const NavigationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

const LandingNavigation = () => {
  return (
    <ul className="flex flex-row gap-6">
      {NavigationLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-muted-foreground hover:text-primary transition"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LandingNavigation;

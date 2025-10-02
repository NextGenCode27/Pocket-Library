const PricingConstants = [
  {
    name: "Free",
    price: 0,
    description: "Ideal for casual readers.",
    billingCycle: "Billed Monthly",
    features: [
      "Access to a limited selection of books",
      "Basic reading features",
      "Standard support",
      "Limited offline access",
      "Ads supported reading experience",
    ],
    isRecomended: false,
  },
  {
    name: "Pro",
    price: 2999,
    description: "Perfect for avid readers.",
    billingCycle: "Billed Monthly",
    features: [
      "Unlimited access to all books",
      "Advanced reading features",
      "Priority support",
      "Offline access to all books",
      "Ad-free reading experience",
    ],
    isRecomended: true,
  },

  {
    name: "Enterprise",
    price: 6999,
    description: "Best for organizations and teams.",
    billingCycle: "Billed Monthly",
    features: [
      "All Pro features",
      "Multi-user accounts",
      "Dedicated account manager",
      "Custom integrations",
      "Enhanced security features",
    ],
    isRecomended: false,
  },
];

export default PricingConstants;

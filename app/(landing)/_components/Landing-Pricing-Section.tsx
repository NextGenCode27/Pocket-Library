import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PricingConstants from "@/constants/pricing-constants";

const LandingPricingSection = () => {
  return (
    <div className="flex flex-row h-screen w-full items-center mx-auto p-10">
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <div className="flex flex-col gap-2 w-lg items-center justify-center mt-20">
          <h2 className="text-3xl font-bold">Pricing Plans</h2>
          <p className="text-muted-foreground text-center">
            Choose a plan that fits your reading needs. Upgrade, downgrade, or
            cancel anytime.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {PricingConstants.map((plan) => (
            <Card
              key={plan.name}
              className="w-sm bg-primary/5 shadow-2xl p-6 rounded-md hover:bg-primary/30 transition hover:scale-105 duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {plan.billingCycle}
                    </CardDescription>
                  </div>

                  {plan.isRecomended && (
                    <div className="rounded-full bg-background border border-border px-4 py-1">
                      <span className="text-xs font-medium text-primary">
                        Recommended
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <CardTitle className="text-3xl">
                  Rs. {plan.price}{" "}
                  <span className="text-sm"> /{plan.billingCycle}</span>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </div>
              <Separator />

              <ul>
                {plan.features.map((features, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground mt-4"
                  >
                    • {features}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPricingSection;

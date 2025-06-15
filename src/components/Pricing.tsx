
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Monthly",
    price: "₵30",
    period: "/month",
    description: "For dedicated learners who want to master communication.",
    features: [
      "Access to all courses",
      "Live session participation",
      "AI-powered feedback",
      "Personalized dashboard",
      "Downloadable resources",
    ],
    buttonText: "Start Subscription",
    popular: true,
  },
  {
    name: "Pay As You Go",
    price: "₵10-50",
    period: "/course",
    description: "Perfect for trying out specific courses.",
    features: [
      "Purchase single courses",
      "Lifetime access to purchased courses",
      "AI-powered feedback on course assignments",
      "Pay with Momo or Card",
    ],
    buttonText: "Browse Courses",
    popular: false,
  },
  {
    name: "For Schools",
    price: "Custom",
    period: "",
    description: "Equip your institution with top-tier communication training.",
    features: [
      "Volume discounts",
      "Admin dashboard for student tracking",
      "Custom curriculum integration",
      "Dedicated support",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const { toast } = useToast();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePricingButtonClick = (tierName: string) => {
    if (tierName === 'Pay As You Go') {
      handleScroll('courses');
    } else {
      toast({
        title: "Coming Soon!",
        description: "This feature is currently under construction.",
      });
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Flexible Pricing for Everyone
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose the plan that fits your learning style and goals.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
              <CardHeader className="pb-4">
                {tier.popular && (
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide">Most Popular</div>
                )}
                <CardTitle className="text-2xl pt-2">{tier.name}</CardTitle>
                <CardDescription className="pt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-xl font-semibold text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                  onClick={() => handlePricingButtonClick(tier.name)}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

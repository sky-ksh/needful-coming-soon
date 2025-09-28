import { useEffect } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PlansAndPricing = () => {
  useEffect(() => {
    document.title = "Plans & Pricing - Personal Assistant for Global Indians";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Choose the right plan for your needs. From basic support to white-glove service for Global Indians managing India-side tasks.");
    }
  }, []);

  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "WhatsApp-integrated AI Agent",
        "Weekly newsletter",
        "Access to community guides",
        "Access to services* for additional fees"
      ],
      popular: false
    },
    {
      name: "Dedicated",
      price: "$500",
      period: "/year",
      description: "For individuals needing dedicated support",
      features: [
        "Everything in Community",
        "Dedicated 24/7 Needful Concierge",
        "Taxes, visas, and other document support",
        "Ten 30-min consultations with Needful-vetted wealth or legal advisors",
        "Weekly newsletter with proprietary insights and expert financial analysis"
      ],
      popular: true
    },
    {
      name: "Platinum",
      price: "$2,000",
      period: "/year",
      description: "Premium service for comprehensive needs",
      features: [
        "Everything in Dedicated",
        "Twenty 30-min consultations",
        "Dedicated property and inheritance management",
        "Elder care"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Plans & Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right level of support for your India-side needs. From community resources to white-glove service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'} bg-card/50 backdrop-blur`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Community" ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need something custom? Have questions about our plans?
          </p>
          <Button variant="outline" size="lg">
            Contact Our Team
          </Button>
        </div>
      </main>
    </div>
  );
};

export default PlansAndPricing;
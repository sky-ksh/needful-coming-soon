import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const FAQs = () => {
  const faqs = [
    {
      title: "FAQ for OCI Applications",
      description: "Frequently asked questions about OCI process and requirements",
      href: "/faq/oci-applications"
    },
    {
      title: "FAQ for PAN Card Applications",
      description: "Common questions and answers about PAN card services",
      href: "/faq/pan-card"
    },
    {
      title: "Passport Renewal FAQ",
      description: "Common questions about passport renewal process",
      href: "/faq/passport-renewal-faq"
    },
    {
      title: "NRI Banking FAQ",
      description: "Frequently asked questions about banking for NRIs",
      href: "/faq/nri-banking-faq"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80" asChild>
              <Link to="/resources">
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Link>
            </Button>
            <Navigation variant="inline" />
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in mb-12">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-brand-purple" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-purple">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Quick answers to the most common questions about Indian paperwork and processes.
            </p>
          </div>

          <div className="grid gap-6">
            {faqs.map(faq => (
              <Card key={faq.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground hover:text-brand-purple transition-colors">
                        <Link to={faq.href} className="flex items-center gap-2">
                          {faq.title}
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {faq.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              Kindly doing the needful so you don't have to.
            </p>
            <Link to="/" className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQs;
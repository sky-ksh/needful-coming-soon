import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, HelpCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const guides = [
    {
      title: "DIY OCI Guide",
      description: "Step-by-step guide for Overseas Citizen of India applications",
      type: "guide",
      href: "/faq/diy-oci-guide"
    },
    {
      title: "DIY Passport Renewal Guide", 
      description: "Complete walkthrough for renewing your Indian passport",
      type: "guide",
      href: "/faq/diy-passport-renewal"
    },
    {
      title: "DIY PAN Card Guide",
      description: "Easy instructions for PAN card applications and corrections",
      type: "guide", 
      href: "/faq/diy-pan-card"
    }
  ];

  const faqs = [
    {
      title: "FAQ for OCI Applications",
      description: "Frequently asked questions about OCI process and requirements",
      type: "faq",
      href: "/faq/oci-applications"
    },
    {
      title: "FAQ for PAN Card Applications", 
      description: "Common questions and answers about PAN card services",
      type: "faq",
      href: "/faq/pan-card-applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80" asChild>
              <Link to="/nri-solutions">
                <ArrowLeft className="w-4 h-4" />
                Back to NRI Solutions
              </Link>
            </Button>
            <div className="text-2xl font-bold text-brand-purple">
              FAQ & Helpful Articles
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-purple mb-6">
              FAQ & Helpful Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Everything you need to know about Indian services and processes. 
              Find step-by-step guides and answers to common questions.
            </p>
          </div>

          <div className="space-y-12">
            {/* DIY Guides Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-brand-purple" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  DIY Guides
                </h2>
              </div>
              <div className="grid gap-4">
                {guides.map((guide) => (
                  <Card key={guide.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-foreground hover:text-brand-purple transition-colors">
                            <Link to={guide.href} className="flex items-center gap-2">
                              {guide.title}
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </CardTitle>
                          <CardDescription className="text-muted-foreground mt-2">
                            {guide.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-brand-purple" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <Card key={faq.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
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
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              Kindly doing the needful so you don't have to.
            </p>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Globe, FileText, CreditCard, Building2, ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NRISolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });
  const { toast } = useToast();

  const services = [
    { value: "oci", label: "OCI Application" },
    { value: "pan", label: "PAN Card" },
    { value: "nri-account", label: "NRI Account Opening" },
    { value: "other", label: "I need help with something else" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Successfully joined the community!",
      description: "We'll be in touch soon to help with your requirements.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", description: "" });
  };

  const features = [
    {
      icon: FileText,
      title: "OCI Application",
      description: "Complete assistance with Overseas Citizen of India applications and documentation"
    },
    {
      icon: CreditCard,
      title: "PAN Card Services",
      description: "Quick and hassle-free PAN card applications and updates for NRIs"
    },
    {
      icon: Building2,
      title: "NRI Account Opening",
      description: "Seamless bank account opening with our trusted banking partners"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="text-2xl font-bold text-brand-purple">
              NRI Solutions
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-purple mb-6 py-8 text-left">
              NRI Solutions
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90 leading-relaxed font-sans mb-8 text-left">
              Your gateway to Indian services. Simplified for NRIs worldwide.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 text-left">
              Whether you need help with official documentation, banking, or navigating Indian bureaucracy, 
              our platform connects you with trusted partners to get things done.
            </p>
          </div>
        </div>
      </section>

      {/* Community Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Be the first to access our platform and get help with your Indian service needs
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Get Started Today</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll connect you with the right partner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">What do you need help with? *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.service === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="description">Please describe what you need help with</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us more about your requirements..."
                      rows={4}
                    />
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg">
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Immediate assistance available through our partner network
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-brand-purple" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Simplifying access to Indian services for NRIs worldwide
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NRISolutions;
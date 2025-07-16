import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Globe, FileText, CreditCard, Building2, ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { getFunctions, httpsCallable } from "firebase/functions";
const NRISolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });
  const {
    toast
  } = useToast();
  const services = [{
    value: "oci",
    label: "OCI Application"
  }, {
    value: "pan",
    label: "PAN Card"
  }, {
    value: "nri-account",
    label: "NRI Account Opening"
  }, {
    value: "other",
    label: "I need help with something else"
  }];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and service selection are required.",
        variant: "destructive"
      });
      return;
    }
    const sendNRISolutionsFormEmail = async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "https://sendformemail-nhusq7w2vq-uc.a.run.app",
          data: {
            formData: formData,
            formType: "nri"
          },
          headers: {
            "Content-Type": "application/json"
          }
        });
        return response.data;
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
      }
    };
    await sendNRISolutionsFormEmail();
    toast({
      title: "Successfully joined the community!",
      description: "We'll be in touch soon to help with your requirements."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: ""
    });
  };
  const features = [{
    icon: FileText,
    title: "OCI Application",
    description: "Complete assistance with Overseas Citizen of India applications and documentation"
  }, {
    icon: CreditCard,
    title: "PAN Card Services",
    description: "Quick and hassle-free PAN card applications and updates for NRIs"
  }, {
    icon: Building2,
    title: "NRI Account Opening",
    description: "Seamless bank account opening with our trusted banking partners"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
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

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-purple mb-6">
              NRI Solutions
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-foreground/90 leading-relaxed font-sans mb-6">
              Your gateway to Indian services. Simplified for NRIs worldwide.
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mb-8">We're building a service agent for NRIs anywhere. Whether you need help with visa appointments, banking, or navigating Indian red tape, our platform serves to be your best friend, combining neat tech with real human help so you can get things done in India. No matter where you live.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Be the first to access our platform once it's ready. In the
              meantime, reach out for white-glove support to get things done in
              India.
            </p>
          </div>

          <div className="max-w-2xl">
            <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} required placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">What do you need help with? *</Label>
                    <Select value={formData.service} onValueChange={value => setFormData({
                    ...formData,
                    service: value
                  })} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.service === "other" && <div className="space-y-2">
                      <Label htmlFor="description">
                        Please describe what you need help with
                      </Label>
                      <Textarea id="description" value={formData.description} onChange={e => setFormData({
                    ...formData,
                    description: e.target.value
                  })} placeholder="Tell us more about your requirements..." rows={4} />
                    </div>}

                  <Button type="submit" className="w-full" size="lg">
                    Join the Needful Community
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <p className="text-muted-foreground">
            Simplifying access to Indian services for NRIs worldwide
          </p>
        </div>
      </footer>
    </div>;
};
export default NRISolutions;
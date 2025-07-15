import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-gradient-background font-sans">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/" className="inline-flex items-center text-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Hero Text */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="mb-12 py-8 overflow-visible">
              <h1 className="font-script text-6xl md:text-7xl lg:text-8xl font-normal leading-normal bg-gradient-to-r from-[#2A2A5B] to-[#8B5CF6] bg-clip-text text-transparent" style={{ overflow: 'visible' }}>
                Needful
              </h1>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Upgrade Your{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  CX Journey
                </span>{" "}
                With Needful.
              </h2>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-2xl">
                we embed into your NRI-facing workflows so you can delight your global customers with the speed and polish they expect.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:pl-8">
            <Card className="shadow-brand border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">
                  Get Started Today
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Tell us about your business and we'll show you how Needful can transform your customer experience.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" placeholder="VP of Customer Success" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <select 
                      id="companySize" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea 
                      id="message" 
                      placeholder="What challenges are you facing with your NRI customers? How can we help?"
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    variant="brand" 
                    size="lg" 
                    className="w-full text-lg py-6"
                    type="submit"
                  >
                    Get Your Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
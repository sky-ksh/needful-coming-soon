import { ChevronDown, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-brand rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-brand-purple-light rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-brand-purple rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <h1 className="font-script text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-brand bg-clip-text text-transparent leading-tight">
              Needful
            </h1>
          </div>

          {/* Tagline */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground leading-relaxed">
              Access India. Simply and Securely.
            </p>
          </div>

          {/* Description */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Founded by a team of Indian immigrant students and professors at MIT, Needful is an agentic AI platform that automates India's most painful manual processes to unlock growth for NRIs (Non-Resident Indians) and NRI-facing businesses.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="brand" size="lg" className="group">
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              I'm an NRI
            </Button>
            <Button variant="brand-outline" size="lg" className="group">
              <Building2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              I'm an Enterprise
            </Button>
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
              <div className="w-2 h-2 bg-brand-purple rounded-full mr-3 animate-glow-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <ChevronDown className="h-6 w-6 text-muted-foreground/60" />
          </div>
        </div>
      </div>

      {/* Additional sections could go here in the future */}
    </div>
  );
};

export default Index;

import { ChevronDown, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen bg-gradient-background font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-brand rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-brand-purple-light rounded-full blur-2xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-brand-purple rounded-full blur-2xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Logo */}
          <div className="mb-16 animate-fade-in py-16 px-16 overflow-visible w-full">
            <h1 className="font-script text-8xl md:text-9xl lg:text-[12rem] font-normal leading-[1.3] bg-gradient-to-r from-[#2A2A5B] via-[#5D4E8A] to-[#8B5CF6] bg-clip-text text-transparent w-full text-center min-h-[200px] flex items-center justify-center">
              Needful
            </h1>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <p className="text-2xl lg:text-4xl leading-relaxed font-sans font-medium text-zinc-950 md:text-4xl">
              Access India. Simply and Securely.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer" onClick={() => {
        document.getElementById('description')?.scrollIntoView({
          behavior: 'smooth'
        });
      }}>
          <ChevronDown className="h-8 w-8 text-foreground/60 hover:text-foreground transition-colors" />
        </div>
      </div>

      {/* Description Section */}
      <div id="description" className="min-h-screen flex items-center justify-center bg-gradient-background">
        <div className="container mx-auto px-6">
          {/* Description */}
          <div className="mb-12 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed text-left">
                Founded by a team of Indian immigrant students and professors at MIT, Needful is an agentic AI platform that automates India's most painful manual processes to unlock growth for NRIs (Non-Resident Indians) and NRI-facing businesses.
              </p>
            </div>
          </div>

          {/* Build Status */}
          <div className="mb-16 animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            <p className="text-lg md:text-xl text-foreground/80 text-left max-w-4xl mx-auto">We're building! Learn more about our solutions below:</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <Button variant="brand" size="lg" className="group" asChild>
              <Link to="/nri-solutions">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                NRI Solutions
              </Link>
            </Button>
            <Button variant="brand-outline" size="lg" className="group" asChild>
              <Link to="/enterprise">
                <Building2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Business Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;
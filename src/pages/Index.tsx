import { ChevronDown, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen bg-gradient-background font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 w-full h-full opacity-40">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-2xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-float" style={{
          animationDelay: '3s'
        }}></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="mb-20 animate-fade-in">
            <div className="relative inline-block px-4 py-2">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.85] bg-gradient-hero-text bg-clip-text text-transparent shadow-elegant">
                Needful
              </h1>
              {/* Premium glow effect */}
              <div className="absolute inset-0 font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.85] bg-gradient-hero-glow bg-clip-text text-transparent blur-sm -z-10 px-4 py-2">
                Needful
              </div>
              {/* Additional ambient glow */}
              <div className="absolute inset-0 font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.85] bg-gradient-premium bg-clip-text text-transparent blur-md opacity-40 -z-20 px-4 py-2">
                Needful
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative inline-block">
              <p className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-slate-800 tracking-wide shadow-text">
                Access India. Simply and Securely.
              </p>
              {/* Subtle text shadow */}
              <div className="absolute inset-0 font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-slate-600/30 blur-sm -z-10">
                Access India. Simply and Securely.
              </div>
            </div>
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
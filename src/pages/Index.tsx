import { ChevronDown, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen bg-background font-sans">
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{
          animationDelay: "1s"
        }}></div>
          <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-primary/25 rounded-full blur-2xl animate-float" style={{
          animationDelay: "2s"
        }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in flex items-center justify-center gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-primary flex items-center justify-center rounded-2xl px-0">
              <span className="text-black font-bold text-6xl md:text-7xl lg:text-8xl">N</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">
              Needful
            </h1>
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <p className="text-2xl lg:text-4xl leading-relaxed font-sans text-muted-foreground">
              Access India. Simply and Securely.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer" onClick={() => {
        document.getElementById("description")?.scrollIntoView({
          behavior: "smooth"
        });
      }}>
          <ChevronDown className="h-8 w-8 text-foreground/60 hover:text-foreground transition-colors" />
        </div>
      </div>

      <div id="description" className="min-h-screen flex items-center bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-12 animate-fade-in">
            <div className="max-w-4xl">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed text-left">Founded by a team of Indian immigrant students and professors at MIT, Needful is an AI platform that simplifies your financial and personal ties to India.</p>
            </div>
          </div>

          <div className="mb-16 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <p className="text-lg md:text-xl text-muted-foreground text-left max-w-4xl">
              We're building! Learn more about our solutions below:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <Button variant="default" size="lg" className="group bg-primary hover:bg-primary/90" asChild>
              <Link to="/nri-solutions">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                NRI Solutions
              </Link>
            </Button>
            <Button variant="default" size="lg" className="group bg-primary hover:bg-primary/90" asChild>
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
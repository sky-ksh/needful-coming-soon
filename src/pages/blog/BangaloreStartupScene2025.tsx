import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BangaloreStartupScene2025 = () => {
  // Basic SEO setup without extra deps
  useEffect(() => {
    const title = "Bangalore's Startup Scene in 2025: Real Signals Amid the Noise";
    const description = "How Bangalore moved beyond buzzwords to cement its position as India's leading startup hub with global rankings and deep institutional investment.";

    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical tag
    const canonicalHref = window.location.origin + window.location.pathname;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // JSON-LD structured data for Article
    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      author: {
        '@type': 'Organization',
        name: 'NRI Tools',
      },
      datePublished: '2025-08-08',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: canonicalHref,
      keywords: ['Bangalore startups', 'India startup ecosystem', 'Swiggy', 'tech funding', 'venture capital'],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      // Clean up JSON-LD to avoid duplicates on route changes
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80"
              asChild
            >
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
            <Navigation variant="inline" />
          </div>
        </div>
      </header>

      <main className="py-12 px-4">
        <article className="container mx-auto max-w-3xl prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Bangalore's Startup Scene in 2025: Real Signals Amid the Noise
            </h1>
          </header>

          <section className="space-y-6">
            <p>
              In 2025, Bangalore has moved beyond buzzwords and branding to cement its position as India's leading startup hub, with progress marked by global rankings and deep institutional investment.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Global Recognition and Ecosystem Maturity</h2>
            <p>
              Bangalore climbed seven spots to rank 14th in the Global Startup Ecosystem Report, emphasizing its evolution from an emerging force to a globally recognized tech center. This jump was driven by multiple $1 billion-plus exits, most notably Swiggy, now valued at $12 billion, reinforcing the city's ability to scale local ventures into global contenders.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Funding Momentum and Sectoral Growth</h2>
            <p>
              Amid a cautious global funding climate, Bangalore's startup collective has shown resilience. Seed capital in 2024 surged 26% year-over-year, reaching $268 million, while deal volume rose by 4%. Nationally, India secured $4.8 billion in tech startup funding in the first half of 2025, ranking third globally. Bangalore led the way, especially in high-growth sectors such as transportation, logistics, enterprise tech, and retail innovation.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Academic Support and Global Collaboration</h2>
            <p>
              Institutions are stepping in to sustain this momentum. IIM Bangalore inaugurated the Tony James Centre for Private Equity and Venture Capital, India's first academic hub focused exclusively on VC research. Meanwhile, initiatives like "Bridge to Bengaluru" and the upcoming Bengaluru Tech Summit 2025 aim to globalize the city's startup environment, connecting over 20,000 founders, international investors, and cross-border partners.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">The Undercurrent: Infrastructure Strain</h2>
            <p>
              Yet, beneath these achievements lies a familiar challenge: urban infrastructure. Bangalore continues to struggle with traffic congestion, water scarcity, and a rising cost of living, all of which threaten to hamper the very growth they enabled. These issues are not new, but in 2025, they are more pressing than ever.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Signal vs. Noise</h2>
            <p>
              In an era where startup ecosystems are often judged by their media buzz, Bangalore offers something more substantive. The city's rise is not built on empty headlines, but on structural investments, global benchmarks, and an increasingly sophisticated innovation culture.
            </p>
            <p>
              Still, the sustainability of Bangalore's startup boom depends on how well the city addresses its infrastructure deficit. Without parallel improvements in civic services and urban planning, the ecosystem risks becoming a victim of its own success.
            </p>
            <p>
              Bangalore's 2025 startup scene stands as a credible story of advancement. With rising global rankings, deep tech funding, and institutional collaboration, the city offers real signals of transformation. But turning this momentum into long-term success will depend on tackling the basics, so that the ecosystem is supported not just by capital and code, but by liveable cities and long-term growth.
            </p>
          </section>
        </article>
        
        {/* CTA Section */}
        <section className="container mx-auto max-w-3xl mt-16 px-4">
          <div className="bg-muted/30 border rounded-2xl p-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enjoyed this article? Want to learn more about upcoming opportunities in India? <Link 
                to="/nri-solutions" 
                className="text-brand-purple hover:text-brand-purple/80 underline underline-offset-4 transition-colors font-medium"
              >
                Join our community
              </Link> to get answers to all your India paperwork, tax-filing and investment-related questions.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">Kindly doing the needful so you don't have to.</p>
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

export default BangaloreStartupScene2025;
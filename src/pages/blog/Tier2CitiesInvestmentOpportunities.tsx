import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Tier2CitiesInvestmentOpportunities = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "India's Tier 2 Cities Are Booming. Here's Where the Smart Money Is Going | NRI Resources";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Investment opportunities in India\'s emerging urban centers beyond the metros');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Investment opportunities in India\'s emerging urban centers beyond the metros';
      document.head.appendChild(newMetaDescription);
    }

    // Set canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.href);
    } else {
      const newCanonicalLink = document.createElement('link');
      newCanonicalLink.rel = 'canonical';
      newCanonicalLink.href = window.location.href;
      document.head.appendChild(newCanonicalLink);
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "India's Tier 2 Cities Are Booming. Here's Where the Smart Money Is Going",
      "description": "Investment opportunities in India's emerging urban centers beyond the metros",
      "author": {
        "@type": "Organization",
        "name": "NRI Resources"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NRI Resources"
      },
      "keywords": "Tier 2 cities, India investment, emerging markets, NRI investment, smart cities"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
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

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              India's Tier 2 Cities Are Booming - Here's Why
            </h1>
            
            <p className="mb-6">
              India is undergoing a significant urban transformation, and Tier 2 cities are rapidly becoming powerful engines of growth. Traditionally, while metros like Mumbai, Delhi and Bengaluru have taken centre stage, the country's Tier 2 cities are where investors are paying attention.
            </p>

            <p className="mb-4"><strong>What are India's Tier 2 cities?</strong></p>
            
            <p className="mb-6">
              Tier 2 cities are urban areas with populations between 1 and 5 million. Unlike the saturated metros, these cities offer lower living and operational costs, a growing consumer base, and competitive ecosystems for companies to thrive. Key examples include Nagpur, Kochi, Jaipur, Chandigarh, and Lucknow. These cities are rapidly attracting businesses, talent, infrastructure, and investments: signs of promising long-term economic growth.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Why the Smart Money Is Moving In</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">1. Lower costs and Higher Returns</h3>
            
            <p className="mb-6">
              From real estate to recruitment, Tier 2 cities are significantly more cost-efficient than their Tier 1 counterparts. For startups as well as India's micro, small, and medium enterprises (MSMEs), this means job creation, faster break-even points and healthier margins due to lower real estate and workforce costs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">2. A Young, Skilled Talent Pool</h3>
            
            <p className="mb-6">
              Many young professionals are choosing to work closer to home or return to their hometowns. Workers value quality of life, proximity to family, and lower living costs more than living in big cities. As jobs also become more remote and hybrid-friendly, young talent is no longer metro-bound.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">3. Government Support</h3>
            
            <p className="mb-4">
              Both central and state governments are actively supporting Tier 2 growth through major infrastructure and urban development schemes. These cities are central to India's long-term strategy for distributed, inclusive economic expansion.
            </p>
            
            <p className="mb-4">
              <strong>Smart Cities Mission:</strong> Launched to improve urban infrastructure, services, and digital connectivity in 100 cities, many Tier 2 metros have been selected for large-scale urban development.
            </p>
            <p className="mb-4">
              <strong>PM Gati Shakti National Master Plan:</strong> A game-changing infrastructure effort aimed at boosting connectivity between cities and industrial hubs, reducing logistics costs and strengthening supply chains.
            </p>
            <p className="mb-4">
              <strong>Ease of Doing Business Reforms:</strong> Simplifying regulatory approvals and incentivizing MSMEs in Tier 2 and 3 cities, fostering entrepreneurship at the grassroots.
            </p>
            <p className="mb-4">
              <strong>Manufacturing and Export Hub Incentives:</strong> State governments including Gujarat, Tamil Nadu, and Punjab are offering land, subsidies, and tax breaks to attract large-scale manufacturing projects outside typical metros.
            </p>
            <p className="mb-6">
              <strong>Digital India and Skill India:</strong> These initiatives bolster technology adoption and skill development in Tier 2 regions, aligning talent with industry needs.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Top Tier 2 Hotspots with the Most Growth Potential</h2>
            
            <p className="mb-6">
              For NRIs, HNWIs, and investors looking to tap into this trend, here's a curated list of Tier 2 cities to watch—each with unique sectoral strengths and high growth trajectories:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-4 text-left font-semibold">City</th>
                    <th className="border border-border p-4 text-left font-semibold">Key Growth Sectors</th>
                    <th className="border border-border p-4 text-left font-semibold">Why Watch?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 font-medium">Ahmedabad</td>
                    <td className="border border-border p-4">Fintech, Textiles, Manufacturing</td>
                    <td className="border border-border p-4">Gujarat's business hub with a fintech boom, rapid infrastructure growth, and a robust industrial base; gateway to western India.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-4 font-medium">Ludhiana</td>
                    <td className="border border-border p-4">Textiles, Auto Components, Engineering Goods</td>
                    <td className="border border-border p-4">India's largest hosiery cluster; export-oriented manufacturing with increasing tech & industrial upgrades.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">Surat</td>
                    <td className="border border-border p-4">Diamonds, Textiles, Chemicals</td>
                    <td className="border border-border p-4">World's diamond polishing capital; rapidly expanding textile and chemical industries; strong export focus.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-4 font-medium">Coimbatore</td>
                    <td className="border border-border p-4">IT, Manufacturing, Engineering</td>
                    <td className="border border-border p-4">Thriving IT parks alongside strong engineering and textile industries; called "Manchester of South India."</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">Jaipur</td>
                    <td className="border border-border p-4">IT/ITES, Tourism, Handicrafts</td>
                    <td className="border border-border p-4">Rapidly maturing IT hubs, tourism-driven economy, and emerging real estate demand.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-4 font-medium">Indore</td>
                    <td className="border border-border p-4">Pharmaceuticals, Education, IT</td>
                    <td className="border border-border p-4">Pharma cluster with strong educational institutions and growing IT presence.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">Nashik</td>
                    <td className="border border-border p-4">Automotive, Agriculture Machinery</td>
                    <td className="border border-border p-4">Known for auto manufacturing and agricultural equipment with improving infrastructure for exports.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-4 font-medium">Mysuru</td>
                    <td className="border border-border p-4">Cybersecurity, IT, Tourism</td>
                    <td className="border border-border p-4">Emerging as a cybersecurity hub with a growing IT ecosystem and a vibrant heritage tourism sector.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">Nagpur</td>
                    <td className="border border-border p-4">Logistics, IT, Agriculture</td>
                    <td className="border border-border p-4">Strategic location with strong logistics infrastructure under Bharatmala and growing IT parks.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              The rapid expansion into Tier 2 cities unlocks new markets, drives job creation, and improves service accessibility. In 2024 alone, production and manufacturing jobs in these cities grew by 29%, while the IT sector posted 17% growth, emphasizing their emerging role as engines of employment and innovation.
            </p>

            <p className="mb-6">
              India's Tier 2 cities are no longer playing catch-up; they are defining the next phase of the country's economic story. With a strong mix of affordability, emerging infrastructure and supportive policy, they present a compelling alternative to over-saturated metros. The shift of both consumers and companies toward these cities is the signal of a broader transformation, one that can be more distributed, inclusive, and sustainable. As businesses begin to adopt a "Tier 2 first" approach and talent chooses to stay rooted in these regions, the spotlight on India's smaller cities will only grow brighter. The smart money isn't just moving in; it's betting big on the future being built in Tier 2 cities.
            </p>
          </article>
          
          {/* CTA Section */}
          <div className="mt-16">
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
          </div>
        </div>
      </main>

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

export default Tier2CitiesInvestmentOpportunities;
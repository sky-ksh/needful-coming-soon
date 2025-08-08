import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const GoaPropertyInvestmentRisks = () => {
  // Basic SEO setup without extra deps
  useEffect(() => {
    const pageH1 = "Why Everyone from Dubai to New Jersey Is Buying Property in Goa (and Why You Should Be Cautious)";
    const title = "Goa Property Boom: Why NRIs Should Be Cautious"; // <60 chars
    const description =
      "Goa property boom guide for NRIs: appreciation, rental yields, title & zoning risks, plotting vs turnkey, and emerging locations.";

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
      headline: pageH1,
      description,
      author: {
        '@type': 'Organization',
        name: 'NRI Tools',
      },
      datePublished: '2025-08-08',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: canonicalHref,
      keywords: [
        'Goa property',
        'NRI investment',
        'rental yields',
        'title risk',
        'zoning CRZ',
        'plotting vs turnkey',
        'Sindhudurg',
        'South Goa',
      ],
    } as const;
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
              Why Everyone from Dubai to New Jersey Is Buying Property in Goa (and Why You Should Be Cautious)
            </h1>
          </header>

          <section className="space-y-6">
            <p>
              Goa isn’t just a holiday destination anymore: it’s a real estate phenomenon. From Dubai to New Jersey, wealthy Indians and interested buyers are rushing to stake a claim in India’s sunshine state. Developers are responding with high-end villas, plotted communities, and marketing campaigns aimed squarely at the diaspora.
            </p>
            <p>
              <strong>Overseas Indians now account for nearly 25% of premium property purchases in Goa</strong> (
              <a href="https://economictimes.indiatimes.com/nri/invest/home-run-nris-share-in-realty-market-doubles-post-pandemic" target="_blank" rel="noopener noreferrer">Economic Times</a>
              ), drawn by the mix of lifestyle, investment potential, and new trends like sustainability-focused living and wellness-oriented residences. Eco-friendly gated communities with renewable energy systems, green spaces, and proximity to yoga retreats or therapeutic beaches are increasingly marketed as a “two birds, one stone” investment: good for returns, good for your well-being.
            </p>
            <p>
              But while the Goa property dream is real, so are the hurdles. If you’re considering buying here, you need to know what’s driving the boom, what traps to avoid, and where the smarter opportunities lie.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Why the Goa Gold Rush?</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6">1. Capital appreciation</h3>
            <p>
              Prime North Goa pockets like Assagao, Anjuna, and Siolim have seen prices rise ~90% over the past four years. Pandemic-era buying pushed annual growth into double digits in many areas, and limited developable land keeps upward pressure on prices.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">2. Higher rental yields than metros</h3>
            <p>
              Tourist demand now runs nearly year-round. According to interior designer and property manager Carl Motiwalla, well-managed villas can cover a significant portion of their upkeep through short-term rentals. Rental yields in most metro markets are abysmally low at ~1-2%, while yields in Goa and other holiday markets can be more than double.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">3. Infrastructure upgrades</h3>
            <p>
              The new Manohar International Airport at Mopa has opened direct routes from Dubai, London, and Singapore. Upgraded highways and Vande Bharat trains are shrinking travel times from Mumbai and Bangalore, expanding the weekend and holiday rental market.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">4. Lifestyle + wellness appeal</h3>
            <p>
              Beyond the beaches, a growing segment of buyers is seeking communities that blend wellness amenities (yoga shalas, spa services, nature trails) with eco-conscious design. Developers are leaning in, creating projects with rainwater harvesting, solar panels, and native landscaping.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Who can buy land in Goa</h2>
            <ul>
              <li>
                <strong>Indian citizens</strong> can freely buy non-agricultural land. Agricultural land is only allowed if the buyer is a farmer or intends to take up farming.
              </li>
              <li>
                <strong>NRIs</strong> can purchase residential or commercial property but cannot buy agricultural or plantation land: they can buy <strong>“settlement land,”</strong> which is essentially converted agricultural land approved for residential/commercial use.
              </li>
              <li>
                <strong>Foreign nationals</strong> generally cannot buy property in India unless they have lived in the country for more than 182 days in the previous financial year and qualify for residency — even then, agricultural land remains off-limits.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10">The Not-So-Sunny Side of Buying Real-Estate in Goa</h2>
            <h3 className="text-xl font-semibold text-foreground mt-6">1. Title risks</h3>
            <p>
              Goa’s property records are a legacy of Portuguese administration, and not all were properly updated after 1961. Disputes, missing heirs, and even forged deeds have occurred (
              <a href="https://indianexpress.com/article/express-exclusive/a-goa-scam-unravels-portuguese-era-land-papers-forged-properties-sold-by-the-dead-9739538/" target="_blank" rel="noopener noreferrer">Indian Express</a>
              ). Always hire a title lawyer to check the chain of ownership for at least 30 years.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">2. Zoning and CRZ restrictions</h3>
            <p>
              Even on NA land, you may face restrictions — “orchard” zoning, Coastal Regulation Zone limits, or eco-sensitive classifications can block your building plans. Converting land use (<em>Sanad</em>) is time-consuming and not guaranteed.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">3. Market saturation in North Goa</h3>
            <p>
              Villa prices in marquee areas have plateaued in 2025 after years of sharp growth. Our real-estate expert Nitya Somani says areas like Assagao are already maxed out, with limited inventory, sky-high prices, and slower future appreciation.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">4. Maintenance and liquidity</h3>
            <p>
              Monsoons, salty air, and pests make upkeep expensive. Hidden costs — from furnishing to repairs, utilities, and property management — can eat into returns. High-end villas can also take months to sell.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Smarter Ways to Play the Goa Market</h2>
            <h3 className="text-xl font-semibold text-foreground mt-6">1. Leverage the land plotting trend</h3>
            <p>
              Instead of chasing raw agricultural land, Somani recommends buying developed plots in approved projects where the developer has already secured conversion and approvals.
            </p>
            <p>
              This is hot in Sindhudurg and Goa’s fringe areas, where developers build shared infrastructure (roads, clubhouses) and sell serviced plots. This model offers lower capital outlay, flexibility for future construction, and often easier resale.
            </p>
            <ul>
              <li>
                <strong>House of Abhinandan Lodha (HOABL)</strong> has launched large serviced plot communities in Sindhudurg, just across the Goa border: lower entry prices, no farm law issues, and optional home-building services.
              </li>
              <li>
                <strong>Tata Realty</strong>, <strong>Risara</strong>, and <strong>Emaar</strong> are also active in the coastal second-home market, offering plotted schemes or gated communities.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">2. Opt for turnkey villas and apartments</h3>
            <p>
              Developers like <strong>Prestige</strong> and <strong>Veera</strong> cater specifically to NRI and HNI buyers, delivering fully furnished homes with clean titles and optional management services. You’ll pay a premium, but skip most of the legal and bureaucratic legwork. In this vein, buying from builders that offer property management services (such as <strong>Isprava</strong>) also serves as a more efficient opportunity to enter the Goan market without the hassle.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Beyond Goa: Where Else Experts Are Looking</h2>
            <ul>
              <li>
                <strong>Sindhudurg (Maharashtra)</strong> – On the Goa border; cheaper land, growing infrastructure, and major plotting projects.
              </li>
              <li>
                <strong>South Goa</strong> – Untapped beaches and lower prices, but minimal social infrastructure for now. A long-term bet.
              </li>
              <li>
                <strong>Alibaug (Maharashtra)</strong> – Connected to Mumbai via Trans-Harbour Sea Link and ferries; Emaar is building a ₹400 crore project here. Strong weekend home market, but yields rely on Mumbai buyers.
              </li>
              <li>
                <strong>Karjat (Maharashtra)</strong> – Scenic countryside east of Mumbai; gated communities are emerging. More speculative but low entry prices.
              </li>
              <li>
                <strong>Kasauli & Himachal Hills</strong> – Cool climate, exclusivity, and limited inventory. Construction is costly; better for personal use than rentals.
              </li>
              <li>
                <strong>Ayodhya & religious tourism hubs</strong> – Niche but growing segment as domestic travel booms.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10">Should You Buy in Goa Right Now?</h2>
            <p>
              If your goal is <strong>lifestyle + some yield</strong>, Goa still offers an unmatched blend: global connectivity, strong tourism-driven rental demand, and long-term fundamentals, provided you stick to NA land and vetted developers.
            </p>
            <p>
              If your goal is <strong>pure investment returns</strong>, temper expectations. The easy gains in prime North Goa are over for now; consider emerging locations like Sindhudurg plots, South Goa, or early-stage Karjat for better appreciation potential.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10">The Takeaway</h2>
            <ul>
              <li><strong>Do your due diligence</strong> — title, zoning, CRZ compliance.</li>
              <li><strong>Plan for ongoing costs</strong> and slower liquidity.</li>
              <li><strong>Consider developer-led plots and emerging locations</strong> for a better balance of price, risk, and upside.</li>
            </ul>
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

export default GoaPropertyInvestmentRisks;

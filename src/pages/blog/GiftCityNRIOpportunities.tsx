import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const GiftCityNRIOpportunities = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "What is GIFT City and how can NRIs take advantage of it? | NRI Resources";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understanding India\'s financial hub and the opportunities it presents for overseas Indians');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Understanding India\'s financial hub and the opportunities it presents for overseas Indians';
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
      "headline": "What is GIFT City and how can NRIs take advantage of it?",
      "description": "Understanding India's financial hub and the opportunities it presents for overseas Indians",
      "author": {
        "@type": "Organization",
        "name": "NRI Resources"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NRI Resources"
      },
      "keywords": "GIFT City, NRI investment, IFSC, India financial services, tax breaks, NRI banking"
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
              GIFT City: India's Financial "Gift" to the Indian Diaspora
            </h1>
            
            <p className="mb-6">
              If you're an NRI, OCI, or part of the 35 million-strong Indian diaspora watching India's economic party from Dubai, New York, or beyond, you've probably bemoaned the paperwork, TDS, and currency headaches of investing "back home." What if India simply built its own Dubai or Singapore—a financial zone with global standards, tax breaks, and regulatory flexibility…right on its own turf?
            </p>
            
            <p className="mb-6">
              Meet <strong>GIFT City</strong>, short for Gujarat International Finance Tec-City: India's shiny new "offshore" financial hub tailor-made for global Indians who want in on India's growth, minus the usual red tape.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">What is GIFT City, Really?</h2>
            
            <p className="mb-4">Think of <strong>GIFT City</strong> as…</p>
            
            <p className="mb-4">
              • India's answer to Singapore and Dubai's financial districts: a gleaming, custom-built urban zone near Ahmedabad, with its own financial laws, regulator (IFSCA), and international infrastructure.
            </p>
            <p className="mb-4">
              • An <strong>International Financial Services Centre (IFSC)</strong> treated as being "outside" India for most financial regulations purposes, even though it's physically on Indian soil.
            </p>
            <p className="mb-6">
              • Your chance to invest, bank, trade global stocks, and even park currency in USD, AED, GBP or EUR—often with zero Indian taxes and minimal paperwork.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">What Makes GIFT City a Big Deal for NRIs?</h2>
            
            <p className="mb-4"><strong>Pain Points, Addressed:</strong></p>
            
            <p className="mb-4">If you've ever felt the burn of…</p>
            
            <p className="mb-4">• Indian TDS chewing into your returns,</p>
            <p className="mb-4">• Voluntary "marathons" of KYC, notarized documents, or Indian tax filings,</p>
            <p className="mb-4">• The headache of converting your dollars/dirhams/euros just to invest, and then worrying about the rupee's next mood swing,</p>
            <p className="mb-6">• The "why did I even bother" feeling of dealing with India's paperwork maze,</p>
            
            <p className="mb-6">…GIFT City is your golden ticket. Here's why:</p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. NRI/OCI-Friendly Tax Breaks</h2>
            
            <p className="mb-4">
              <strong>Zero or Ultra-Low Tax:</strong> Profits from certain financial products in GIFT City get up to 100% income-tax exemption on derivatives and offshore investment products. Mutual fund gains are tax-free or taxed as low as 9–15% (versus 20–30% in regular India), and dividends at just 7.5–10%. Some structures mean you pay <strong>no Indian capital gains tax</strong> (always check tax treaties with your home country).
            </p>
            <p className="mb-4">
              <strong>Minimal/No TDS:</strong> Unlike "mainland" investments, many GIFT City products don't trigger India's dreaded tax deduction at source on every payout.
            </p>
            <p className="mb-6">
              <strong>No GST, STT, or Indian stamp duty on IFSC trades</strong>—meaning more of your returns stay yours.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Invest in Global Currencies—Skip INR Drama</h2>
            
            <p className="mb-4">
              <strong>USD, AED, GBP, EUR… you pick.</strong> You can open GIFT City accounts and invest in mutual funds, global stocks, or FDs in your home currency—no forced rupee conversion (and no INR risk if you don't want it).
            </p>
            <p className="mb-6">
              <strong>USD in, USD out:</strong> Straightforward remittance and repatriation. NRI Redditors rave about how easy it is to move money between Dubai, Singapore, or London banks and GIFT City accounts—no RBI bottlenecks, no taxman interrogations at every exit.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. Streamlined, Global-Standard Compliance</h2>
            
            <p className="mb-4">
              <strong>KYC that doesn't require you to fly to India</strong>: Video-based onboarding, digital document submission—some institutions will walk you through in days, not months.
            </p>
            <p className="mb-4">
              You often <strong>don't need an Indian address, local bank account, or sometimes even a PAN</strong> to invest—IFSC units often treat you like any international investor.
            </p>
            <p className="mb-6">
              Most GIFT City investments <strong>don't require you to file an Indian tax return</strong> if all income stays within GIFT City and isn't taxable in India.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. Offshore Investment Options, Onshore Convenience</h2>
            
            <p className="mb-4">
              <strong>Access global markets and funds</strong>: Buy US, European, or global stocks and ETFs on GIFT City's exchanges (India INX, NSE IFSC). Invest in feeder and alternative funds run by India's top AMCs and global names.
            </p>
            <p className="mb-4">
              <strong>Open multi-currency bank accounts and FDs</strong>: Highly attractive if you're parking funds for a property, education, or even as part of family/estate planning.
            </p>
            <p className="mb-4">
              <strong>Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs) for high-net-worths</strong>: If you're parking $150,000+ (about ₹1.25 crore), you can participate in sophisticated, professionally managed vehicles—everything from global tech to India realty to VC.
            </p>
            <p className="mb-6">
              Insurance, family trusts, company setups, even real estate—GIFT City is a financial playground that's rapidly expanding.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Any Catches? The Fine Print</h2>
            
            <p className="mb-4">
              <strong>Investment Minimums Still Skew High:</strong> Many opportunities (especially AIFs, PMS) require $150,000+—but more retail NRI products are coming soon.
            </p>
            <p className="mb-4">
              <strong>Liquidity Isn't Wall Street Yet</strong>: GIFT City exchange trading volumes are rising, but still small relative to NYSE or NSE. Some funds may be close-ended or have redemption windows.
            </p>
            <p className="mb-4">
              <strong>Regulatory Tweaks Still Ongoing:</strong> GIFT City is new; rules will continue evolving. But the pro-NRI, pro-offshore direction is clear (see the Budget 2025 tax incentives and permanent reforms).
            </p>
            <p className="mb-6">
              <strong>You Still Owe Tax Where You Live:</strong> The zero-tax dream applies on the Indian side; you may owe taxes on global income in, say, the US or UAE. Check with your tax advisor, especially about treaty rules.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">How to Actually Use GIFT City (Without Losing Hair)</h2>
            
            <p className="mb-4"><strong>1. Decide: Fund, FD, Trading Account, or AIF?</strong></p>
            
            <p className="mb-6">
              Pick what fits your needs. Want a USD FD in an Indian bank? Direct funds for global ETFs? Dream of diversifying with a tech-focused PMS fund? Top names—HDFC, ICICI, SBI, Mirae, WhiteOak, etc.—now have IFSC units or partner funds.
            </p>
            
            <p className="mb-4"><strong>2. Open an IFSC Account/Investment</strong></p>
            
            <p className="mb-6">
              Most onboarding is digital. Passport, address proof, OCI are typically enough. Minimal need for Indian paperwork; if a PAN is required, it's for ease, not law.
            </p>
            
            <p className="mb-4"><strong>3. Fund in Foreign Currency</strong></p>
            
            <p className="mb-6">
              Wire transfer from your abroad bank, often via SWIFT. Specify it's for an IFSC/"offshore" unit—no LRS limits or RBI forms for most products.
            </p>
            
            <p className="mb-4"><strong>4. Invest, Monitor, Repatriate</strong></p>
            
            <p className="mb-6">
              Invest in your chosen products. Track performance—IFSC units are highly regulated, often run by blue-chip managers. Withdraw money back overseas when needed, with minimal red tape.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Bottom Line:</h2>
            
            <p className="mb-6">
              If you're an NRI, OCI, or savvy investor who loves India's growth but hates its paperwork, GIFT City is your passport to global investing, tax savings, and financial convenience, all without "going offshore." The sooner you plug into this ecosystem, the more you benefit from its first-mover advantages and policy tailwinds.
            </p>
            
            <p className="mb-6">
              And hey, if it sounds a tad complicated—or if you just want an agent who'll "do the needful" with as little headache as possible—<a href="https://needfulusa.com/" target="_blank" rel="noopener noreferrer">Needful</a> is always in your corner. We've navigated the maze (and the Reddit rants), so you don't have to.
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

export default GiftCityNRIOpportunities;
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { ArrowLeft, Check, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NRIBankingFAQ = () => {
  // Basic SEO: title, description, canonical, and FAQ schema
  useEffect(() => {
    const title = "NRI Banking FAQ | Needful";
    const description = "NRE vs NRO explained, PIS vs non-PIS, Demat basics, joint accounts, repatriation limits, and transfers for NRIs.";
    document.title = title;

    const ensureTag = (selector: string, create: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    const metaDesc = ensureTag('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    }) as HTMLMetaElement;
    metaDesc.setAttribute("content", description);

    const canonical = ensureTag('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    }) as HTMLLinkElement;
    canonical.setAttribute("href", `${window.location.origin}/faq/nri-banking`);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an NRI Account and do I need one?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NRI accounts are designed for Non-Resident Indians and generally come in two categories: NRE and NRO. You don’t need to open one by default, but if you hold resident accounts after moving abroad, those must be closed or converted to NRO accounts.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between an NRE and an NRO account?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NRE accounts are for foreign earnings and allow free repatriation, tax-free interest, and international debit usage. NRO accounts are for Indian income, have repatriation limits (USD 1 million per financial year subject to documentation and taxes), and interest is taxable.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a PIS and non-PIS account?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "PIS accounts enable investment in Indian listed securities on a repatriable basis with RBI reporting and usually higher fees. Non-PIS accounts allow investing on a non-repatriable basis, funded only from NRO, with broader instrument access and lower fees.",
        },
      },
      {
        "@type": "Question",
        name: "What's a Demat account and do I need one?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A Demat account is an electronic account for holding and trading securities in India. If you want to trade Indian stocks yourself, you generally need a Demat account, typically linked to a PIS account when investing in listed equities.",
        },
      },
      {
        "@type": "Question",
        name: "Can an NRI open a bank account with a resident Indian as joint holder?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. NRE: the resident holder cannot deposit or withdraw. NRO: both can deposit, but the NRI faces repatriation limits.",
        },
      },
      {
        "@type": "Question",
        name: "How to transfer funds from an NRE/NRO account to a foreign country?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NRE: principal and interest are freely repatriable without restriction. NRO: current income can be sent abroad after tax; principal is subject to limits and documentation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum amount I can repatriate from my NRO account?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Up to USD 1 million per financial year, subject to taxes and required documentation.",
        },
      },
    ],
  } as const;

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
              <Link to="/faq">
                <ArrowLeft className="w-4 h-4" />
                Back to FAQ
              </Link>
            </Button>
            <Navigation variant="inline" />
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-purple mb-6">
              NRI Banking FAQ
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Understand NRE vs NRO, PIS vs non-PIS, Demat, joint accounts, and repatriation.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                1. What is an NRI Account and do I need one?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    As the name suggests, NRI accounts are specifically designed for Non-Resident Indians and generally come in two categories: NRE and NRO. There’s no need to open one per se. But if you have existing resident accounts and have moved out of India, they need to be closed or converted to NRO accounts.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                2. What's the difference between an NRE and an NRO account?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose max-w-none">
                  <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                    <Table className="text-base">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-1/2">Features</TableHead>
                          <TableHead className="w-1/4 text-center">NRE</TableHead>
                          <TableHead className="w-1/4 text-center">NRO</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Send foreign money to family in India</TableCell>
                          <TableCell className="text-center text-brand-purple">
                            <span className="inline-flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple h-7 w-7"><Check className="h-4 w-4" /></span>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            <span className="inline-flex items-center justify-center rounded-full bg-muted h-7 w-7"><Minus className="h-4 w-4" /></span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Invest your foreign money in India</TableCell>
                          <TableCell className="text-center text-brand-purple">
                            <span className="inline-flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple h-7 w-7"><Check className="h-4 w-4" /></span>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            <span className="inline-flex items-center justify-center rounded-full bg-muted h-7 w-7"><Minus className="h-4 w-4" /></span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Receive your Indian income</TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            <span className="inline-flex items-center justify-center rounded-full bg-muted h-7 w-7"><Minus className="h-4 w-4" /></span>
                          </TableCell>
                          <TableCell className="text-center text-brand-purple">
                            <span className="inline-flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple h-7 w-7"><Check className="h-4 w-4" /></span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Accept transfers from friends & family in India</TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            <span className="inline-flex items-center justify-center rounded-full bg-muted h-7 w-7"><Minus className="h-4 w-4" /></span>
                          </TableCell>
                          <TableCell className="text-center text-brand-purple">
                            <span className="inline-flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple h-7 w-7"><Check className="h-4 w-4" /></span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Invest your Indian income</TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            <span className="inline-flex items-center justify-center rounded-full bg-muted h-7 w-7"><Minus className="h-4 w-4" /></span>
                          </TableCell>
                          <TableCell className="text-center text-brand-purple">
                            <span className="inline-flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple h-7 w-7"><Check className="h-4 w-4" /></span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Transfer funds from India</TableCell>
                          <TableCell className="text-center">No limit</TableCell>
                          <TableCell className="text-center">USD 1 Mn limit</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tax on interest</TableCell>
                          <TableCell className="text-center">Tax free</TableCell>
                          <TableCell className="text-center">30% tax + surcharge &amp; cess</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Visa Signature Debit card</TableCell>
                          <TableCell className="text-center">International</TableCell>
                          <TableCell className="text-center">Domestic</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableCaption>Both accounts hold balance in Indian Rupees (INR)</TableCaption>
                    </Table>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                3. What is the difference between a PIS and non-PIS account?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    PIS (Portfolio Investment Scheme) accounts allow NRIs to invest in the Indian stock market (Stocks &amp; Bonds) on a repatriable basis, with all transactions reported to the RBI. These accounts can be funded from either NRE (repatriable) or NRO (non-repatriable) accounts and require an approval/permission letter from the RBI via designated banks. PIS accounts are subject to RBI limits on foreign shareholding in companies and are restricted from investing in IPOs or mutual funds. Additionally, they incur higher brokerage and account maintenance fees. A PIS account is more suitable if you want to invest your foreign earnings in India, invest on a repatriable basis, and remit earnings/profits back abroad at your will.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Non-PIS (Portfolio Investment Scheme) accounts allow NRIs to invest in the Indian stock market (Stocks, ETFs, Options, F&amp;O, T-bills, Bonds) on a non-repatriable basis, with transactions not reported to the RBI. These accounts can only be funded from NRO (non-repatriable) accounts and do not require RBI approval. Non-PIS accounts are not subject to RBI limits on foreign shareholding and can invest in IPOs and mutual funds, while also benefiting from lower brokerage and account maintenance fees. A non-PIS account is more suitable if you want to invest income earned in India on a non-repatriable route.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                4. What's a Demat account and do I need one?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A Demat account is an electronic account used for holding and trading securities. It's like a bank account for buying and selling stocks, bonds, and mutual funds in India. A Depository Participant (DP) manages the account, and it's mandatory for investing in the Indian stock market.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you wish to trade Indian stocks yourself, you generally need a Demat account to hold the securities electronically. The Demat account needs to be linked to a PIS account if you are investing in Indian stocks.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                5. Can an NRI open a bank account with a joint holder who is a resident Indian?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-2">Yes, NRIs can open both NRE and NRO accounts with a resident Indian as a joint account holder. However, the tax implications may vary:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">NRE Account:</span> The resident holder cannot deposit or withdraw funds in the account.
                    </li>
                    <li>
                      <span className="font-medium">NRO Account:</span> Both NRI and resident can deposit funds, but the NRI will have repatriation limits.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                6. What is the process to transfer funds from an NRE/NRO account to a foreign country?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <span className="font-medium">NRE Accounts:</span> Funds (both principal and interest) can be freely transferred abroad without any restrictions or taxes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-medium">NRO Accounts:</span> You can transfer current income (like rent, pension) abroad after tax deductions. However, repatriation of the principal is subject to limits and documentation.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                7. What is the maximum amount I can repatriate from my NRO account?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    The maximum amount that can be repatriated from an NRO account is $1 million per financial year, subject to compliance with tax payments and providing the required documentation.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Need help with something else?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    <Link 
                      to="/nri-solutions" 
                      className="text-brand-purple hover:text-brand-purple/80 underline underline-offset-4 transition-colors"
                    >
                      Join our community
                    </Link> to get answers to all your India paperwork, tax-filing and investment-related questions. We do the needful so you don't have to.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">Kindly doing the needful so you don't have to.</p>
            <Link
              to="/faq"
              className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline"
            >
              Back to FAQ & Helpful Articles
            </Link>
          </div>
        </div>
      </footer>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
};

export default NRIBankingFAQ;

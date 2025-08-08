import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const OCIApplicationsFAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80" asChild>
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
              FAQ for OCI Applications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Everything you need to know about the Overseas Citizen of India application process.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                What are the benefits of an OCI Card?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Overseas Citizen of India Card is practically a lifelong visa to India and the closest thing to an Indian dual-citizenship (which India doesn't allow). You can live, work, study, and open bank accounts in India without applying for a visa. No police registration required for long stays. You get parity with Non-Resident Indians, just not voting rights, public office, or farmland ownership.
                  </p>
                  <a 
                    href="https://ociservices.gov.in/welcome" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 transition-colors underline-offset-4 hover:underline"
                  >
                    Learn more at ociservices.gov.in
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Do I have to apply online and via VFS Global?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the US and UK (where Needful operates), you must first apply online and then go through VFS Global. There are no walk-ins or direct consulate submissions. In the US, you apply to VFS by mail. In the UK, you book an in-person appointment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    But before VFS, you must first apply through the Indian government's online OCI portal. That site is notoriously glitchy, even after its June 2025 redesign. Expect frustrating errors, crashes, and confusing fields.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're applying from a country other than the US or UK, check with your local consulate.
                  </p>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">VFS links:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>
                        <a 
                          href="https://visa.vfsglobal.com/usa/en/ind" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-purple hover:text-brand-purple/80 transition-colors underline-offset-4 hover:underline"
                        >
                          US – visa.vfsglobal.com/usa/en/ind
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://services.vfsglobal.com/gbr/en/ind" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-purple hover:text-brand-purple/80 transition-colors underline-offset-4 hover:underline"
                        >
                          UK – services.vfsglobal.com/gbr/en/ind
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                How long does the application process take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Often, it's a two-step process: first, you must surrender your Indian passport, which takes 3-5 weeks. If you never had an Indian passport, you can directly apply for your OCI, which can take 6-8 weeks.
                  </p>
                  <div className="mb-4">
                    <p className="text-foreground font-medium mb-2">Estimated timelines:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Passport surrender: 3–5 weeks</li>
                      <li>OCI (after surrender): 6–8 weeks</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    If you haven't started the surrender step, assume at least 10–12 weeks total. Add time for mailing, errors, or if your paperwork isn't perfect.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                I see you can renounce your Indian citizenship or surrender your passport. What's the difference, and do I have to do both?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This used to be two separate processes: "renunciation" (a legal declaration) and "passport surrender" (physically giving up the passport).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Now, based on Needful's latest checks with Indian consulates in the US and UK, surrendering your passport automatically counts as renunciation. You no longer need to fill out a separate renunciation form.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    But beware: VFS websites and Reddit threads still show outdated info. We know it's confusing. Just know that as of now, surrendering the passport is enough. That said, these policies are subject to change, and some consulates interpret the rules differently—so it's always safest to check Needful's intake form for the latest.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Which documents do I need to notarize?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Almost every applicant will need to notarize at least one document: the Affidavit in Lieu of Originals. It's a short, signed statement that confirms your document copies are authentic.
                  </p>
                  <div className="mb-4">
                    <p className="text-foreground font-medium mb-2">Depending on your case, you may also need to notarize:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Proof of address</li>
                      <li>Name change affidavits</li>
                      <li>Marriage or birth certificates</li>
                      <li>Any other document not originally issued in India</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To avoid mistakes, fill out our intake form—we'll tell you exactly what to notarize, apostille, bring as an original, or upload.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                What's document apostilling, and which documents need it?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    An apostille is a formal government seal that certifies a document for use abroad. India is part of the Hague Convention, so apostilled US documents are accepted without further legalization.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're using foreign documents, such as a US-issued birth certificate or a non-Indian marriage certificate, those will often need to be apostilled. This is especially common for spouse OCI applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These rules have changed frequently, and many applicants are still being caught off guard. Fill out our questionnaire and we'll give you up-to-date guidance on what you need to apostille and how.
                  </p>
                  <a 
                    href="https://travel.state.gov/content/travel/en/records-and-authentications/authenticate-your-document/apostille-requirements.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 transition-colors underline-offset-4 hover:underline"
                  >
                    Apostille requirements at travel.state.gov
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                How can I get documents apostilled?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You can either do it yourself (cheaper but often a hassle) or hire a service.
                  </p>
                  <div className="mb-4">
                    <p className="text-foreground font-medium mb-2">DIY:</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Often involves a few trips, e.g. in NYC, you must go to the county clerk → then Secretary of State. The cost of apostille itself is usually low, around $50, but if you include travel, time off work, or mailing fees, the true cost can creep up.
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-2">Hire a service:</p>
                    <p className="text-muted-foreground leading-relaxed">
                      There are plenty of apostille services online, including UPS. Just use Google. Most charge around $150–$250 per document.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Can I add new docs to my online OCI application once submitted?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, the new OCI website lets you remove and add docs even after submitting. So if you realize you forgot to upload a document, just login and navigate to the document upload section.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Can I request to change details in my OCI submission to VFS once submitted?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In theory, yes—but in practice, it's very difficult. If your application hasn't been forwarded to the consulate yet, you might be able to request a change by contacting VFS. Just don't expect a fast response.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    What's more common is that VFS or the consulate will contact you to request missing documents or corrections.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                How can I generate shipping labels?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>NOTICE:</strong> As of Aug 1, 2025, VFS no longer generates FedEx shipping labels and applicants must obtain their own labels. We recommend UPS or USPS.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For any such changes to VFS' process, we recommend checking their socials for the latest updates, or discussions in r/nri on Reddit.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Still need help?
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
            <p className="text-muted-foreground">
              Kindly doing the needful so you don't have to.
            </p>
            <Link 
              to="/faq" 
              className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline"
            >
              Back to FAQ & Helpful Articles
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OCIApplicationsFAQ;
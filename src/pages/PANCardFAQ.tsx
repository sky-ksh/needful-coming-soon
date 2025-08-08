import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const PANCardFAQ = () => {
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
              FAQ for PAN Card Applications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Everything you need to know about getting a PAN card as an NRI or OCI.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                What is a PAN card, and why do NRIs/OCIs need one?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A Permanent Account Number (PAN) is your Indian tax identity. It's required for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                    <li>Opening NRE/NRO accounts</li>
                    <li>Buying or selling property</li>
                    <li>Investing in stocks, mutual funds, or startups in India</li>
                    <li>Receiving income like rent or dividends</li>
                    <li>Filing taxes (even if your Indian income is zero)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    You need one even if you don't live in India or don't pay Indian taxes regularly.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                I'm an OCI. Which form do I fill — 49A or 49AA?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>If you're an Indian citizen (even if you live abroad) → Form 49A</li>
                    <li>If you're an OCI / foreign citizen → Form 49AA</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Can I use a foreign address?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You can use your foreign address as proof, but your physical PAN card will only be mailed to an Indian address (a friend/family member is fine).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You will still receive an e-PAN instantly via email once approved.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Can I use Aadhaar and file as an Indian citizen if I'm an OCI?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Short answer:</strong> No. If you're an OCI, you must use Form 49AA — even if you have an Aadhaar.
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-foreground font-medium mb-2">But I have Aadhaar. Why can't I file Form 49A and link it?</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Even if you've previously lived in India and have an Aadhaar, you are still legally classified as a foreign citizen once you receive an OCI card. Filing Form 49A (for Indian citizens) would be considered misrepresentation.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-foreground font-medium mb-2">What happens if I file Form 49A as an OCI?</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                      <li><strong>Rejection or delay:</strong> The PAN application may be rejected or delayed due to mismatch between your declared citizenship and documents.</li>
                      <li><strong>Inaccurate tax records:</strong> Filing the wrong form can lead to incorrect classification in the Income Tax system, which could cause issues during future compliance or KYC processes.</li>
                      <li><strong>Aadhaar complications:</strong> The Aadhaar you're trying to use is likely linked to an Indian mobile number — and the OTP for PAN e-signing will only go to that number. If you no longer have access to it, you won't be able to complete the e-KYC.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-foreground font-medium mb-2">So even if I have Aadhaar, I still have to submit documents physically?</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Yes — in most OCI/foreign citizen cases, physical submission is still required.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You can fill the application online, upload your documents, and pay the fee — but you'll then need to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                      <li>Print the completed form</li>
                      <li>Affix your photograph</li>
                      <li>Sign the form</li>
                      <li>Courier it with copies of your documents to the Protean processing center in Pune</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      There's currently no consistent workaround, unless you (a) have Indian citizenship or (b) a valid Aadhaar linked to an Indian number and file using Form 49A, which again is not legally correct for OCI holders.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                What documents do I need for PAN as an NRI/OCI?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                    <li>Passport copy (proof of identity)</li>
                    <li>OCI Card (if applicable)</li>
                    <li>Proof of foreign address (bank statement, utility bill, etc.)</li>
                    <li>Passport-size photo</li>
                    <li>Indian address for physical card delivery (friend/family)</li>
                    <li>Active email + mobile number</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Needful helps generate these in the right format.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                What are AO codes and how do I find mine?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AO Code = "Assessing Officer Code"
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It determines which Income Tax circle your PAN will be assigned to.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You'll need:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                    <li>International AO Code for NRIs/OCIs</li>
                    <li>Based on your country of residence and applying status</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Needful will auto-fill the correct AO code during your intake so you don't need to guess.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                How do I update my PAN details or reprint a lost PAN?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You can:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                    <li>Update name/address/email/photo using the PAN correction form</li>
                    <li>Reprint your PAN using the UTIITSL or Protean portal</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Even if you've lost the physical card, you can retrieve the e-PAN for free using your:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>PAN number</li>
                    <li>Date of birth</li>
                    <li>Mobile/email used during registration</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                What's the difference between e-PAN and physical PAN?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-6">
                    <p className="text-foreground font-medium mb-2">e-PAN:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>PDF version sent to email</li>
                      <li>Accepted for most digital KYC</li>
                      <li>Comes faster (within 24–72 hrs)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-2">Physical PAN:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Printed card couriered to Indian address</li>
                      <li>Required for in-person use, some banking processes</li>
                      <li>Takes 10–15 days after approval</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                How many times can I apply for a PAN card?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Only one PAN card is allowed per individual under law.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Multiple PANs can lead to fines and legal complications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're unsure whether you already have one:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Use the PAN Verification Tool</li>
                    <li>Or request Needful to check it for you during intake</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-lg">
              <AccordionTrigger className="text-xl font-bold text-foreground hover:text-brand-purple transition-colors px-6 py-4 hover:no-underline text-left">
                Which is the official site to apply for a PAN?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    There are three authorized options:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <a 
                        href="https://tinpan.proteantech.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-purple hover:text-brand-purple/80 underline decoration-brand-purple/30 hover:decoration-brand-purple/60 transition-colors inline-flex items-center gap-1"
                      >
                        NSDL/Protean
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.pan.utiitsl.com/PAN/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-purple hover:text-brand-purple/80 underline decoration-brand-purple/30 hover:decoration-brand-purple/60 transition-colors inline-flex items-center gap-1"
                      >
                        UTIITSL
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-purple hover:text-brand-purple/80 underline decoration-brand-purple/30 hover:decoration-brand-purple/60 transition-colors inline-flex items-center gap-1"
                      >
                        e-PAN (Income Tax Portal)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* Community Section */}
          <div className="mt-16 mb-8">
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-purple">
                  Need a Hand with the Rest?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  This is just one item on your India paperwork to-do list. If you'd like help with OCI, PAN, banking, or getting anything done in India, join the Needful Community. It's free - you'll get resources, reminders, and help when you need it.
                </p>
                <Button variant="brand" asChild>
                  <Link to="/nri-solutions">
                    Join the Needful Community →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
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

export default PANCardFAQ;
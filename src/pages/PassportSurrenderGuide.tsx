import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileText, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const PassportSurrenderGuide = () => {
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
            <div className="text-2xl font-bold text-brand-purple">
              Passport Surrender Guide
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-purple mb-6">
              Passport Surrender Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Complete step-by-step guide for surrendering your Indian passport after obtaining foreign citizenship.
            </p>
          </div>

          {/* Important Note */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg bg-blue-50 dark:bg-blue-950/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Important Note</h3>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      Many official sources use "renunciation" and "surrender" application interchangeably. 
                      As of May, 2025, the "Surrender" application is all you need to successfully obtain an OCI Card. 
                      The steps for the Surrender application are below.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-brand-purple">
                  <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</span>
                  Create SEVA Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Create an account on the Indian Government Website (SEVA):
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://portal3.passportindia.gov.in/Online/index.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    SEVA Portal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-brand-purple">
                  <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</span>
                  Apply for Surrender
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  In the Applicant Home Page, click on <strong>"Apply for Surrender of Indian Passport"</strong> to file a new application. 
                  Once submitted, the website will return a document with an "ARN" number that is going to be tied with your VFS account (created in Step 4).
                </p>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Important:</strong> This document must eventually be printed and contain your signature and 2x2 passport picture.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-brand-purple">
                  <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</span>
                  Fill Renunciation Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Fill out the renunciation certificate PDF form. The form is outdated with unclear boxes and date/month formats.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.vfsglobal.com/one-pager/india/united-states-of-america/renunciation-of-indian-citizenship/pdf/renunciation-certificate-fillable-form.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      PDF Form
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.reddit.com/r/nri/comments/1i5itnd/surrender_certificate_us_pdf_form_clarifications/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Form Clarifications (Reddit)
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-brand-purple">
                  <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">4</span>
                  Create VFS Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Create a VFS account using the following link:
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://row4.vfsglobal.com/IHCUSPostalAppointment/Account/RegisterUser?q=rdeYQ16uXAbRZKGt9T+jfqn6hVw02tBdVfi6qFaYEv//yBU7zECt23Nib2bckQU++Sz1U717RL8TBDEUh9Q/mTvphd1/L7Pyki0FQMw3WpXdd/QKmYCmSHJCoCj/d0RgY+p4/zX+EXMRMVMfcwTzKgLtHoiD6yL2sPelCA8MELA=" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    VFS Registration
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-brand-purple">
                  <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">5</span>
                  Customer Profile & Shipping
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Once the account is created, you must create a new Customer Profile for Passport Surrender. 
                  At this point, you will have to generate shipping labels (you can use UPS or USPS), enter the label number and pay VFS fees.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Note:</strong> Previously, VFS offered a shipping label service via FedEx, but as of August 1, 2025, that is no longer the case.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 6 */}
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-brand-purple">
                  <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">6</span>
                  Compile Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground">
                  Compile the remaining documents required from this checklist:
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.vfsglobal.com/one-pager/india/united-states-of-america/renunciation-of-indian-citizenship/pdf/surrender-of-indian-passport-with-passport-adult.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Document Checklist
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Critical Instructions
                  </h4>
                  <p className="text-red-800 dark:text-red-200 text-sm mb-3">
                    <strong>Be sure to follow every instruction in this checklist. This includes:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-red-800 dark:text-red-200 text-sm">
                    <li>Printing the checklist itself.</li>
                    <li>Writing "Surrender Application with Passport" on the envelope cover</li>
                    <li>NOT stapling the documents.</li>
                    <li>Signing the checklist's final page and filling out the applicant's name, email, passport and mobile numbers on the top of every page.</li>
                    <li>Signing the various documents in the previous steps, such as the official government application form from Step 2.</li>
                  </ol>
                  <p className="text-red-800 dark:text-red-200 text-sm mt-3 font-semibold">
                    Triple-check that every document that must be signed is signed, and that every placeholder for a 2x2 passport picture has the photo glued in.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 7 */}
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-brand-purple">
                  <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">7</span>
                  Mail Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Once all the required docs are printed and signed, place all the docs in an envelope (including your original Indian passport + any spare 2x2 passport photos) 
                  with the shipping label and mail it to the VFS center in your jurisdiction.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://services.vfsglobal.com/usa/en/ind/apply-for-surrender" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    VFS Center Addresses
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
            <Link to="/" className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PassportSurrenderGuide;
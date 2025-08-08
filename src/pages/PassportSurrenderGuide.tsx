import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, FileText, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const PassportSurrenderGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/faq" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to FAQ
              </Link>
            </Button>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Passport Surrender Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Note: Many official sources use "renunciation" and "surrender" application interchangeably. As of May, 2025, the "Surrender" application is all you need to successfully obtain an OCI Card. The steps for the Surrender application are below.
            </p>
          </div>
            {/* Step 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">1</span>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">2</span>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">3</span>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">4</span>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">5</span>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">6</span>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">7</span>
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

          {/* Community Section */}
          <div className="mt-16 mb-8 bg-muted/30 rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-primary">
              Need a Hand with the Rest?
            </h2>
            <p className="text-foreground text-lg">
              This is just one item on your India paperwork to-do list. If you'd like help with OCI, PAN, banking, or getting anything done in India, join the Needful Community. It's free - you'll get resources, reminders, and help when you need it.
            </p>
            <Button variant="brand" asChild>
              <Link to="/nri-solutions">
                Join the Needful Community →
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              Kindly doing the needful so you don't have to.
            </p>
            <Link to="/faq" className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline">
              Back to FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PassportSurrenderGuide;
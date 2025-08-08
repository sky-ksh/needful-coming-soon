import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const OCIGuide = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/guides" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Guides
              </Link>
            </Button>
          </div>
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Complete Guide to OCI Registration
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Indian Government allows individuals of Indian origin and their spouses to register as Overseas Citizens of India (OCI). The OCI is basically India's version of a Green Card, allowing holders to live and work in the country forever.
            </p>
          </div>

          {/* Prerequisite Alert */}
          <Alert>
            <AlertDescription>
              <strong>Note:</strong> This guide assumes you have already surrendered your Indian passport, which is a prerequisite for OCI applicants who formerly had Indian passports. If you haven't yet surrendered your Indian passport, please refer to our{" "}
              <Link to="/faq/passport-surrender" className="text-primary hover:underline">
                Passport Surrender guide
              </Link>.
            </AlertDescription>
          </Alert>

          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                Complete the Government of India OCI form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Go to the{" "}
                <a 
                  href="https://ociservices.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  OCI Services portal <ExternalLink className="h-3 w-3" />
                </a>{" "}
                and select "New OCI Registration". Follow instructions.
              </p>
              
              <div className="space-y-3">
                <p><strong>Fill online form + Upload digital documents:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Digital photograph and signature/thumb print (thumb print for minors below 5)</li>
                  <li>Photo requirements: recent color image with white background (min 200×200 pixels, max 1500×1500; file size ≤ 500 kb)</li>
                  <li>Signature image: aspect ratio of 1:3 and size ≤ 500 kb</li>
                  <li>Files must be JPEG/JPG format</li>
                </ul>
                
                <p><strong>Upload supporting documents:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>All documents in PDF format (each ≤ 1000 kb)</li>
                  <li>Upload all documents listed in the relevant checklist</li>
                  <li>If no category exists for certain documents, consolidate all supporting docs in the current passport copy category as one single PDF</li>
                </ul>
                
                <p><strong>After completing the form:</strong></p>
                <p className="text-sm">Note the File Reference Number and print the form. This number will be needed to re-upload documents if necessary and for tracking your application.</p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                Prepare supporting VFS documents according to the checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Refer back to VFS and select the document checklist that matches your situation and assemble self-attested copies (parents/legal guardians should sign copies for minors). Attach only copies of apostilled documents unless the checklist explicitly asks for originals.
              </p>

              <div className="space-y-4">
                {/* Adult Applicants Checklist */}
                <Collapsible open={openSections['adult']} onOpenChange={() => toggleSection('adult')}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold">2.1 Adult applicants who previously held an Indian passport</h4>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSections['adult'] ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 p-4 border rounded-lg">
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Photographs and signature</li>
                        <li>Current passport</li>
                        <li>Last held Indian passport</li>
                        <li>Certificate of renunciation</li>
                        <li>Naturalization certificate</li>
                        <li>Proof of legal status in the US (if applicable)</li>
                        <li>Marital status proof</li>
                        <li>Name-change document (if applicable)</li>
                        <li>Proof of address</li>
                        <li>Employment/work/university letter</li>
                        <li>Other forms: Affidavit in lieu of originals, undertaking, consent letter, and undertaking to surrender Indian voter ID/ration card</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Never Held Indian Passport */}
                <Collapsible open={openSections['never']} onOpenChange={() => toggleSection('never')}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold">2.2 Applicants who never held an Indian passport</h4>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSections['never'] ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 p-4 border rounded-lg">
                      <p className="mb-3 text-sm">All the relevant items from the above checklist plus:</p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Birth certificate</li>
                        <li>Proof of Indian origin of parents/grandparents/great-grandparents</li>
                        <li>Parents' marriage certificate</li>
                        <li>Parents' current passports and naturalization certificates</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Minors Checklist */}
                <Collapsible open={openSections['minors']} onOpenChange={() => toggleSection('minors')}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold">2.3 Minors who previously held an Indian passport</h4>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSections['minors'] ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 p-4 border rounded-lg">
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>OCI application form with minor's signature (or thumb impression if the minor is under 5) and parents' signatures</li>
                        <li>Parental Authorization form – notarized and signed by both parents</li>
                        <li>Minor's current passport</li>
                        <li>Minor's last held Indian passport and renunciation certificate</li>
                        <li>Parents' passports and naturalization certificates</li>
                        <li>Parents' marriage certificate or divorce/death certificate. <strong>Note: the marriage certificate must be apostilled if it was issued outside of India.</strong></li>
                        <li>Legal status in the US for parents holding non-U.S. passports</li>
                        <li>Proof of address for parents/guardian and, if the minor is not a US citizen, proof of native address. <strong>Note: the proof of address must include a notarized affidavit swearing the minor lives with their parents.</strong></li>
                        <li>Other forms: Affidavit in lieu of originals, undertaking, consent letter, and undertaking to surrender Indian voter ID/ration card</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Born Outside India */}
                <Collapsible open={openSections['outside']} onOpenChange={() => toggleSection('outside')}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold">2.4 Minors born outside of India</h4>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSections['outside'] ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 p-4 border rounded-lg">
                      <p className="mb-3 text-sm">All items listed for minors above plus:</p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Minor's birth certificate - must be apostilled if issued outside of India.</li>
                        <li>Proof of Indian origin of parents/grandparents/great-grandparents: this is generally the parents' OCI or Indian passport.</li>
                        <li>Parents' marriage certificate or divorce/death certificate - must be notarized.</li>
                        <li>Parents' current passports and naturalization certificates</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Foreign Spouse */}
                <Collapsible open={openSections['spouse']} onOpenChange={() => toggleSection('spouse')}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold">2.5 Foreign spouse of an Indian citizen/OCI cardholder</h4>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSections['spouse'] ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 p-4 border rounded-lg">
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>OCI application form – completed and signed</li>
                        <li>Photographs and signature</li>
                        <li>Current passport</li>
                        <li>Applicant's birth certificate</li>
                        <li>Birth certificates of parents/grandparents/great-grandparents (proving Indian lineage)</li>
                        <li>Registered marriage certificate</li>
                        <li>Copy of Indian spouse's passport and OCI card</li>
                        <li>Joint affidavit of subsisting marriage</li>
                        <li>Proof of legal status in the US</li>
                        <li>Name change document – court order or notarized affidavit if applicable</li>
                        <li>Employment/work letter or written statement if unemployed/retired</li>
                        <li>Copy of previous Indian visas (if any)</li>
                        <li>Proof of address and proof of native address</li>
                        <li>Affidavit in lieu of originals, undertaking by applicant, consent letter, undertaking for surrender of Indian voter card/ration card</li>
                        <li>Fee receipt</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div className="p-4 bg-muted rounded-lg space-y-2">
                <p className="text-sm text-muted-foreground"><strong>Notarization Note:</strong> For notarizations, we recommend simply going to a UPS near you. Remote online notarizations are not accepted as the notary must be in the same jurisdiction as your application.</p>
                <p className="text-sm text-muted-foreground"><strong>Apostille Note:</strong> Many people find this to be a headache. We recommend following the government instructions of your state, but if you don't mind paying up you can pay for apostille services near you. Just use Google, but be mindful that these services can often cost upwards of $200 per document.</p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                Register on the VFS Global website and pay fees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Go to the{" "}
                <a 
                  href="https://services.vfsglobal.com/usa/en/ind/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  VFS Global Indian visa & consular portal <ExternalLink className="h-3 w-3" />
                </a>{" "}
                and create an account.
              </p>
              
              <p>Use the "Apply for OCI services" option, select "New OCI Registration" and enter the Government Reference Number from the application you completed earlier.</p>
              
              <div>
                <h4 className="font-semibold mb-3">Fee Structure:</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Note:</strong> These fees are valid as of August 2025. Always check the{" "}
                  <a 
                    href="https://services.vfsglobal.com/usa/en/ind/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    VFS website
                  </a>{" "}
                  for the latest pricing.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Fee Type</th>
                        <th className="border border-border p-3 text-left">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">OCI card fee</td>
                        <td className="border border-border p-3">$275</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">ICWF</td>
                        <td className="border border-border p-3">$3</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">VFS service fee</td>
                        <td className="border border-border p-3">$15.90</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <Alert>
                <AlertDescription>
                  <strong>Note:</strong> VFS previously used to provide a FedEx shipping label, but as of Aug 1, 2025 you must generate your own shipping label. Once you do that (we recommend UPS or USPS), you can enter the label and proceed to payment in the VFS portal.
                </AlertDescription>
              </Alert>
              
              <p>Be sure to print the Application Confirmation Letter / Payment Confirmation and include it in your package.</p>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  4
                </span>
                Submit the application
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p><strong>By Mail/Post</strong> – Mail the signed application, photographs, payment confirmation and supporting documents to the VFS Indian Consular Application Centre for your jurisdiction.</p>
              
              <div>
                <h4 className="font-semibold mb-3">ICAC (VFS Indian Consular Application Centre) addresses in the U.S.</h4>
                <div className="grid gap-3 text-sm">
                  <div><strong>ICAC Atlanta Centre:</strong> Suite 175, 1200 Altmore Avenue, Sandy Springs, GA 30342.</div>
                  <div><strong>ICAC Chicago Centre:</strong> Suite 2075, 180 North Stetson Avenue, 20th Floor, Chicago, IL 60601.</div>
                  <div><strong>ICAC Houston Centre:</strong> Suite 550, 1001 Texas Avenue, Houston, TX 77002.</div>
                  <div><strong>ICAC New York Centre:</strong> 128 E 32nd Street, 2nd Floor, New York, NY 10016.</div>
                  <div><strong>ICAC San Francisco Centre:</strong> 642 Harrison Street, Suite 200, San Francisco, CA 94107.</div>
                  <div><strong>ICAC Washington DC Centre:</strong> 1025 Vermont Avenue NW, Suite 300, Washington, DC 20005.</div>
                  <div><strong>ICAC Seattle Centre:</strong> 3131 Elliott Avenue, Suite 240, Seattle, WA 98121.</div>
                  <div><strong>ICAC Bellevue Satellite Centre:</strong> 1400 112th Avenue SE, Suite 100, Office No. 32, Bellevue, WA 98004 (only for appointments).</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Additional guidelines and common mistakes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Make sure the online application on the government OCI website (not VFS) has all your supporting documents uploaded. Even if you don't see a field for a document, consolidate all your supporting documents in a single PDF and submit it under passport photo copy.</li>
                <li>No e-signatures or remote online notarizations. But, copies of wet signatures are fine.</li>
                <li>The Indian Consulate does not want originals of apostilled documents. Copies are fine.</li>
                <li>Remember to sign the undertaking swearing you surrendered your Indian voter ID / ration card (or never had one).</li>
                <li>Sign the OCI application form that is generated once you submit the online application. The signature space is hidden in the fourth or fifth page, so make sure you don't miss it!</li>
                <li>Make sure documents are not expired and that your passport is at least six months away from expiration upon submission of the application.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing */}
          <Card>
            <CardHeader>
              <CardTitle>Processing and after submission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                After VFS receives your application, it will verify the documents and forward them to the Indian Consulate/Embassy for processing. Processing times vary (generally 6–8 weeks for new OCI cards), and you can track your application using the VFS tracking tool.
              </p>
              <p>
                If any additional documents are requested, upload them promptly. If the application remains incomplete for more than 20 days, VFS returns the application and refunds only the consular and ICWF fee (service and convenience fees are not refunded).
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground mb-4">
            Need help with more immigration processes?
          </p>
          <Button variant="outline" asChild>
            <Link to="/guides">Browse all guides</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default OCIGuide;
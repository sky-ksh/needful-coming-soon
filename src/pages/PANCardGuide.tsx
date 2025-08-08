import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";

const PANCardGuide = () => {
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
              Complete Guide to PAN Card Application
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get your Permanent Account Number (PAN) card for all Indian financial transactions, tax filings, and account openings. This guide covers the complete process for Indian citizens and OCIs.
            </p>
          </div>

          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                Start Your Application on Protean
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Go to{" "}
                <a 
                  href="https://onlineservices.proteantech.in/paam/endUserRegisterContact.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Protean PAN Application portal <ExternalLink className="h-3 w-3" />
                </a>
              </p>
              
              <div className="space-y-3">
                <p><strong>Click one of the options:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Form 49A</strong> → If you're an <strong>Indian citizen</strong>, even if you live abroad</li>
                  <li><strong>Form 49AA</strong> → If you're an <strong>OCI</strong> or <strong>foreign citizen</strong> (even if you have an Aadhaar card)</li>
                </ul>
                
                <p>Fill in your basic details and submit to generate a <strong>Token Number</strong>. This lets you save and resume your application if needed.</p>
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
                Choose Submission Mode
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Select how you want to submit your documents:</p>
              
              <ul className="list-disc list-inside space-y-2">
                <li><strong>e-KYC & e-Sign</strong> → Fully online, but requires Aadhaar with mobile OTP</li>
                <li><strong>Scan & e-Sign</strong> → Upload photo, signature, and document scans, then e-sign with OTP</li>
                <li><strong>Physical Submission</strong> → Upload everything, then print the form and courier signed copies + documents to India</li>
              </ul>
              
              <Alert>
                <AlertDescription>
                  If you want to link your Aadhaar ID, the OTP typically goes to the Indian phone number linked to your original Aadhaar card.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                Fill Personal Details & Choose PAN Delivery Type
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Enter your personal details and choose whether you want a physical PAN or just an e-PAN.</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>e-PAN only</strong> → Free PDF sent by email. Fast and sufficient for most needs like opening bank accounts or investing.</li>
                <li><strong>Physical PAN card</strong> → Laminated card sent by post. Choose this if you want a hard copy for in-person verification.</li>
              </ul>
              <div>
                <h4 className="font-semibold mb-3">Fee breakdown:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>₹110 if delivered to an Indian address</li>
                  <li>₹1,020 if delivered internationally</li>
                </ul>
              </div>
            </CardContent>
          </Card>


          {/* Step 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  4
                </span>
                Add Contact Details and Select AO Code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Fill in:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Residential Address</strong> (Indian or foreign)</li>
                <li><strong>Communication Address</strong> → This is where your PAN will be delivered (can be different from residential)</li>
                <li><strong>Phone Number</strong> (foreign numbers accepted)</li>
                <li><strong>Email</strong> (must be correct. Your e-PAN will be sent here)</li>
              </ul>
              <p>All PANs are linked to an <strong>AO Code</strong>; this is your tax circle.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>If you live in <strong>India</strong>, select your state and city, then pick the matching AO code</li>
                <li>If you're an <strong>NRI using an Indian address</strong>, do the same for your Indian city</li>
                <li>If you're applying with a <strong>foreign address</strong> (as an NRI or OCI), choose a code under <strong>"International Taxation"</strong> (usually in Delhi or Mumbai)</li>
              </ul>
              <p>Look for keywords like <strong>"International"</strong>, <strong>"NRI"</strong>, or your country name in the AO description.</p>
              <Alert>
                <AlertDescription>
                  <strong>Common Pitfall:</strong> Choosing an AO code that doesn't match your address type (e.g., using a random Indian code while applying with a US address) can delay your application. If unsure, use the built-in search tool in the form.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  5
                </span>
                Upload Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You'll now upload your:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Photo</strong> (JPEG, white background, 3.5cm x 2.5 cm, max 50 KB)</li>
                <li><strong>Signature</strong> (On a blank paper, JPEG, max 50 KB)</li>
                <li><strong>Supporting Documents</strong> (PDF, each under 300 KB)</li>
              </ul>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Document Requirements</h4>
                <p>You must provide proof of:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li><strong>Identity</strong></li>
                  <li><strong>Address</strong></li>
                  <li><strong>Date of Birth</strong></li>
                </ol>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Indian citizens:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Identity: Aadhaar, passport, or voter ID</li>
                      <li>Address: Aadhaar, utility bill, bank statement</li>
                      <li>DOB: Aadhaar, passport, or birth certificate</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold">OCIs / Foreign citizens:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Identity: Passport (mandatory)</li>
                      <li>Address: Passport (if foreign address shown), or foreign utility bill / bank statement</li>
                      <li>DOB: Passport</li>
                    </ul>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    No notarization or self-attestation is required, but as an NRI/OCI, you might be required to physically courier the documents for verification. Many NRI customers have complained that the current website (as of Aug 2025) doesn't let them select the digital upload documents option, hindering their ability to complete the process online.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Step 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  6
                </span>
                Pay the Fee
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>₹110 → If the card is being sent to an Indian address</li>
                <li>₹1,020 → If sending internationally</li>
              </ul>
              
              <p>You can pay online using your credit/debit card or UPI.</p>
            </CardContent>
          </Card>

          {/* Step 9 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  7
                </span>
                Sign & Submit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">If you selected e-KYC or e-Sign for form 49A:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Enter Aadhaar or VID</li>
                    <li>Receive OTP on your registered Indian mobile</li>
                    <li>Submit to digitally sign and complete the application</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">If you selected Physical Submission as part of form 49AA:</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Print the application PDF</li>
                    <li>Affix 2 passport photos (sign across one)</li>
                    <li>Sign the form where marked</li>
                    <li>Include photocopies of your uploaded documents</li>
                    <li>Mail to:</li>
                  </ol>
                  
                  <div className="bg-muted p-4 rounded-lg mt-3">
                    <p className="font-semibold">Protean eGov Technologies Limited</p>
                    <p>PAN Processing Center</p>
                    <p>4th Floor, Sapphire Chambers</p>
                    <p>Baner Road, Baner</p>
                    <p>Pune – 411045, India</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-3">
                    Use a trackable courier service if mailing from abroad.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 10 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  8
                </span>
                Tracking Status & Getting Your PAN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Use your 15-digit Acknowledgment Number to track status</li>
                <li>e-PAN will be emailed once issued (typically within 1–2 weeks)</li>
                <li>Physical card (if opted) will arrive by post — 1–3 weeks within India, longer abroad</li>
              </ul>
              
              <Alert>
                <AlertDescription>
                  Once issued, your PAN number is permanent and can be used for all Indian financial transactions, tax filings, and account openings.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Community Section */}
        <div className="mt-16 mb-8">
          <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-purple">
                Still Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Sign up for our services and receive customized support for your India-side pains.
              </p>
              <Button variant="brand" asChild>
                <Link to="/nri-solutions">
                  Join the Needful Community →
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              Kindly doing the needful so you don't have to.
            </p>
            <Link to="/guides" className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline">
              Back to Guides
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PANCardGuide;
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ExternalLink, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NRITaxesGuide = () => {
  // SEO optimization
  useEffect(() => {
    const title = "NRI Tax Filing Guide | Needful";
    const description = "Complete guide to NRI tax filing in India including residency status, income taxation, deductions, TDS, repatriation, and ITR filing process.";
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
    canonical.setAttribute("href", `${window.location.origin}/faq/nri-taxes`);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/faq" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to FAQ
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
              Needful's NRI Tax Filing Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete guide to understanding NRI tax obligations, residency status, income taxation, and filing requirements in India.
            </p>
          </div>

          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                Why NRIs Should File Taxes in India
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Filing your Indian tax return (ITR) is not just about paying taxes. It helps:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Prove your NRI status</li>
                <li>Claim refunds on extra tax deducted (TDS)</li>
                <li>Carry forward capital losses to reduce future tax</li>
                <li>Get loans more easily in India</li>
                <li>Comply with rules during large financial transactions (e.g. buying/selling property)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                Who Qualifies as an NRI?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You're considered an NRI if:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>You spent less than 182 days in India during the financial year, or</li>
                <li>You were in India for less than 365 days in the last 4 years AND less than 60 days in the current year</li>
              </ul>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Special rule:</strong> If you earn over ₹15 lakhs in India and stay 120+ days, you may be treated as "Resident but Not Ordinarily Resident (RNOR)".
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                What Income is Taxed in India?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Indian income (salary, rent, capital gains, interest) is always taxable in India.</li>
                <li>Foreign income is not taxed for NRIs (unless it's from a business controlled from India).</li>
              </ul>

              <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2">Type of Income</TableHead>
                      <TableHead className="text-center">NRI</TableHead>
                      <TableHead className="text-center">RNOR</TableHead>
                      <TableHead className="text-center">Resident</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Income received or deemed to be received in India</TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Income accrue/arise or deemed to accrue/arise in India</TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Income (other than above) earned outside India from Business controlled from India or profession set up in India</TableCell>
                      <TableCell className="text-center text-red-600">
                        <XCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Income accrue or arise outside India</TableCell>
                      <TableCell className="text-center text-red-600">
                        <XCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-red-600">
                        <XCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center text-green-600">
                        <CheckCircle className="h-5 w-5 mx-auto" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  4
                </span>
                Common Income Types & Their Tax Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Shares/Mutual Funds:</strong> Taxed as capital gains (varies based on holding period)</li>
                <li><strong>Rental income:</strong> Taxed with 30% standard deduction</li>
                <li><strong>NRE account interest:</strong> Tax-free</li>
                <li><strong>NRO account interest:</strong> Taxed at 30%</li>
                <li><strong>Business income from India:</strong> Taxable</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  5
                </span>
                Avoid Double Tax with DTAA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                India has tax treaties with 100+ countries (USA, UK, UAE, etc.) to help NRIs avoid paying tax twice. To claim:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Get a Tax Residency Certificate{" "}
                  <a 
                    href="https://www.irs.gov/individuals/international-taxpayers/certification-of-us-residency-for-tax-treaty-purposes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    (TRC) <ExternalLink className="h-3 w-3" />
                  </a>{" "}
                  from your country of residence
                </li>
                <li>
                  Submit Form 10F online through your{" "}
                  <a 
                    href="https://eportal.incometax.gov.in/iec/foservices/#/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    e-filing portal <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  6
                </span>
                Old vs New Tax Regime
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Old Regime:</strong> Higher tax rates, but lets you claim deductions like Section 80C (investments), Section 24 (home loan), etc.</li>
                <li><strong>New Regime:</strong> Lower tax rates, but no deductions allowed</li>
              </ul>
              <p>Choose based on which saves more tax for you.</p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  7
                </span>
                What is TDS?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                TDS (Tax Deducted at Source) is automatically deducted on income like:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Rent</li>
                <li>Interest</li>
                <li>Capital gains</li>
                <li>Salary</li>
              </ul>
              <p>
                If too much is deducted, file ITR to get a refund. To reduce TDS, apply for a Lower Deduction Certificate.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  8
                </span>
                Deductions NRIs Can Claim
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>(Only under the Old Regime)</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Section 80C:</strong> Up to ₹1.5 lakh for investments</li>
                <li><strong>Section 80D:</strong> Health insurance premiums</li>
                <li><strong>Section 24:</strong> ₹2 lakh deduction on home loan interest</li>
                <li><strong>Section 54EC:</strong> Up to ₹50 lakhs on reinvestment from capital gains</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  9
                </span>
                Is ITR Filing Mandatory?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Yes, if your Indian income (before deductions) is:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Above ₹2.5L (Old Regime) or ₹3L (New Regime)</li>
              </ul>
              <p>Also mandatory if you:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Have capital gains</li>
                <li>Made large financial transactions</li>
              </ul>
              <p>Even if not required, file to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Get refunds</li>
                <li>Carry forward losses</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 10 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  10
                </span>
                How to File ITR
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Choose:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a 
                    href="https://www.incometax.gov.in/iec/foportal/help/how-to-file-itr2-form" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    ITR-2 <ExternalLink className="h-3 w-3" />
                  </a>
                  : No business income
                </li>
                <li>
                  <a 
                    href="https://www.incometax.gov.in/iec/foportal/sites/default/files/2023-04/ITR3_Notified%20Form%20AY%202023-24.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    ITR-3 <ExternalLink className="h-3 w-3" />
                  </a>
                  : With business income
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Documents you'll need:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>PAN card & passport</li>
                  <li>Indian bank account</li>
                  <li>Capital gain/rent/interest statements</li>
                  <li>Investment proofs</li>
                  <li>Form 16A (TDS)</li>
                  <li>TRC + Form 10F for DTAA</li>
                  <li>Foreign income proof (if any)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  11
                </span>
                Repatriation (Moving Money Abroad)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You can legally transfer money from your NRO account to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>NRE account</li>
                <li>Foreign account</li>
              </ul>
              <p>
                Up to $1 million per year, for certain incomes like rent, sale of property, or inheritance.
              </p>

              <div className="mt-4">
                <p className="mb-2">You'll need:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a 
                      href="https://www.incometax.gov.in/iec/foportal/help/statutory-forms/popular-forms/form-15ca-um" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Form 15CA <ExternalLink className="h-3 w-3" />
                    </a>
                    {" "}(self-declaration online)
                  </li>
                  <li>
                    <a 
                      href="https://www.incometax.gov.in/iec/foportal/help/statutory-forms/popular-form/form15cb-um" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Form 15CB <ExternalLink className="h-3 w-3" />
                    </a>
                    {" "}(signed by a CA if transfer exceeds ₹5 lakhs)
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground text-sm">
                Some transfers (like education, gifts, personal savings) do not require these forms.
              </p>
            </CardContent>
          </Card>

          {/* Section 12 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  12
                </span>
                Tips to Avoid Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Check your residency status carefully</li>
                <li>Declare all Indian income</li>
                <li>
                  Download your{" "}
                  <a 
                    href="https://www.incometax.gov.in/iec/foportal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    AIS <ExternalLink className="h-3 w-3" />
                  </a>
                  {" "}(Annual Info Statement)
                </li>
                <li>Use the right ITR form</li>
                <li>File even with no taxable income (for refunds/loss carry forward)</li>
                <li>File on time to avoid penalties</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

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
    </div>
  );
};

export default NRITaxesGuide;
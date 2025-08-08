import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Enterprise from "./pages/Enterprise";
import NRISolutions from "./pages/NRISolutions";
import FAQ from "./pages/FAQ";
import Guides from "./pages/Guides";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import OCIApplicationsFAQ from "./pages/OCIApplicationsFAQ";
import NotFound from "./pages/NotFound";
import PANCardFAQ from "./pages/PANCardFAQ";
import PANCardGuide from "./pages/PANCardGuide";
import PassportSurrenderGuide from "./pages/PassportSurrenderGuide";
import OCIGuide from "./pages/OCIGuide";
import VFSMonopolyHistory from "./pages/blog/VFSMonopolyHistory";
import GoaPropertyInvestmentRisks from "./pages/blog/GoaPropertyInvestmentRisks";
import AhmedabadGiftCityInvestment from "./pages/blog/AhmedabadGiftCityInvestment";
import OCIApplicationTiming from "./pages/blog/OCIApplicationTiming";
import GiftCityNRIOpportunities from "./pages/blog/GiftCityNRIOpportunities";
import Tier2CitiesInvestmentOpportunities from "./pages/blog/Tier2CitiesInvestmentOpportunities";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/nri-solutions" element={<NRISolutions />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/vfs-monopoly-history" element={<VFSMonopolyHistory />} />
            <Route path="/blog/goa-property-investment-risks" element={<GoaPropertyInvestmentRisks />} />
            <Route path="/blog/ahmedabad-gift-city-investment" element={<AhmedabadGiftCityInvestment />} />
            <Route path="/blog/oci-application-timing" element={<OCIApplicationTiming />} />
            <Route path="/blog/gift-city-nri-opportunities" element={<GiftCityNRIOpportunities />} />
            <Route path="/blog/tier-2-cities-investment-opportunities" element={<Tier2CitiesInvestmentOpportunities />} />
            <Route path="/faq/passport-surrender" element={<PassportSurrenderGuide />} />
            <Route path="/faq/oci-applications" element={<OCIApplicationsFAQ />} />
            <Route path="/faq/pan-card" element={<PANCardFAQ />} />
            <Route path="/faq/pan-card-guide" element={<PANCardGuide />} />
            <Route path="/guides/oci-guide" element={<OCIGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

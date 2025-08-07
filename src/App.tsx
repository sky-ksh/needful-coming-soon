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
import PassportSurrenderGuide from "./pages/PassportSurrenderGuide";

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
            <Route path="/resources" element={<FAQ />} />
            <Route path="/diy-guides" element={<Guides />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq/passport-surrender" element={<PassportSurrenderGuide />} />
            <Route path="/faq/oci-applications" element={<OCIApplicationsFAQ />} />
            <Route path="/faq/pan-card" element={<PANCardFAQ />} />
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

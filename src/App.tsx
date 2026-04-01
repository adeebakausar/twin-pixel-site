import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import TreeService from "./pages/TreeService.tsx";
import LandClearing from "./pages/LandClearing.tsx";
import Drainage from "./pages/Drainage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Gallery from "./pages/Gallery.tsx";
import ServiceAreas from "./pages/ServiceAreas.tsx";
import ServiceAreaDetail from "./pages/ServiceAreaDetail.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import ReviewUs from "./pages/ReviewUs.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tree-service" element={<TreeService />} />
            <Route path="/tree-service/:slug" element={<ServiceDetail />} />
            <Route path="/land-clearing" element={<LandClearing />} />
            <Route path="/land-clearing/:slug" element={<ServiceDetail />} />
            <Route path="/drainage" element={<Drainage />} />
            <Route path="/drainage/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:area" element={<ServiceAreaDetail />} />
            <Route path="/review-us" element={<ReviewUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

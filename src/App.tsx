import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import GameRules from "./pages/GameRules";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Maraffone from "./pages/Maraffone";
import Beccaccino from "./pages/Beccaccino";
import Maraffa from "./pages/Maraffa";
import Trionfo from "./pages/Trionfo";
import Tournaments from "./pages/Tournaments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/regole" element={<GameRules />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/supporto" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termini-utilizzo" element={<TermsOfService />} />
          <Route path="/maraffone" element={<Maraffone />} />
          <Route path="/beccaccino" element={<Beccaccino />} />
          <Route path="/maraffa" element={<Maraffa />} />
          <Route path="/trionfo" element={<Trionfo />} />
          <Route path="/tornei" element={<Tournaments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

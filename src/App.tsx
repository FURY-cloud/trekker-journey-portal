
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Treks from "./pages/Treks";
import TrekDetail from "./pages/TrekDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import trek category pages
import UpcomingTreks from "./pages/treks/UpcomingTreks";
import PopularTreks from "./pages/treks/PopularTreks";
import DayTreks from "./pages/treks/DayTreks";
import MultiDayTreks from "./pages/treks/MultiDayTreks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/trek/:id" element={<TrekDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Trek category routes */}
          <Route path="/treks/upcoming" element={<UpcomingTreks />} />
          <Route path="/treks/popular" element={<PopularTreks />} />
          <Route path="/treks/day" element={<DayTreks />} />
          <Route path="/treks/multi-day" element={<MultiDayTreks />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

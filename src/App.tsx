
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

// Import tour pages
import CulturalTours from "./pages/tours/CulturalTours";
import WildlifeTours from "./pages/tours/WildlifeTours";
import PhotographyTours from "./pages/tours/PhotographyTours";

// Import team pages
import Team from "./pages/team/Team";
import TeamMember from "./pages/team/TeamMember";
import BlogPost from "./pages/team/BlogPost";

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
          
          {/* Tour routes */}
          <Route path="/tours/cultural" element={<CulturalTours />} />
          <Route path="/tours/wildlife" element={<WildlifeTours />} />
          <Route path="/tours/photography" element={<PhotographyTours />} />
          
          {/* Team routes */}
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamMember />} />
          <Route path="/team/:memberId/blog/:postId" element={<BlogPost />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

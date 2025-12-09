import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tutors from "./pages/Tutors";
import Subjects from "./pages/Subjects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* 2. HelmetProvider ile sarmala (QueryClientProvider'ın içi uygundur) */}
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter basename="/online_tutors">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
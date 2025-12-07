import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Consultoria from "./pages/services/Consultoria";
import Desenvolvimento from "./pages/services/Desenvolvimento";
import BancoDados from "./pages/services/BancoDados";
import Servidores from "./pages/services/Servidores";
import Segments from "./pages/Segments";
import Agronegocio from "./pages/segments/Agronegocio";
import Industria from "./pages/segments/Industria";
import Contact from "./pages/Contact";
import Differentials from "./pages/Differentials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/consultoria" element={<Consultoria />} />
          <Route path="/servicos/desenvolvimento" element={<Desenvolvimento />} />
          <Route path="/servicos/banco-dados" element={<BancoDados />} />
          <Route path="/servicos/servidores" element={<Servidores />} />
          <Route path="/segmentos" element={<Segments />} />
          <Route path="/segmentos/agronegocio" element={<Agronegocio />} />
          <Route path="/segmentos/industria" element={<Industria />} />
          <Route path="/diferenciais" element={<Differentials />} />
          <Route path="/contato" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import PropertyPage from "./pages/PropertyPage.tsx";
import FilterDrawerDemo from "./pages/FilterDrawerDemo.tsx";
import DestinationPage from "./pages/DestinationPage.tsx";
import DestinationPageMinimal from "./pages/DestinationPageMinimal.tsx";
import CollectionPage from "./pages/CollectionPage.tsx";
import CollectionPageMinimal from "./pages/CollectionPageMinimal.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties/treleigh" element={<PropertyPage />} />
          <Route path="/filter-drawer-demo" element={<FilterDrawerDemo />} />
          <Route path="/destinations/st-ives" element={<DestinationPage />} />
          <Route path="/destinations/st-ives-minimal" element={<DestinationPageMinimal />} />
          <Route path="/collections/dog-friendly" element={<CollectionPage />} />
          <Route path="/collections/dog-friendly-minimal" element={<CollectionPageMinimal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

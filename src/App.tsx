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
import DestinationsHub from "./pages/DestinationsHub.tsx";
import RegionPage from "./pages/RegionPage.tsx";
import RegionPageMinimal from "./pages/RegionPageMinimal.tsx";
import CollectionsHub from "./pages/CollectionsHub.tsx";
import CollectionPage from "./pages/CollectionPage.tsx";
import CollectionPageMinimal from "./pages/CollectionPageMinimal.tsx";
import HolidayCottages from "./pages/HolidayCottages.tsx";
import CottagesCatalogue from "./pages/CottagesCatalogue.tsx";
import SearchResults from "./pages/SearchResults.tsx";
import JournalHub from "./pages/JournalHub.tsx";
import JournalPost from "./pages/JournalPost.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
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
          <Route path="/destinations" element={<DestinationsHub />} />
          <Route path="/destinations/st-ives" element={<DestinationPage />} />
          <Route path="/destinations/st-ives-minimal" element={<DestinationPageMinimal />} />
          <Route path="/destinations/west-cornwall-minimal" element={<RegionPageMinimal />} />
          <Route path="/destinations/:slug" element={<RegionPage />} />
          <Route path="/collections" element={<CollectionsHub />} />
          <Route path="/collections/dog-friendly" element={<CollectionPage />} />
          <Route path="/collections/dog-friendly-minimal" element={<CollectionPageMinimal />} />
          <Route path="/holiday-cottages" element={<HolidayCottages />} />
          <Route path="/cottages" element={<CottagesCatalogue />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/journal" element={<JournalHub />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

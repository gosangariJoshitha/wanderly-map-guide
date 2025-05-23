
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { RequireAuth } from "@/components/auth/RequireAuth";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cities from "./pages/Cities";
import CityPage from "./pages/CityPage";
import AttractionPage from "./pages/AttractionPage";
import TravelGuide from "./pages/TravelGuide";
import Transportation from "./pages/Transportation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="/transportation" element={<Transportation />} />
            
            {/* Protected Routes */}
            <Route path="/cities" element={
              <RequireAuth>
                <Cities />
              </RequireAuth>
            } />
            <Route path="/city/:cityId" element={
              <RequireAuth>
                <CityPage />
              </RequireAuth>
            } />
            <Route path="/attraction/:attractionId" element={
              <RequireAuth>
                <AttractionPage />
              </RequireAuth>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

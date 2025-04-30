
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Challenges from "./pages/Challenges";
import Activities from "./pages/Activities";
import Recognitions from "./pages/Recognitions";
import Companies from "./pages/Companies";
import ProfileDetail from "./pages/ProfileDetail";
import ChallengeDetail from "./pages/ChallengeDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CompanyRegister from "./pages/CompanyRegister";
import Feed from "./pages/Feed";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./contexts/auth";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/explore" element={<Explore />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenges/:id" element={<ChallengeDetail />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/recognitions" element={<Recognitions />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/profile/:id" element={<ProfileDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/company-register" element={<CompanyRegister />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

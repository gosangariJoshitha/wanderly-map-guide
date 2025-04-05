
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/auth/LoginForm";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  
  // Check if we were redirected here from another page
  useEffect(() => {
    if (location.state && location.state.from) {
      setRedirectPath(location.state.from);
    }
  }, [location]);
  
  // If already authenticated, redirect
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectPath || '/', { replace: true });
    }
  }, [isAuthenticated, navigate, redirectPath]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
          
          {location.state?.from && (
            <Alert className="mb-6">
              <AlertDescription>
                Please log in to access that page.
              </AlertDescription>
            </Alert>
          )}

          <LoginForm />
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>By continuing, you agree to CityWander's <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;

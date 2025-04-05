
import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

interface RequireAuthProps {
  children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to access this page",
        variant: "destructive",
      });
      
      // Redirect to login, but save the location they were trying to access
      navigate("/login", { 
        state: { from: location.pathname },
        replace: true 
      });
    }
  }, [isAuthenticated, navigate, location.pathname, toast]);
  
  // If they are authenticated, render the protected component
  return isAuthenticated ? <>{children}</> : null;
}

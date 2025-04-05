import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const authEmail = localStorage.getItem('authEmail');
    const authToken = localStorage.getItem('authToken');
    
    if (authEmail && authToken) {
      setIsAuthenticated(true);
    }
  }, []);
  
  const login = async (email: string, password: string, remember: boolean = false) => {
    // This is a mock login function
    // In a real app, you would call an API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsAuthenticated(true);
        
        // Store auth state
        localStorage.setItem('authToken', 'mock-jwt-token');
        if (remember) {
          localStorage.setItem('authEmail', email);
        }
        
        resolve();
      }, 1000);
    });
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    // We can keep the email if the user chose "remember me"
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

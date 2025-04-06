
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define a user type
type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  currentUser: User | null; // Add the currentUser property
  login: (email: string, password: string, remember?: boolean) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const authEmail = localStorage.getItem('authEmail');
    const authToken = localStorage.getItem('authToken');
    
    if (authEmail && authToken) {
      setIsAuthenticated(true);
      // Set a mock user based on the stored email
      setCurrentUser({
        username: authEmail.split('@')[0],
        email: authEmail
      });
    }
  }, []);
  
  const login = async (email: string, password: string, remember: boolean = false) => {
    // This is a mock login function
    // In a real app, you would call an API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsAuthenticated(true);
        
        // Create a mock user object
        const user = {
          username: email.split('@')[0],
          email: email
        };
        
        setCurrentUser(user);
        
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
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    // We can keep the email if the user chose "remember me"
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
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

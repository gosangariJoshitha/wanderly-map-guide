
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
          <LoginForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;

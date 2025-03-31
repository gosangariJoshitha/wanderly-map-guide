
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Join CityWander</h1>
          <RegisterForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;

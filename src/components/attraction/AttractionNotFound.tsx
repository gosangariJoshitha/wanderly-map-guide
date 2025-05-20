
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function AttractionNotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Attraction Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the attraction you're looking for. Please check the URL and try again.
        </p>
        <a href="/" className="text-travel-blue-600 hover:underline">
          Back to Homepage
        </a>
      </main>
      <Footer />
    </div>
  );
}

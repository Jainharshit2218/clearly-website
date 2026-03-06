import "@/App.css";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import AboutSection from "@/components/sections/AboutSection";
import EmailSignup from "@/components/sections/EmailSignup";
import Footer from "@/components/sections/Footer";

function App() {
  useEffect(() => {

    document.title = "CLEARLY. | Clean Energy Water";  // ADD THIS BLOCK
     // Remove Emergent badge if injected
  const badge = document.getElementById("emergent-badge");
  if (badge) {
    badge.remove();}
  }, []);

  return (
    <SmoothScroll>
      <div className="App bg-white min-h-screen">
        <Navigation />
        
        <main>
          <div id="hero">
            <HeroSection />
          </div>
          
          <div id="products">
            <ProductSection />
          </div>
          
          <div id="how-it-works">
            <HowItWorksSection />
          </div>
          
          <div id="difference">
            <DifferenceSection />
          </div>
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="signup">
            <EmailSignup />
          </div>
        </main>
        
        <Footer />
        
        <Toaster 
          position="bottom-center" 
          toastOptions={{
            style: {
              background: '#000',
              color: '#fff',
              border: 'none',
            },
          }}
        />
      </div>
    </SmoothScroll>
  );
}

export default App;

import React from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import InquiryForm from "@/components/InquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TawkChat from "@/components/TawkChat";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <InquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <TawkChat />
      <Toaster />
    </div>
  );
}

export default App;

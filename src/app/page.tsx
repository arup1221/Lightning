import AboutUs from "@/components/AboutUs";
import Cards from "@/components/Cards";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import PricingTabs from "@/components/PricingTabs";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";



export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <Hero />
        <Cards />
        <PricingTabs />
        <AboutUs />
        <Faq />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

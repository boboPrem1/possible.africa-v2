import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Clients from "./components/clients";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Testimonials from "./components/testimonial";

export default function ConsultingHome() {
  return (
    <main>
      <Header page="https://expand-in-africa.com/"></Header>
      <Hero></Hero>
      <Services></Services>
      <Clients></Clients>
      <Testimonials />
      <CTA></CTA>
      <Footer />
    </main>
  );
}

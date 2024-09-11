import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import WhatWeDo from "@/components/hero/what";
import WhoWeAre from "@/components/hero/who";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import ServiceDetail from "@/components/services/serviceDetail";

const Home = () => {
  return (
    <>
      <Navbar />
      <WhoWeAre />
      <WhatWeDo />
      <Services />
      <ServiceDetail />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

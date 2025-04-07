import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Classul - Placas de Homenagem e Troféus desde 1971</title>
        <meta name="description" content="A Classul está no mercado desde 1971. Especializada em placas de homenagem, troféus, placas de inauguração, medalhas, pins e bottons." />
      </Helmet>
      
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <CTASection />
    </>
  );
};

export default HomePage;

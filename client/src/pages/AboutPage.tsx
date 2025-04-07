import { Helmet } from "react-helmet";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import { COMPANY_INFO } from "@/lib/constants";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a Classul - Desde 1971</title>
        <meta name="description" content={COMPANY_INFO.about} />
      </Helmet>
      
      <div className="py-16 bg-gray-100">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-16">Sobre a Classul</h1>
        </div>
      </div>
      
      <AboutSection />
      <CTASection />
    </>
  );
};

export default AboutPage;

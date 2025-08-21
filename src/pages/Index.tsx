
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ImageGallery from "../components/ImageGallery";
import Services from "../components/Services";
import Plans from "../components/Plans";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Set SEO meta tags
    document.title = "Amazon Acqua Park - Diversão e Lazer em Presidente Figueiredo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Descubra o Amazon Acqua Park em Presidente Figueiredo! Piscinas, toboágua, corredeira natural, restaurante e muito mais. É diversão que se fala, não é?");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Descubra o Amazon Acqua Park em Presidente Figueiredo! Piscinas, toboágua, corredeira natural, restaurante e muito mais. É diversão que se fala, não é?";
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Amazon Acqua Park - Diversão e Lazer em Presidente Figueiredo" },
      { property: "og:description", content: "Descubra o Amazon Acqua Park em Presidente Figueiredo! Piscinas, toboágua, corredeira natural, restaurante e muito mais." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.amazonacquapark.com.br" },
      { property: "og:image", content: "/lovable-uploads/cdb4e65e-d88a-49c1-be9c-0491421ecdf9.png" }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute("property", tag.property);
        meta.setAttribute("content", tag.content);
        document.head.appendChild(meta);
      }
    });

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AmusementPark",
      "name": "Amazon Acqua Park",
      "description": "Parque aquático em Presidente Figueiredo com piscinas, toboágua, corredeira natural e restaurante",
      "url": "https://www.amazonacquapark.com.br",
      "telephone": "+55 92 99279-6517",
      "email": "figueiredoempturisticos@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "RODOVIA BR 174 KM 984, 2701",
        "addressLocality": "Presidente Figueiredo",
        "addressRegion": "AM",
        "postalCode": "69735-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-2.0275",
        "longitude": "-59.9937"
      },
      "sameAs": [
        "https://wa.me/5592992796517"
      ]
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ImageGallery />
        <Services />
        <Plans />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

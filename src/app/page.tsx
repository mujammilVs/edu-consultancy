import Hero from "@/components/Hero";
import StreamsSection from "@/components/StreamsSection";
import CountryCards from "@/components/CountryCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import ScholarshipCalculator from "@/components/ScholarshipCalculator";
import ServiceCards from "@/components/ServiceCards";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StreamsSection />
      <CountryCards />
      <ScholarshipCalculator />
      <WhyChooseUs />
      <ServiceCards />
      <BlogSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}

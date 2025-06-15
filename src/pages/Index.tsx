
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import GoLive from "@/components/GoLive";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Pricing />
        <Testimonials />
        <GoLive />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

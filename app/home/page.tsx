import Hero from "@/app/components/home/Hero";
import Stats from "@/app/components/home/Stats";
import About from "@/app/components/home/About";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import Testimonials from "@/app/components/home/Testimonials";
import FAQ from "@/app/components/home/FAQ";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </div>
  );
}

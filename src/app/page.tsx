import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUsSection";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <div className="">
      {/* import landing page components here, follow semantics */}
      <WhyUs />
      <GetStarted />
      <Footer />
    </div>
  );
}

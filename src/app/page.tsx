import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUsSection";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="">
      {/* import landing page components here, follow semantics */}
      <LandingNavbar />
      <Header />
      <WhyUs />
      <GetStarted />
      <Footer />
    </div>
  );
}

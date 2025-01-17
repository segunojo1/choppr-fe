import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUsSection";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Shorten from "@/components/Shorten";
import Company from "@/components/Company";

export default function Home() {
  return (
    <div className="font-outfit">
      {/* import landing page components here, follow semantics */}
      <LandingNavbar />
      <Header />
      <Shorten />
      <Company />
      <WhyUs />
      <GetStarted />
      <Footer />
    </div>
  );
}

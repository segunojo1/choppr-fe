import LandingNavbar from "@/components/landing-page/LandingNavbar";
import Footer from "@/components/landing-page/Footer";
import WhyUs from "@/components/landing-page/WhyUsSection";
import GetStarted from "@/components/landing-page/GetStarted";
import Header from "@/components/landing-page/Header";

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

import FooterSection from "./components/layout/footer";
import Header from "./components/layout/header";
import About from "./components/pages/home/about";
import ContactSection from "./components/pages/home/contact";
import Explore from "./components/pages/home/explore";
import Facility from "./components/pages/home/facility";
import FAQ from "./components/pages/home/faq";
import Gallery from "./components/pages/home/gallery";
import GuestSection from "./components/pages/home/guest";
import Hero from "./components/pages/home/hero";
import Location from "./components/pages/home/location";
import MountainSection from "./components/pages/home/mountain";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="explore">
        <Explore />
      </div>
      <div id="facility">
        <Facility />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="guest">
        <GuestSection />
      </div>
      <div id="mountain">
        <MountainSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}
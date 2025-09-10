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
      <Hero />
      <About/>
      <Explore/>
      <Facility/>
      <Location/>
      <Gallery/>
      <FAQ/>
      <GuestSection/>
      <MountainSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

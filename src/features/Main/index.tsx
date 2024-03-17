import Navbar from '../../components/layout/Navbar';
import AccordionFAQ from './components/AccordionFAQ';
import CardPartners from './components/CardPartner';
import Footer from './components/Footer';
import LearnMore from './components/LearnMoreButton';
import OurClass from './components/OurClass';
import OurClassText from './components/OurClassText';
import About from './sections/About';
import Hero from './sections/Hero';
import Testimonial from './sections/Testimonial';

const Main = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <CardPartners />
      <About />
      <OurClassText />
      <OurClass />
      <LearnMore />
      <Testimonial />
      <AccordionFAQ />
      <Footer />
    </div>
  );
};
export default Main;

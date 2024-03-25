import Navbar from '../../components/layout/Navbar';
import AccordionFAQ from './components/AccordionFAQ';
import CardPartners from './components/CardPartner';
import Footer from './components/Footer';
import OurClass from './components/OurClass';
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
      <OurClass />
      <Testimonial />
      <AccordionFAQ />
      <Footer />
    </div>
  );
};
export default Main;

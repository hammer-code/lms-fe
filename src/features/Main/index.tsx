import Navbar from '../../components/layout/Navbar';
import AccordionFAQ from './components/AccordionFAQ';
import CardPartners from './components/CardPartner';
import Footer from './components/Footer';
import LearnMore from './components/LearnMoreButton';
import OurClass from './components/OurClass';
import OurClassText from './components/OurClassText';
import Hero from './sections/Hero';
import Testimonial from './sections/Testimonial';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardPartners />
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

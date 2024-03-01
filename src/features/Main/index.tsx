import Navbar from '../../components/layout/Navbar';
import AccordionFAQ from './components/AccordionFAQ';
import CardPartners from './components/CardPartner';
import OurClass from './components/OurClass';
import Hero from './sections/Hero';
import Testimonial from './sections/Testimonial';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardPartners />
      <OurClass />
      <Testimonial />
      <AccordionFAQ />
    </div>
  );
};
export default Main;

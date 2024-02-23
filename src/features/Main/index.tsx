import Navbar from '../../components/layout/Navbar';
import AccordionFAQ from './components/AccordionFAQ';
import CardPartners from './components/CardPartner';
import OurClass from './components/OurClass';
import Hero from './sections/Hero';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardPartners />
      <OurClass />
      <AccordionFAQ />
    </div>
  );
};
export default Main;

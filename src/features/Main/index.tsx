import Navbar from '../../components/layout/Navbar';
import AccordionFAQ from './components/AccordionFAQ';
import CardPartners from './components/CardPartner';
import LearnMore from './components/LearnMoreButton';
import OurClass from './components/OurClass';
import OurClassText from './components/OurClassText';
import Hero from './sections/Hero';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardPartners />
      <OurClassText />
      <OurClass />
      <LearnMore />
      <AccordionFAQ />
    </div>
  );
};
export default Main;

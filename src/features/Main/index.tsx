import Navbar from '../../components/layout/Navbar';
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
    </div>
  );
};
export default Main;

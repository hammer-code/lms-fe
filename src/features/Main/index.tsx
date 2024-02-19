import dynamic from 'next/dynamic';
import CardPartners from './components/CardPartner';
import OurClass from './components/OurClass';

const Navbar = dynamic(() => import('../../components/layout/Navbar'), {
  ssr: false
});

const Main = () => {
  return (
    <div>
      <Navbar />
      <CardPartners />
      <OurClass />
    </div>
  );
};
export default Main;

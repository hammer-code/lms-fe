import dynamic from 'next/dynamic';
import CardPartners from './components/CardPartner';
import Hero from './sections/Hero';

const Navbar = dynamic(() => import('../../components/layout/Navbar'), {
  ssr: false
});

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CardPartners />
    </div>
  );
};
export default Main;

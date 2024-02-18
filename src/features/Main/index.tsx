import dynamic from 'next/dynamic';
import CardPartners from './components/CardPartner';

const Navbar = dynamic(() => import('../../components/layout/Navbar'), {
  ssr: false
});

const Main = () => {
  return (
    <div>
      <Navbar />
      <CardPartners />
    </div>
  );
};
export default Main;

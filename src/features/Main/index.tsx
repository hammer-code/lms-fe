import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../../components/layout/Navbar'), {
  ssr: false
});

const Main = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default Main;

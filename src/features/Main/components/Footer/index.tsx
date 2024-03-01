import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="bg-[#0F3665] flex flex-wrap justify-between text-white md:px-20 px-8 py-8 text-xs md:text-[15px] md:flex-row flex-col gap-6 md:gap-4 ">
      <div className="flex gap-2 items-center justify-center">
        <span>Copyright &copy; 2024</span>
        <span className="text-primary-blue ">HammerCode</span>
      </div>
      <div className="flex md:gap-40 md:flex-row flex-col gap-4 text-center md:text-left">
        <div>
          <h1 className="font-semibold md:mb-4 text-primary-blue ">
            Resources
          </h1>
          <div className="flex flex-col gap-2">
            <p>Home</p>
            <p>About</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold md:mb-4 text-primary-blue">Lets Join</h1>
          <div className="flex flex-col gap-2 ">
            <p>Discord</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Github</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold md:mb-4 text-primary-blue">Contact</h1>
          <div className="flex flex-col gap-2">
            <p>Whatsapp</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

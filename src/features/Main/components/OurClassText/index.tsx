import { FC } from 'react';

const OurClassText: FC = () => {
  return (
    <div className="flex justify-center items-center my-10 mx-4 md:mx-2 ">
      <div className="text-wrap w-[750px]">
        <h1 className="font-semibold text-primary-blue text-center text-2xl md:text-[30px]">
          Our Class
        </h1>
        <p className="text-center mt-2 text-[#828282] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry of standard dummy text
          ever since the 1500s,
        </p>
      </div>
    </div>
  );
};

export default OurClassText;

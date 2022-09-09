import React from "react";

const ServiceCard = ({ color, title, icon, subTitle }) => {
  return (
    <div className="flex flex-row items-center justify-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl ">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
      <div className='ml-5 flex flex-1 flex-col'>
        <h1 className="mt-2 text-white text-lg">{title}</h1>
        <p className="mt-2 text-white text-sm md:w-9/12">{subTitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

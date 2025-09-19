import React from "react";

interface Props {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ChooseContainer: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="text-center font-secondary w-[300px] py-2">
      <div className="transition-transform duration-300 hover:scale-105">
       <div className="flex items-center justify-center"> {icon}</div>
        <h3 className="text-[22px] font-semibold my-3 text-primaryB">{title}</h3>
        <p className="text-[16px] font-medium text-primaryB">{description}</p>
      </div>
    </div>
  );
};

export default ChooseContainer;

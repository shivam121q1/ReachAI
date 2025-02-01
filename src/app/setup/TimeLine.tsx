import React from "react";
interface TimeLineProps{
  currentStep:number,
}

const steps = [
  "Brand Basic",
  "Website Type",
  "Brand Story",
  "Visual Identity",
  "Contact Info",
];

const TimeLine = ({ currentStep}:TimeLineProps) => {
  return (
    <div className="bg-[center_-60px]" style={{
      backgroundImage:
      'url("https://res.cloudinary.com/drcoe5pnl/image/upload/v1738260071/nextjs_uploads/xrqnsdzigysqjpfyx3ye.jpg")'}}>

    <div className="flex justify-center h-16 items-center w-full max-w-[1024px] mx-auto" >
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Step Number */}
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-sm font-semibold 
              ${currentStep >= index + 1 ? "bg-primary" : "bg-gray-300"}`}
          >
            {index + 1}
          </div>

          {/* Step Label */}
          <span
            className={`ml-2 text-sm font-normal  
              ${currentStep >= index + 1 ? "text-black" : "text-gray-400"}`}
              >
            {step}
          </span>

          {/* Step Connector Line */}
          {index !== steps.length - 1 && (
            <div
            className={`w-12 h-[2px] mx-2 
              ${currentStep > index + 1 ? "bg-primary" : "bg-gray-300"}`}
              />
            )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default TimeLine;

import React from "react";

export default function Info() {
  return (
    <div className="mt-[7.2rem] md:flex md:items-center md:gap-[7.2rem] xl:px-[14rem] xl:gap-[14rem]">
      <img src="/images/image-man-eating.webp" className="w-full md:w-[42rem] md:h-[40rem] md:ml-[-8rem] xl:ml-0" alt="" />
      <div className="px-[2.4rem] mt-[4.8rem] md:p-0 md:pr-[4.2rem] xl:p-0">
        <h2 className="text-[3.2rem] text-gunmetal font-semibold tracking-[-1.6px] leading-[35px] md:mt-0 xl:text-heading-l xl:leading-[52px]">
          What your BMI result means
        </h2>
        <p className="text-body-m text-dark-electric leading-[24px] mt-[3.2rem]">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
}

import React from "react";

export default function Limitations() {
  const limitations = [
    {
      title: "Gender",
      description:
        "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
      icon: "/images/icon-gender.svg",
    },
    {
      title: "Age",
      description:
        "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
      icon: "/images/icon-age.svg",
    },
    {
      title: "Muscle",
      description:
        "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
      icon: "/images/icon-muscle.svg",
    },
    {
      title: "Pregnancy",
      description:
        "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.",
      icon: "/images/icon-pregnancy.svg",
    },
    {
      title: "Race",
      description:
        "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
      icon: "/images/icon-race.svg",
    },
  ];

  return (
    <div className="mt-[12.8rem] flex flex-col items-center px-[2.4rem] xl:px-[14rem]">
      <div className="text-center">
        <h2 className="text-[3.2rem] text-gunmetal font-semibold tracking-[-1.6px] leading-[35px]">
          Limitations of BMI
        </h2>
        <p className="text-body-m text-dark-electric leading-[2.4rem] mt-[3.2rem]">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="pb-[9.6rem] grid grid-cols-1 gap-[1.6rem] mt-[5.6rem] sm:grid-cols-2 xl:grid-cols-3">
        {limitations.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-[2.4rem] rounded-[1.6rem] shadow-custom ${
              index === limitations.length - 1 ? "sm:col-span-2 xl:col-span-1 xl:col-start-2" : ""
            }`}
          >
            <div className="flex gap-[1.6rem] items-center">
              <img src={item.icon} alt="" />
              <h3 className="text-heading-s font-semibold tracking-[-1px] text-gunmetal">
                {item.title}
              </h3>
            </div>
            <p className="text-body-m text-dark-electric leading-[2.4rem] mt-[1.6rem]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

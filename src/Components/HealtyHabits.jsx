import React from "react";

export default function HealtyHabits() {
  const habits = [
    {
      title: "Healthy eating",
      description:
        "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
      icon: "/images/icon-eating.svg",
    },
    {
      title: "Regular exercise",
      description:
        "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
      icon: "/images/icon-exercise.svg",
    },
    {
      title: "Adequate sleep",
      description:
        "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
      icon: "/images/icon-sleep.svg",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-[4rem] mt-[12.6rem] px-[2.4rem] md:px-[4.2rem] xl:flex-row xl:px-[14rem]">
      {habits.map((habit, index) => (
        <div key={index} className="md:flex md:gap-[4rem] xl:flex-col items-start">
          <img src={habit.icon} alt="" />
          <div>
            <h3 className="text-heading-m text-gunmetal font-semibold mt-[3.2rem] tracking-[-1.2px] md:mt-0">
              {habit.title}
            </h3>
            <p className="text-body-m text-dark-electric leading-[2.4rem] mt-[2.4rem]">
              {habit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

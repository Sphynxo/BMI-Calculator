import React from "react";

const Imperial = ({ heightFt, heightIn, weightSt, weightLbs, onHeightFtChange, onHeightInChange, onWeightStChange, onWeightLbsChange }) => {
  return (
    <div>
      <div className="flex flex-col text-left mt-[1.6rem]">
        <p className="text-body-s text-dark-electric">Height</p>
        <div className="flex gap-[1.6rem] mt-[0.8rem]">
          <div className="relative">
            <input
              type="number"
              placeholder="0"
              value={heightFt}
              onChange={onHeightFtChange}
              className="outline-none text-heading-m text-gunmetal py-[2rem] px-[2.4rem] w-full rounded-[12px] border-solid border-[1px] border-borders"
              onWheel={(event) => event.preventDefault()}
            />
            <p className="absolute text-heading-m font-semibold text-blue right-[2.4rem] top-[2rem]">
              ft
            </p>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="0"
              value={heightIn}
              onChange={onHeightInChange}
              className="outline-none text-heading-m text-gunmetal py-[2rem] px-[2.4rem] w-full rounded-[12px] border-solid border-[1px] border-borders"
              onWheel={(event) => event.preventDefault()}
            />
            <p className="absolute text-heading-m font-semibold text-blue right-[2.4rem] top-[2rem]">
              in
            </p>
          </div>
        </div>

        <p className="text-body-s text-dark-electric mt-[1.6rem]">Weight</p>
        <div className="flex gap-[1.6rem] mt-[0.8rem]">
          <div className="relative">
            <input
              type="number"
              placeholder="0"
              value={weightSt}
              onChange={onWeightStChange}
              className="outline-none text-heading-m text-gunmetal py-[2rem] px-[2.4rem] w-full rounded-[12px] border-solid border-[1px] border-borders"
              onWheel={(event) => event.preventDefault()}
            />
            <p className="absolute text-heading-m font-semibold text-blue right-[2.4rem] top-[2rem]">
              st
            </p>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="0"
              value={weightLbs}
              onChange={onWeightLbsChange}
              className="outline-none text-heading-m text-gunmetal py-[2rem] px-[2.4rem] w-full rounded-[12px] border-solid border-[1px] border-borders"
              onWheel={(event) => event.preventDefault()}
            />
            <p className="absolute text-heading-m font-semibold text-blue right-[2.4rem] top-[2rem]">
              lbs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imperial;

import React from "react";

const Metric = ({ height, weight, onHeightChange, onWeightChange }) => {
  return (
    <div>
      <div className="flex flex-col text-left mt-[1.6rem]">
        <p className="text-body-s text-dark-electric">Height</p>
        <div className="relative mt-[0.8rem]">
          <input
            type="number"
            placeholder="0"
            value={height}
            onChange={onHeightChange}
            className="outline-none text-heading-m text-gunmetal py-[2rem] px-[2.4rem] w-full rounded-[12px] border-solid border-[1px] border-borders"
            onWheel={(event) => event.preventDefault()}
          />
          <p className="absolute text-heading-m font-semibold text-blue right-[2.4rem] top-[2rem]">
            cm
          </p>
        </div>

        <p className="text-body-s text-dark-electric mt-[1.6rem]">
          Weight
        </p>
        <div className="relative mt-[0.8rem]">
          <input
            type="number"
            placeholder="0"
            value={weight}
            onChange={onWeightChange}
            className="outline-none text-heading-m text-gunmetal py-[2rem] px-[2.4rem] w-full rounded-[12px] border-solid border-[1px] border-borders"
            onWheel={(event) => event.preventDefault()}
          />
          <p className="absolute text-heading-m font-semibold text-blue right-[2.4rem] top-[2rem]">
            kg
          </p>
        </div>
      </div>
    </div>
  );
};

export default Metric;

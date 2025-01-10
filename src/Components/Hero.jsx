import React, { useState, useEffect } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";

export default function Hero() {
  const [selectedUnit, setSelectedUnit] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightSt, setWeightSt] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [bmi, setBmi] = useState(null);
  const [range, setRange] = useState("");
  const [idealWeightRange, setIdealWeightRange] = useState("");

  const bmiRange = {
    underweight: "Your BMI suggests you’re underweight.",
    healthyweight: "Your BMI suggests you’re a healthy weight.",
    overweight: "Your BMI suggests you’re overweight.",
    obesity: "Your BMI suggests you’re obese.",
    severeobesity: "Your BMI suggests you’re severely obese.",
  };

  useEffect(() => {
    if (selectedUnit === "metric" && height && weight) {
      calculateBmi(height, weight);
    } else if (
      selectedUnit === "imperial" &&
      heightFt &&
      heightIn &&
      weightSt &&
      weightLbs
    ) {
      calculateBmi(heightFt, heightIn, weightSt, weightLbs);
    }
  }, [height, weight, heightFt, heightIn, weightSt, weightLbs]);

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
    setHeight("");
    setWeight("");
    setHeightFt("");
    setHeightIn("");
    setWeightSt("");
    setWeightLbs("");
    setBmi(null);
    setRange("");
    setIdealWeightRange("");
  };

  const calculateBmi = (height, weight) => {
    let bmiValue = 0;
    if (selectedUnit === "metric") {
      bmiValue = (weight / (height / 100) ** 2).toFixed(1);
      setIdealWeightRange(calculateIdealWeightRange(height, selectedUnit));
    } else {
      const heightInInches = parseFloat(heightFt) * 12 + parseFloat(heightIn);
      const weightInLbs = parseFloat(weightSt) * 14 + parseFloat(weightLbs);
      bmiValue = ((703 * weightInLbs) / heightInInches ** 2).toFixed(1);
      setIdealWeightRange(
        calculateIdealWeightRange(heightInInches, selectedUnit)
      );
    }
    setBmi(bmiValue);
    conclusion(bmiValue);
  };

  const calculateIdealWeightRange = (height, unit) => {
    let minWeight, maxWeight;
    if (unit === "metric") {
      minWeight = (18.5 * (height / 100) ** 2).toFixed(1);
      maxWeight = (24.9 * (height / 100) ** 2).toFixed(1);
      return `${minWeight}kgs - ${maxWeight}kgs.`;
    } else {
      minWeight = ((18.5 * height ** 2) / 703).toFixed(1);
      maxWeight = ((24.9 * height ** 2) / 703).toFixed(1);
      return `${minWeight}lbs - ${maxWeight}lbs.`;
    }
  };

  const handleHeightChange = (event) => {
    const heightValue = event.target.value;
    setHeight(heightValue);
  };

  const handleWeightChange = (event) => {
    const weightValue = event.target.value;
    setWeight(weightValue);
  };

  const handleHeightFtChange = (event) => {
    setHeightFt(event.target.value);
  };

  const handleHeightInChange = (event) => {
    setHeightIn(event.target.value);
  };

  const handleWeightStChange = (event) => {
    setWeightSt(event.target.value);
  };

  const handleWeightLbsChange = (event) => {
    setWeightLbs(event.target.value);
  };

  const conclusion = (bmiValue) => {
    if (bmiValue < 18.5) {
      setRange(bmiRange.underweight);
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setRange(bmiRange.healthyweight);
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setRange(bmiRange.overweight);
    } else if (bmiValue >= 30 && bmiValue < 40) {
      setRange(bmiRange.obesity);
    } else if (bmiValue >= 40) {
      setRange(bmiRange.severeobesity);
    }
  };

  return (
    <div className="relative">
      <div className="bg-custom-gradient w-full h-[640px] absolute top-0 left-0 rounded-b-[35px] -z-20 xl:w-[98rem] xl:left-[2.4rem]"></div>
      <div className="flex justify-center xl:justify-start xl:pl-[14rem]">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-[3.6rem] h-[3.6rem] mt-[3.2rem] md:h-[4rem] md:w-[4rem] xl:w-[6.4rem] xl:h-[6.4rem]"
        />
      </div>
      <div className="flex flex-col px-[2.4rem] items-center text-center gap-[2.4rem] pt-[2.4rem] md:px-[4.2rem] md:pt-[4rem] xl:flex-row xl:px-[14rem] xl:gap-[12rem] xl:items-start">
        <div className= "xl:text-left xl:mt-[8rem] pr-[2rem]">
          <h1 className="text-heading-l font-semibold leading-[52.8px] tracking-[-2.4px] xl:text-heading-xl xl:leading-[7.2rem]">
            Body Mass Index Calculator
          </h1>
          <p className="text-body-m text-dark-electric leading-[2.4rem] font-normal mt-[2.4rem]">
            Better understand your weight in relation to your height using our
            body mass index (BMI) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <div className="bg-white p-[2.4rem] rounded-[16px] shadow-custom md:w-full max-w-[60rem]">
          <h3 className="text-gunmetal text-heading-m font-semibold md:text-left">
            Enter your details below
          </h3>
          <div className="flex items-center justify-between mt-[2.4rem] md:justify-start md:gap-[24rem]">
            <div className="flex items-center gap-[1.8rem]">
              <input
                type="radio"
                id="metric"
                name="unit"
                value="metric"
                className="h-[3.2rem] w-[3.2rem]"
                checked={selectedUnit === "metric"}
                onChange={handleUnitChange}
              />
              <label
                htmlFor="metric"
                className="text-body-m font-semibold text-gunmetal"
              >
                Metric
              </label>
            </div>
            <div className="flex items-center gap-[1.8rem]">
              <input
                type="radio"
                id="imperial"
                name="unit"
                value="imperial"
                className="h-[3.2rem] w-[3.2rem]"
                checked={selectedUnit === "imperial"}
                onChange={handleUnitChange}
              />
              <label
                htmlFor="imperial"
                className="text-body-m font-semibold text-gunmetal"
              >
                Imperial
              </label>
            </div>
          </div>
          {selectedUnit === "metric" && (
            <Metric
              height={height}
              weight={weight}
              onHeightChange={handleHeightChange}
              onWeightChange={handleWeightChange}
            />
          )}
          {selectedUnit === "imperial" && (
            <Imperial
              heightFt={heightFt}
              heightIn={heightIn}
              weightSt={weightSt}
              weightLbs={weightLbs}
              onHeightFtChange={handleHeightFtChange}
              onHeightInChange={handleHeightInChange}
              onWeightStChange={handleWeightStChange}
              onWeightLbsChange={handleWeightLbsChange}
            />
          )}
          {bmi !== null ? (
            <div className="bg-blue p-[3.2rem] rounded-[1.6rem] mt-[2.4rem] text-white md:flex md:justify-between md:gap-[2.4rem] md:rounded-l-[16px] md:rounded-r-[100px]">
              <div className="md:w-[26rem]">
                {" "}
                <h3 className="text-body-m font-semibold text-left">
                  Your BMI is...
                </h3>
                <p className="text-heading-l font-bold mt-[0.8rem] text-left">
                  {bmi}
                </p>
              </div>

              <p className="text-body-s mt-[2.4rem] text-left">
                {range} Your ideal weight is between{" "}
                <span className="font-semibold">{idealWeightRange}</span>
              </p>
            </div>
          ) : (
            <div
              className="bg-blue p-[3.2rem] rounded-[1.6rem] mt-[2.4rem] text-white  md:rounded-l-[16px] md:rounded-r-[100px]
            "
            >
              <h3 className="text-heading-m font-semibold text-left">
                Welcome!
              </h3>
              <p className="text-body-s mt-[1.6rem] text-left">
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

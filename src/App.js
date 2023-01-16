import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [romanNumerals, setRomanNumerals] = useState("");

  const onNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const generateRomanNumberals = (num) => {
    let roman = "";
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNum = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let originalNumber = num;
    for (var i = 0; i < decimal.length; i++) {
      while (decimal[i] <= originalNumber) {
        roman += romanNum[i];
        originalNumber -= decimal[i];
      }
    }

    return roman;
  };

  const onGenerate = () => {
    setRomanNumerals(generateRomanNumberals(number));
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-start gap-4 w-96 rounded border-1 border-solid border-gray-300 p-8 shadow">
        <h3 className="w-full font-bold text-center text-2xl">
          Generate a Roman Numeral
        </h3>
        <div className="flex gap-2 items-center w-full">
          <label htmlFor="number">Number:</label>
          <input
            type="number"
            name="number"
            id="number"
            value={number}
            className="border-2 transition duration-500 border-gray-300 w-full py-2 px-2 bg-transparent rounded-md focus:outline-none "
            onChange={onNumberChange}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="number" className="whitespace-nowrap">
            Roman Numeral:
          </label>
          <input
            type="text"
            readOnly
            value={romanNumerals}
            className="py-2 px-2 bg-transparent rounded-md text-2xl text-green-900 focus:outline-none"
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white mt-4 py-2 px-4 rounded"
          onClick={onGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const Button = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);

    // Setelah satu detik, atur selectedOption kembali menjadi null
    setTimeout(() => {
      setSelectedOption(null);
    }, 500);
  };

  return (
    <div className="absolute start-1/3 bottom-20 space-x-32 justify-center">
      <button
        onClick={() => handleButtonClick("False")}
        className={`ring-4 ring-white transition transform ${
          selectedOption === "False" ? "scale-95" : ""
        } shadow-xl shadow-red-800 rounded-2xl ${
          selectedOption === "False" ? "brightness-75" : "hover:brightness-75"
        } ${
          selectedOption === "False" ? "hover:scale-95" : ""
        } bg-gradient-to-r from-red-600 to-red-800 h-36 w-36`}
      >
        <p className="text-xl text-black font-bold">False</p>
      </button>
      <button
        onClick={() => handleButtonClick("True")}
        className={`ring-4 ring-white transition transform ${
          selectedOption === "True" ? "scale-95" : ""
        } shadow-xl shadow-green-800 rounded-2xl ${
          selectedOption === "True" ? "brightness-75" : "hover:brightness-75"
        } ${
          selectedOption === "True" ? "hover:scale-95" : ""
        } bg-gradient-to-r from-green-400 to-green-800 h-36 w-36`}
      >
        <p className="text-xl text-black font-bold">True</p>
      </button>
    </div>
  );
};

export default Button;

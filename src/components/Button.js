import React from "react";

const Button = ({ blue, blueText, padding, children }) => {
  return (
    <button
      className={`px-${padding} border border-lightBlue rounded-full py-1 text-base font-medium ${blue ? 'bg-lightBlue' : ""} ${blueText ? 'text-lightBlue' : 'text-white'}`}
    >
      {children}
    </button>
  );
};

export default Button;

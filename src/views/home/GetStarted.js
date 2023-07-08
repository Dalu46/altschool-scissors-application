import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const GetStarted = () => {
  return (
    <div className="bg-[#1E3448] flex flex-col justify-center items-center py-6">
      <p className="text-white text-lg sm:text-2xl font-bold sm:font-bold py-3 text-center">
        Revolutionizing Link Optimization
      </p>
      <Link to="/signup">
        <Button blue={true} padding={6}>
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default GetStarted;

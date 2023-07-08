import React from "react";
import Button from "../../../components/Button";
import slash from "../../../assets/slash.svg";
import backgroundImage from "../../../assets/backgroundImg.svg";
import link from "../../../assets/link.svg";
import arrow from "../../../assets/arrow.svg";
import { Link } from "react-router-dom";

const HeroBody = () => {
  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8 ">
      <div className="sm:px-24 sm:flex sm:items-center justify-center flex-col">
        <p className="text-3xl font-extrabold sm:font-bold sm:text-2xl lg:text-4xl py-3 text-center">
          Optimize Your Online Experience with Our
        </p>
        <span>
          <p className="text-3xl font-extrabold sm:font-bold sm:text-2xl lg:text-4xl text-center">
            Advanced <span className="text-lightBlue">URL</span>{" "}
            <span className="text-lightBlue inline-flex flex-col">
              Shortening{" "}
              <img
                className="w-24 lg:w-auto"
                src={slash}
                alt="url shortening text"
              />
            </span>{" "}
            Solution
          </p>
        </span>
        <div className="sm:w-3/4 text-center py-4">
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/signup">
            <Button blue={true} padding={6}>
              Sign Up
            </Button>
          </Link>
          <button className="text-lightBlue py-3 ml-6">learn more</button>
        </div>
      </div>

      {/* hero footer */}
      <div className="sm:w-3/4 sm:mx-auto sm:my-16 sm:relative sm:flex">
        <img
          src={backgroundImage}
          alt="background image"
          className="sm:absolute sm:-top-9 left-4 w-[220px] h-[300px] hidden sm:block"
        />

        <div className="border border-lightBlue py-6 px-10 rounded-[24px] sm:w-[60%] sm:mx-auto mt-6 z-10 bg-[#c4def7]">
          <div className="flex items-center justify-center mb-4">
            <img src={link} alt="link-icon" className="w-12" />
            <img src={link} alt="link-icon" className="w-12" />
            <img src={link} alt="link-icon" className="w-12" />
            <img src={arrow} alt="arrow" className="px-3" />
            <img src={link} alt="link-icon" className="w-12" />
          </div>
          <div className="text-center">
            <p>
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBody;

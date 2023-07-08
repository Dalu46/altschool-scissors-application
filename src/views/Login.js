import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrite";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import google from "../assets/google.svg";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    setLoading(true);
    e.preventDefault();

    const promise = account.createEmailSession(user.email, user.password);

    promise.then(
      function (response) {
        console.log(response);
        setLoading(false);
        navigate("/dashboard");
      },
      function (error) {
        console.log(error);
        setError(error); // Failure
      }
    );
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();

    const promise = account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/login",
      ["profile"]
    );

    console.log(promise);
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto text-center max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Login
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 ">
          Sccissor is a roboust{" "}
          <span className="text-lightBlue">URL shortening</span> app with{" "}
          <span className="text-lightBlue">QR code generation</span> and more..
        </p>
      </div>
      {/* {error && <p>Error occured</p>} */}
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label
              for="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
                type="password"
                name="password"
                id="password"
                autocomplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={login}
            type="submit"
            disabled={loading}
            class="block w-full rounded-md bg-lightBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightBlue"
          >
            {loading ? (
              <ArrowPathIcon
                className="h-6 w-6 text-white mx-auto animate-spin"
                aria-hidden="true"
              />
            ) : (
              "Login"
            )}
          </button>
        </div>

        <div className="mt-6">
          <p className="text-center">
            Don't have an account?
            <Link to="/signup">
              <span className="text-lightBlue font-bold"> Sign Up</span>
            </Link>
          </p>
        </div>
        <p className="text-center font-bold">Or</p>
        <div>
          <button className="border-2 py-1 px-6 flex gap-5 mx-auto mt-4 w-full justify-center items-center bg-[#F9FBFD]" onClick={loginWithGoogle}>
            <p className="text-xl font-bold text-lightBlue">Login with Google</p>{" "}
            <img src={google} alt="login with google" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

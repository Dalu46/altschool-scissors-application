import React, { useState } from "react";
import { database } from "../appwrite/appwrite";
import { ID } from "appwrite";
import { ClipboardIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const ScissorPage = ({ setAddedLink, user }) => {
  // to handle user input
  const [inputUrl, setInputUrl] = useState("");
  //data from storing shortened url
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);
  //handle backend (appwrite)
  const addLink = (shortenedLink) => {
    const promise = database.createDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_COLLECTION_ID, //collectionId
      ID.unique(),
      {
        link: shortenedLink,
        user_id: user?.$id,
      }
    );
    promise.then(
      function (response) {
        console.log(response);
        setAddedLink();
      },
      function (error) {
        console.log(error);
      }
    );
  };

  // handle url shorteneing
  async function postUrl(link) {
    setLoading(true);
    try {
      const requestObj = {
        url: link,
      };
      await fetch("https://url-shortener-service.p.rapidapi.com/shorten", {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=utf-8",
          "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
          "x-rapidapi-key":
            "04a1f72586mshc6316760c3ac7c2p168b5cjsn6034ad522b33",
        },
        body: JSON.stringify(requestObj),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setData(data.result_url);
          addLink(data.result_url);
          setInputUrl("");
        });
    } catch (error) {
      console.error(error);
    }
  }

  const copyText = () => {
    navigator.clipboard.writeText(data);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleTrimButton = (e) => {
    e.preventDefault();
    postUrl(inputUrl);
  };

  return (
    <div className="w-full md:h-[350px] md:py-6 my-4 flex justify-center items-center rounded-md">
      <div>
        <div className=" flex justify-center w-[300px] px-8 rounded md:w-[600px] ">
          <form action="" className="flex flex-col  gap-4">
            <input
              onChange={(e) => setInputUrl(e.target.value)}
              type="text"
              name="text"
              value={inputUrl}
              placeholder="Paste URL here..."
              id=""
              className="outline-none placeholder:text-lightblue text-gray-600 px-4 py-2 border-[1px] font-semibold  rounded-xl border-lightblue"
            />
            <div className="flex justify-between gap-2">
              <select
                name=""
                id=""
                className="outline-none placeholder:text-lightblue text-lightblue  text-gray-600 md:w-[220px] sm:text-md font-bold border-[1px] rounded-xl p-2 border-lightblue text-[11px]"
              >
                <option value="">Choose Domain</option>
                <option value="">yes</option>
                <option value="">yes</option>
                <option value="">yes</option>
              </select>
              <input
                type="text"
                name=""
                placeholder="Type Alias here"
                id=""
                className="text-gray-600  outline-none md:w-[220px] sm:text-md font-bold placeholder:text-lightblue p-2 border-[1px] rounded-xl border-lightblue text-[11px]"
              />
            </div>
            <div className="flex justify-center items-center relative  bg-lightBlue rounded-xl hover:opacity-75 my-4">
              <button
                onClick={handleTrimButton}
                className="w-full text-white  py-1 "
                disabled={loading}
              >
                {loading ? (
                  <ArrowPathIcon
                    className="h-6 w-6 text-white mx-auto animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  "Trim URL"
                )}
              </button>
            </div>
            {data ? (
              <div className="flex justify-between items-center">
                <hr />
                <p className="text-lightBlue font-bold">
                  <a href={data}>{data || "No pasted link"}</a>
                </p>
                <ClipboardIcon
                  onClick={copyText}
                  className="h-6 w-6 text-gray-600"
                  aria-hidden="true"
                />
              </div>
            ) : (
              <div />
            )}
          </form>
        </div>
      </div>
      {copied ? (
        <div className="absolute top-[33%] md:top-[20%]">
          <p className="text-xl text-green-600 font-bold">Link copied</p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ScissorPage;

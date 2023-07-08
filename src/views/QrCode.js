import React, { useState } from "react";

const QrCode = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [qrCode, setQrCode] = useState();

  const createQR = async (e) => {
      e.preventDefault();

      if(!inputUrl) return;
      const qrApi = `http://api.qrserver.com/v1/create-qr-code/?data=${inputUrl}&size=100x100`
      console.log(qrApi)
      setQrCode(qrApi);
      // .catch((error) => alert('Make sure to connect to the internet'))
      setInputUrl('')
    }


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
          Generate QR Code
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 ">
          Sccissor is a roboust{" "}
          <span className="text-lightBlue">URL shortening</span> app with{" "}
          <span className="text-lightBlue">QR code generation</span> and more..
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <form className="sm:w-[70%] md:mx-auto">
          <input
          onChange={(e) => setInputUrl(e.target.value)}
          value={inputUrl}
            type="text"
            name="qrtext"
            id="qrtext"
            placeholder="Enter text..."
            autocomplete="qrtext"
            className="mb-6 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <img
            className="h-[15%] sm:h-[26rem] w-full border p-6 sm:p-12"
            src={
              qrCode
                ? qrCode
                : "http://api.qrserver.com/v1/create-qr-code/?data=https://twitter.com/iam_franklin10&size=100x100"
            }
            alt="QR Code"
            title=""
          />
          <button
            onClick={createQR}
            type="submit"
            class="block w-full rounded-md bg-lightBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm mt-6"
          >
            Generate QR-Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;

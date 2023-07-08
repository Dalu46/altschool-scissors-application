import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if(selected == i) {
        return setSelected(null)
    } 
    setSelected(i)
  }

  const details = [
    {
        question: "How does URL shortening work?",
        response: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    {
        question: "Is it necessary to create an account to use the URL shortening service?",
        response: "No it isn't neccessary to create an account. You can try for free"
    },
    {
        question: "Are the shortened links permanent? Will they expire?",
        response: "No, the shortened links does not expire"
    },
    {
        question: "Are there any limitations on the number of URLs I can shorten?",
        response: "The limitation depends on your plan"
    },
    {
        question: "Can I customize the shortened URLs to reflect my brand or content?",
        response: "Yes you can"
    },
    {
        question: "Can I track the performance of my shortened URLs?",
        response: "No you can't track the performance of the shortened URLs"
    },
    {
        question: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
        response: "There's no special security for the URLs"
    },
    {
        question: "What is a QR code and what can it do?",
        response: "A QR code, is a two-dimensional barcode that can be scanned using a smartphone or QR code reader."
    },
    {
        question: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
        response: "Yes, but it is available for the paid plan only"
    }
  ]

  const renderedDetails = details.map((detail, id) => {
    return (
        <div key={id} className="mb-3">
            <div onClick={() => toggle(id)} className="flex justify-between mb-3">
                <p className="text-lg font-medium">{detail.question}</p>
                <span className="font-medium text-lg ml-6">{selected === id ? "-" : "+"}</span>
            </div>
            <div className={selected === id ? 'block' : 'hidden'}>
                {detail.response}
            </div>
            <hr />
        </div>
    )
  })
  return (
    <div id="FAQs" className="py-6 bg-[#F9FBFD] px-4 sm:px-6 lg:px-8 ">
      <p className="font-extrabold text-2xl text-center">FAQs</p>
      <div className="sm:w-3/4 sm:mx-auto">
        {renderedDetails}
      </div>
    </div>
  );
};

export default Accordion;

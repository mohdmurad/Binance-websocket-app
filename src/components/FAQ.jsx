import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost to set up a store?",
      answer:
        "Setting up a store has no upfront cost. However, transaction fees may apply for every sale.",
    },
    {
      question: "What kind of digital products can I sell?",
      answer:
        "You can sell eBooks, music, videos, software, courses, and more. If it's digital, you can sell it here.",
    },
    {
      question: "Do I need technical skills to use the platform?",
      answer:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      question: "Is there a limit to the number of products I can list?",
      answer:
        "No, you can list as many products as you want. There are no limits on our platform.",
    },
    {
      question: "How do I receive payments for my sales?",
      answer:
        "Payments are processed through secure payment gateways and directly deposited into your account.",
    },
    {
      question: "Can I sell internationally on this marketplace?",
      answer:
        "Yes, our platform supports international sales. You can sell to customers all around the world.",
    },
    {
      question: "What support and resources are available for sellers?",
      answer:
        "We offer 24/7 customer support, a detailed knowledge base, and a community forum to help sellers.",
    },
    {
      question: "Is there a review process for uploaded products?",
      answer:
        "Yes, uploaded products go through a review process to ensure quality and compliance with our guidelines.",
    },
  ];

  return (

    <div className='mx-auto max-w-[1400px] bg-slate-950 px-4 xl:px-40'>


  
    <div className="min-h-screen flex flex-col lg:flex-row items-center w-full gap-8 p-6  text-white">
      {/* Left Section */}
      <div className="lg:w-1/3">
        <h2 className="text-5xl text-[#00df9a] font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-gray-400 mb-2 text-2xl">
          Quick answers to questions you may have. Can't find what you're
          looking for?
        </p>
        <p className="text-blue-400 font-semibold cursor-pointer">
          Check out our full documentation
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3  text-black p-6 rounded-md shadow-md">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-6 border border-gray-300 bg-white rounded-3xl p-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <button className="text-gray-500 text-2xl font-semibold">
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;

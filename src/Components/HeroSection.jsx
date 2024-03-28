import React, { useState } from "react";

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => {
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Showcasing my work and skills
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#portfolio"
            className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-semibold uppercase tracking-wide shadow-lg transition duration-300"
          >
            View Portfolio
          </a>
          <button
            className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-semibold uppercase tracking-wide shadow-lg transition duration-300"
            onClick={openResume}
          >
            Download Resume
          </button>
        </div>
        {showResume && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Here you can embed the PDF viewer or show the content of the resume */}
              <iframe
                title="Resume"
                src="./ResumeFile/resume.pdf" // Replace "/path-to-resume.pdf" with the actual path to your resume PDF file
                className="w-full h-screen"
              ></iframe>
              <button
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                onClick={closeResume}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

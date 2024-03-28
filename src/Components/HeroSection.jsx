
const HeroSection = () => {
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
          <a
            href="/path-to-resume.pdf" // Replace "/path-to-resume.pdf" with the actual path to your resume PDF file
            className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-semibold uppercase tracking-wide shadow-lg transition duration-300"
            download // Add this attribute to trigger the download when clicked
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

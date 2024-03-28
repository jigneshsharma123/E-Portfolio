import React from "react";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Entry: B.Tech */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                Bachelor of Technology (Information Technology)
              </h3>
              <p className="text-lg text-gray-600">
                Bansal Institute Of Engineering And Technology, Lucknow
              </p>
              <p className="text-lg text-gray-600">
                2019 - 2023, 8.15 / 10 CGPA
              </p>
            </motion.div>

            {/* Education Entry: Intermediate */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                Intermediate (PCM)
              </h3>
              <p className="text-lg text-gray-600">
                P.N. National Public School
              </p>
              <p className="text-lg text-gray-600">2018 - 2019, 60.2%</p>
            </motion.div>

            {/* Education Entry: High School */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                High School
              </h3>
              <p className="text-lg text-gray-600">
                P.G. Sr. Secondary School, Captainganj
              </p>
              <p className="text-lg text-gray-600">2016 - 2017, 79.9%</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certification Entry: Java */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                Coding Ninjas Java Certificate
              </h3>
            </motion.div>

            {/* Certification Entry: DSA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                Coding Ninjas DSA Certificate
              </h3>
            </motion.div>

            {/* Certification Entry: Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                Coding Ninjas Frontend Certificate
              </h3>
            </motion.div>

            {/* Certification Entry: Backend */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                Coding Ninjas Backend Certificate
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

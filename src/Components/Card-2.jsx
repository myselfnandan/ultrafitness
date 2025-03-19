"use client"

import { motion } from "framer-motion";
import { FaGraduationCap, FaLightbulb, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";


const CardCode = () => {
  return (
    <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#e45f2b]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg text-center"
            >
              <FaHandsHelping className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
              <p className="text-gray-500">Certified trainers provide customized workout plans.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg text-center"
            >
              <FaLightbulb className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top-Notch Equipment</h3>
              <p className="text-gray-500">Fully equipped with modern cardio and strength training.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg text-center"
            >
              <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nutritional Guidance</h3>
              <p className="text-gray-500">Dietary consultations with in-house nutritionists to support fitness goals.</p> 
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg text-center"
            >
              <FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Memberships</h3>
              <p className="text-gray-500">Various membership plans (monthly, quarterly, annual) with corporate discounts.</p>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default CardCode;

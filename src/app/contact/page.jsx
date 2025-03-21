"use client";

import { useState } from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <div className="border-2 border-gray-600 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <p className="mb-5 text-center font-medium">
          Feel free to reach out to us for any inquiries or support.
        </p>

        <div className="mb-4">
          <p className="font-semibold">📍 Address:</p>
          <p>Ultra Fittness Gym And Cardio
          1/2 1st Floor, M. P. Plaza, Andrahalli Main Rd, opp. Acharya College Main Road, Vidyamanya Nagar, Bengaluru, Karnataka 560091</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">📞 Phone:</p>
          <p>+123 456 7890</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">📧 Email:</p>
          <p>contact@yourcompany.com</p>
        </div>

        <div className="mt-6">
          <p className="font-semibold mb-2">📍 Find us on the map:</p>
          <div className="w-full h-64">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.8023517362211!2d77.48847911685488!3d13.002543655465333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c614c221c77%3A0x6c86a54535b7757a!2sUltra%20Fittness%20Gym%20And%20Cardio!5e0!3m2!1sen!2sin!4v1742564653555!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

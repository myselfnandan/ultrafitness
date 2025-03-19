import React from 'react';
import {Linkedin, Mail} from 'lucide-react';
import InstructorStats from './InstructorStats';
import { CustomImage } from '../Components/image'

export default function InstructorSection() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-4xl font-bold text-center text-white mb-3">
          <span className="text-white bg-clip-text">
            Certified Trainers
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16">"Our team of certified personal trainers is here to guide you on your fitness journey with expert coaching, tailored workout plans, and professional support"</p>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <CustomImage
              src="/gymlogo.jpg"
              alt="venkatesh"
              // @ts-ignore
              className="relative w-72 h-72 object-cover rounded-xl"
              width={288}
              height={288}
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2 text-yellow-400">Venkatesh</h3>
            <p className="text-gray-200 mb-4">Certified Trainer at Ultra Fitness</p>
            <p className="text-gray-400 mb-6">
            a certified fitness coach with a passion for helping clients achieve their best selves. With 10+ years of experience, Venkatesh specializes in strength training, weight loss, endurance building, etc.
            </p>

            <InstructorStats />
          </div>
        </div>
      </div>
    </div>
  );
}
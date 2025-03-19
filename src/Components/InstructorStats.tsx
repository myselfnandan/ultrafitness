import React from 'react';
import { Users, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-5 h-5" />,
    value: "100+",
    label: "Transformations"
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: "10+",
    label: "Years Experience"
  },
  {
    icon: <Star className="w-5 h-5" />,
    value: "4.9/5",
    label: "Average Rating"
  }
];

export default function InstructorStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-4 rounded-lg backdrop-blur-sm
            hover:cursor-pointer"
        >
          <div className="text-blue-400 mb-2 flex justify-center lg:justify-start">
            {stat.icon}
          </div>
          <div className="text-white font-bold text-xl">{stat.value}</div>
          <div className="text-blue-200 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
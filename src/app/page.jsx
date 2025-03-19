'use client';

import Link from "next/link";
import { CustomImage } from '../Components/image'
import Card from "../Components/Card";
import CardCode from "../Components/Card-2";


const Home = () => {

  return (
    <div className="inset-0 bg-gray-900 md:mt-10">
      <div className="relative isolate px-6 pt-14 lg:px-8 lg:pb-[15vh]">
        <div className="mx-auto max-w h-auto flex flex-col items-center justify-around md:flex-row gap-20 mt-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6 animate-title">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Get Fit, Stay Strong              </span>
            </h1>
            <p className="mt-8 text-lg font-medium text-blue-200 mb-8 max-w-2xl animate-fade-in">
              {`Sweat, Hustle, Repeat – Your Transformation Awaits!`}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Updated Link Component without <a> */}
              <Link
                href="/about"
                className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 animate-pulse flex items-center space-x-2"
              >
                Get started
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-blue-200"
              >
                Learn more →
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center h-auto max-w-2xl text-blue-200">
            <CustomImage src="/gymlogo.jpg" alt="Programming" width={400} height={300} />
          </div>
        </div>
      </div>

      <Card/>
      <CardCode/>
    </div>
  );
};

export default Home;

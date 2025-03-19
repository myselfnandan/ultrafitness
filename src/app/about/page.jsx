'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const About =() =>{
  return(
    <>
    <h2 className="text-2xl font-bold text-center mt-[15vh] text-yellow-400">Flexible Gym Membership Plans for Every Fitness Goal!</h2>
    <div className="inset-0 lg:flex gap-10 md:grid justify-center items-center"> 
       <section className="pricing py-10">
            <div className="price-card mx-auto p-6 bg-gray-900 shadow-lg rounded-lg w-80 text-center border-2 border-gray-600">
              <h3 className="text-xl font-bold mb-4">1 Month</h3>
              <div className="price text-3xl font-bold text-green-400 mb-2">₹999</div>
              <div className="cut-price text-gray-500 line-through mb-4">₹1,599</div>
              <p className="mb-6">+ Advance for first month</p>
              <ul className="text-left mb-6">
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Gym Access</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Cardio</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Weight Training</span>
                </li>
              </ul>
              <Link href="https://codelatent.fermion.app/register"className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                  Select
              </Link>
            </div>
          </section>

          <section className="pricing py-10">
            <div className="price-card mx-auto p-6 bg-gray-900 shadow-lg rounded-lg w-80 text-center border-2 border-gray-600">
              <h3 className="text-xl font-bold mb-4">3 Months</h3>
              <div className="price text-3xl font-bold text-green-400 mb-2">₹2,399</div>
              <div className="cut-price text-gray-500 line-through mb-4">₹4,599</div>
              <p className="mb-6">+ Advance for first month</p>
              <ul className="text-left mb-6">
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Gym Access</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Cardio</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Weight Training</span>
                </li>
              </ul>
              <Link href="https://codelatent.fermion.app/register"className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                  Select
              </Link>
            </div>
          </section>

          <section className="pricing py-10">
            <div className="price-card mx-auto p-6 bg-gray-900 shadow-lg rounded-lg w-80 text-center border-2 border-gray-600">
              <h3 className="text-xl font-bold mb-4">12 Months</h3>
              <div className="price text-3xl font-bold text-green-400 mb-2">₹5,999</div>
              <div className="cut-price text-gray-500 line-through mb-4">₹8,999</div>
              <p className="mb-6">+ Advance for first month</p>
              <ul className="text-left mb-6">
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Gym Access</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Cardio</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Weight Training</span>
                </li>
              </ul>
              <Link href="https://codelatent.fermion.app/register"className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                  Select
              </Link>
            </div>
          </section>

    </div>

    <h2 className="text-2xl font-bold text-center mt-[5vh] text-yellow-400">Special Offer</h2>
    <div className="inset-0 lg:flex gap-10 md:grid justify-center items-center"> 
       <section className="pricing py-10">
            <div className="price-card mx-auto p-6 bg-gray-900 shadow-lg rounded-lg w-80 text-center border-2 border-gray-600">
              <h3 className="text-xl font-bold mb-4">12 Month</h3>
              <div className="price text-3xl font-bold text-green-400 mb-2">₹4,999</div>
              <div className="cut-price text-gray-500 line-through mb-4">₹5,999</div>
              <p className="mb-6">Just for Couples</p>
              <ul className="text-left mb-6">
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Gym Access</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Cardio</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Weight Training</span>
                </li>
              </ul>
              <Link href="https://codelatent.fermion.app/register"className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                  Select
              </Link>
            </div>
          </section>

          <section className="pricing py-10">
            <div className="price-card mx-auto p-6 bg-gray-900 shadow-lg rounded-lg w-80 text-center border-2 border-gray-600">
              <h3 className="text-xl font-bold mb-4">Personal Trainer</h3>
              <div className="price text-3xl font-bold text-green-400 mb-2">₹2,399</div>
              <div className="cut-price text-gray-500 line-through mb-4">₹4,599</div>
              <p className="mb-6"> Personalized Training Sessions!</p>
              <ul className="text-left mb-6">
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Gym Access</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Cardio</span>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fa fa-check text-green-500 mr-2"></i>
                  <span>Weight Training</span>
                </li>
              </ul>
              <Link href="#"className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                  Select
              </Link>
            </div>
          </section>          
    </div>
    </>
  )
}

export default About;

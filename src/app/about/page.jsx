'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-[15vh] text-white">
        Flexible Gym Membership Plans for Every Fitness Goal!
      </h2>
      <div className="inset-0 lg:flex gap-10 md:grid justify-center items-center">
        {[ 
          { title: "1 Month", price: "₹999", cutPrice: "₹1,599", features: ["Gym Access", "Cardio", "Weight Training"], link: "/contact" },
          { title: "3 Months", price: "₹2,399", cutPrice: "₹4,599", features: ["Gym Access", "Cardio", "Weight Training"], link: "/contact" },
          { title: "12 Months", price: "₹5,999", cutPrice: "₹8,999", features: ["Gym Access", "Cardio", "Weight Training"], link: "/contact" }
        ].map((plan, index) => (
          <section key={index} className="pricing py-10">
            <div className="price-card mx-auto p-6 bg-gray-900 shadow-lg rounded-lg w-80 text-center border-2 border-gray-600">
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <div className="price text-3xl font-bold text-green-400 mb-2">{plan.price}</div>
              <div className="cut-price text-gray-500 line-through mb-4">{plan.cutPrice}</div>
              <p className="mb-6">+ Advance for first month</p>
              <ul className="text-left mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <i className="fa fa-check text-green-500 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.link} className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                Select
              </Link>
            </div>
          </section>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mt-[5vh] text-yellow-400">Special Offer</h2>
      <div className="inset-0 lg:flex gap-10 md:grid justify-center items-center">
        {[ 
          { title: "12 Month", price: "₹4,999", cutPrice: "₹5,999", description: "Just for Couples", features: ["Gym Access", "Cardio", "Weight Training"], link: "/contact" },
          { title: "Personal Trainer", price: "₹2,399", cutPrice: "₹4,599", description: "Personalized Training Sessions!", features: ["Gym Access", "Cardio", "Weight Training"], link: "#" }
        ].map((offer, index) => (
          <section key={index} className="pricing py-10">
            <div className="price-card mx-auto p-6 bg-gray-900 shadow-lg rounded-lg w-80 text-center border-2 border-gray-600">
              <h3 className="text-xl font-bold mb-4">{offer.title}</h3>
              <div className="price text-3xl font-bold text-green-400 mb-2">{offer.price}</div>
              <div className="cut-price text-gray-500 line-through mb-4">{offer.cutPrice}</div>
              <p className="mb-6">{offer.description}</p>
              <ul className="text-left mb-6">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <i className="fa fa-check text-green-500 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={offer.link} className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                Select
              </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default About;
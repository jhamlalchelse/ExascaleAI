import React from 'react';
import Carousel from '../components/Carousel/Carousel';

const checkItemList = [
  'Make Informed Decisions',
  'Reduce Costs',
  'Optimize Operations',
  'Drive Sustainable Growth Across Your EntirePower Network',
];
const cardItem = [
  {
    url: 'assets/images/cartimg1.svg',
    heading: 'Fluctuating and Unpredictable Energy Demands',
    content:
      'Unpredictable consumption, influenced by factors like weather and technology shifts, challenges stable energy supply. Businesses struggle, especially with renewable integration, leading to inefficiencies and higher costs.',
  },
  {
    url: 'assets/images/cartimg2.svg',
    heading: 'Challenges in Grid Stability and Reliability',
    content:
      'Issues related to stability and reliability with aging infrastructure, frequency anomalies, transmission overloads, demand-supply mismatches, and complexities of decentralized energy',
  },
  {
    url: 'assets/images/cartimg3.svg',
    heading: 'Electricity Transmission Losses',
    content:
      'The distribution of electricity over long distances results in transmission losses, impacting the efficiency of the power grid.',
  },
  {
    url: 'assets/images/cartimg2.svg',
    heading: 'Challenges in Grid Stability and Reliability',
    content:
      'Issues related to stability and reliability with aging infrastructure, frequency anomalies, transmission overloads, demand-supply mismatches, and complexities of decentralized energy',
  },
  {
    url: 'assets/images/cartimg3.svg',
    heading: 'Electricity Transmission Losses',
    content:
      'The distribution of electricity over long distances results in transmission losses, impacting the efficiency of the power grid.',
  },
  {
    url: 'assets/images/cartimg1.svg',
    heading: 'Fluctuating and Unpredictable Energy Demands',
    content:
      'Unpredictable consumption, influenced by factors like weather and technology shifts, challenges stable energy supply. Businesses struggle, especially with renewable integration, leading to inefficiencies and higher costs.',
  },
  {
    url: 'assets/images/cartimg2.svg',
    heading: 'Challenges in Grid Stability and Reliability',
    content:
      'Issues related to stability and reliability with aging infrastructure, frequency anomalies, transmission overloads, demand-supply mismatches, and complexities of decentralized energy',
  },
];
const Home = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="md:px-8 lg:px-16">
      <div className="bg-slate-100 rounded px-2 md:px-8 py-2 lg:py-5 lg:mt-2">
        <p className="text-3xl">Revolutionize Power Management with</p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <img
            src="assets/images/AIpowered.svg"
            className="w-full md:w-8/12 lg:w-auto lg:order-2"
            alt="Exasclae Logo"
          />

          {/* Text Content */}
          <div className="lg:order-1">
            <p className="text-2xl lg:text-4xl text-[#5DA7CA] font-bold my-3">
              AI-Powered Energy Analytics
            </p>
            <p className="leading-8">
              Data Insights that deliver valuable information which can drive
              business strategies. At ExascaleAI, we provide end-to-end data
              analytics services for your business. Together, let’s give your
              data a voice. Our experts will work with your team to identify
              opportunities to innovate and develop tailor-made solutions for
              your requirements. Our robust Power Sector Analytics as a Service
              (Paas) platform equips you with cutting-edge technology to gain
              crystal-clear insights from your data.
            </p>

            <ul className="pt-5">
              {checkItemList.map((item, index) => {
                return (
                  <li key={index} className="flex items-center space-x-2 my-3">
                    <img
                      src="assets/images/checkbox.svg"
                      className="w-8 h-8"
                      alt="checkbox"
                    />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-2 md:px-5 my-0.5 md:my-8 py-1 md:py-6 rounded">
        <p className="text-2xl md:text-3xl font-bold pb-2">
          Challenges Faced by the Energy Sector
        </p>
        <p className="mb-5">
          The conventional utility & energy infrastructure are going through a
          widespread change in the adoption of distributed energy resources
          (DERs), including residential solar, electric vehicles, and battery
          storage.
        </p>
        <Carousel cardItem={cardItem} />
      </div>

      <div className="bg-[#5DA7CA] px-2 md:px-5 py-1 md:py-3 lg:my-5 rounded">
        <p className="text-2xl md:text-4xl text-white">
          AI-Powered Energy Efficiency: Insights-Driven Decisions
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <img
            src="assets/images/robot.svg"
            className="w-full h-96 lg:order-2"
            alt="robot"
          />

          {/* Text Content */}
          <div className="">
            <p className="text-white md:my-1 lg:my-5 font-thin leading-7">
              Our models span the complete energy value chain, operating in
              tandem to address various "what if" scenarios tailored to your
              organization's unique requirements. By transforming data into
              valuable insights, we empower energy stakeholders globally to
              recognize opportunities, manage risk, and affirm their business
              strategy.
            </p>
            <p className="text-white my-2 md:my-3 lg:my-6 font-thin leading-7">
              Exascale AI’s energy intelligence software and data analytics
              services that give enterprises unique behind-the-meter insights
              and the solutions platform to obtain:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:w-10/12 rounded-lg">
              <button className="bg-white my-1 py-2 md:my-0 w-full">
                Button1
              </button>
              <button className="bg-white my-1 py-2 md:my-0 w-full">
                Button2
              </button>
              <button className="bg-white my-1 py-2 md:my-0 w-full">
                Button3
              </button>
              <button className="bg-white my-1 py-2 md:my-0 w-full">
                Button4
              </button>
            </div>
            <p className="text-white my-2 md:my-3 lg:my-8 font-thin leading-7">
              Optimize your energy system with advanced analytics, predictive
              customer insights, and seamless forecasting. Swiftly detect issues
              using clear visualizations and enhance your system's performance.
            </p>
            <button className="bg-[#FDE2CF] text-[#F68A3E] py-1 px-2 rounded mb-3 mt-1.5 lg:mb-0">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div className="px-2 py-2 md:my-5">
        <p className="text-2xl md:text-4xl">
          Exascale AI’s Implementation Process 
        </p>
        <p className="leading-7 pt-3 pb-5 lg:pr-32">
          Exascale AI's energy analytics offer advanced information tools that
          extend beyond standard data, providing real-time insights for
          negotiating contracts, ensuring compliance, and optimizing energy
          systems. Across generation, transmission, and distribution, also
          enabling trading through AI-driven auctioning engines, predictive
          maintenance, power flow optimization, and market forecasting,
          organizations achieve measurable returns on investment and enhanced
          efficiency in energy management
        </p>
        <img
          src="assets/images/proccess.svg"
          className="w-full md:h-[400px] pb-3 px-1 md:px-0 md:pb-0"
          alt="proccess"
        />
      </div>
      <form
        onSubmit={submitHandler}
        className="bg-[#0F2733] px-2 md:px-5 py-1 md:py-3 lg:py-5"
      >
        <p className="text-white text-2xl md:text-3xl mb-5 md:mb-8">
          Ready to engage with your customers on apersonal level? Then let’s
          talk.
        </p>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <input
            type="text"
            placeholder="First Name"
            className="border border-slate-200 py-1.5 px-3 w-full rounded focus:outline-none focus:border-cyan-600 
            focus:right-1 focus:ring-rose-500 invalid:text-rose-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-600"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-slate-200 py-1.5 px-3 w-full rounded focus:outline-none focus:border-cyan-600 
            focus:right-1 focus:ring-rose-500 invalid:text-rose-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-slate-200 py-1.5 px-3 w-full rounded focus:outline-none focus:border-cyan-600 
            focus:right-1 focus:ring-rose-500 invalid:text-rose-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-600"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border border-slate-200 py-1.5 px-3 w-full rounded focus:outline-none focus:border-cyan-600 
            focus:right-1 focus:ring-rose-500 invalid:text-rose-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-600"
          />
        </div>
        <input
          type="text"
          placeholder="Company Name"
          className="border border-slate-200 py-1.5 px-3 w-full rounded my-5"
        />
        <p className="text-white text-center">
          By submitting this form you agree to Get Exascale AI{' '}
          <button className="text-[#CC1F1F] outline-none">
            {' '}
            Privacy policy*
          </button>
        </p>
        <button className="bg-[#FDE2CF] text-[#F68A3E] py-1.5 px-6 rounded my-3 my:mt-0 w-full md:w-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;

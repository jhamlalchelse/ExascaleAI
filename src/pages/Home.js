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
    url: 'assets/images/proccess.svg',
    heading: 'Challenges in Grid Stability and Reliability',
    content:
      'Issues related to stability and reliability with aging infrastructure, frequency anomalies, transmission overloads, demand-supply mismatches, and complexities of decentralized energy',
  },
  {
    url: 'assets/images/robot.svg',
    heading: 'Electricity Transmission Losses',
    content:
      'The distribution of electricity over long distances results in transmission losses, impacting the efficiency of the power grid.',
  },
  {
    url: 'assets/images/logo.svg',
    heading: 'Challenges in Grid Stability and Reliability',
    content:
      'Issues related to stability and reliability with aging infrastructure, frequency anomalies, transmission overloads, demand-supply mismatches, and complexities of decentralized energy',
  },
  {
    url: 'assets/images/checkbox.svg',
    heading: 'Electricity Transmission Losses',
    content:
      'The distribution of electricity over long distances results in transmission losses, impacting the efficiency of the power grid.',
  },
  {
    url: 'assets/images/AIpowered.svg',
    heading: 'Electricity Transmission Losses',
    content:
      'The distribution of electricity over long distances results in transmission losses, impacting the efficiency of the power grid.',
  },
  {
    url: 'assets/images/cartimg3.svg',
    heading: 'Electricity Transmission Losses',
    content:
      'The distribution of electricity over long distances results in transmission losses, impacting the efficiency of the power grid.',
  },
];
const Home = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="px-8">
      <div className="grid grid-cols-2 bg-slate-100 rounded px-8 py-5 mt-2">
        <div>
          <p className="text-3xl">Revolutionize Power Management with</p>
          <p className="text-4xl text-[#5DA7CA] font-bold my-3">
            AI-Powered Energy Analytics
          </p>
          <p className="leading-8">
            Data Insights that deliver valuable information which can drive
            business strategies. At ExascaleAI, we provide end-to-end data
            analytics services for your business. Together, let’s give your data
            a voice. Our experts will work with your team to identify
            opportunities to innovate and develop tailor-made solutions for your
            requirements. Our robust Power Sector Analytics as a Service (Paas)
            platform equips you with cutting-edge technology to gain
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
        <div>
          <img
            src="assets/images/AIpowered.svg"
            className="mr-3"
            alt="Exasclae Logo"
          />
        </div>
      </div>
      <div className="px-20 my-8 py-6 bg-slate-100 rounded">
        <p className="text-3xl font-bold pb-2">
          Challenges Faced by the Energy Sector
        </p>
        <p className="mb-5">
          The conventional utility & energy infrastructure are going through a
          widespread change in the adoption of distributed energy resources
          (DERs), including residential solar, electric vehicles, and battery
          storage.
        </p>
        {/* <div className="grid grid-cols-4 gap-16">
          {cardItem.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl border-y-2 border-s-2 border-cyan-700"
              >
                <img
                  src={item.url}
                  className="w-full rounded-t-2xl"
                  alt="checkbox"
                />
                <div className="mx-1">
                  <p className="text-[#5DA7CA] font-semibold text-lg my-1">
                    {item.heading}
                  </p>
                  <p className="leading-6 text-sm mb-3">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div> */}
        <Carousel cardItem={cardItem} />
      </div>
      <div className="bg-[#5DA7CA] px-20 py-5">
        <p className="text-4xl text-white">
          AI-Powered Energy Efficiency: Insights-Driven Decisions
        </p>
        <div className="flex">
          <div>
            <p className="text-white my-5 font-thin leading-7">
              Our models span the complete energy value chain, operating in
              tandem to address various "what if" scenarios tailored to your
              organization's unique requirements. By transforming data into
              valuable insights, we empower energy stakeholders globally to
              recognize opportunities, manage risk, and affirm their business
              strategy.
            </p>
            <p className="text-white my-6 font-thin leading-7">
              Exascale AI’s energy intelligence software and data analytics
              services that gives enterprises unique behind-the-meter insights
              and the solutions platform to obtain:
            </p>
            <div className="bg-white rounded-lg grid grid-cols-4 py-2 w-10/12">
              <button className="">Button1</button>
              <button className="">Button2</button>
              <button className="">Button3</button>
              <button className="">Button4</button>
            </div>
            <p className="text-white my-8 font-thin leading-7">
              Optimize your energy system with advanced analytics, predictive
              customer insights, and seamless forecasting. Swiftly detect issues
              using clear visualizations and enhance your system's performance.
            </p>
            <button className="bg-[#FDE2CF] text-[#F68A3E] py-1 px-2 rounded">
              Know More
            </button>
          </div>
          <img
            src="assets/images/robot.svg"
            className="w-full h-96"
            alt="robot"
          />
        </div>
      </div>
      <div className="px-20 my-5">
        <p className="text-4xl">Exascale AI’s Implementation Process </p>
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
          className="w-full h-[500px]"
          alt="proccess"
        />
      </div>
      <form onSubmit={submitHandler} className="bg-[#0F2733] px-20 py-5">
        <p className="text-white text-3xl mb-8">
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
        <button className="bg-[#FDE2CF] text-[#F68A3E] py-1.5 px-6 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;

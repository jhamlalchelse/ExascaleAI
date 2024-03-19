import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = ({ cardItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNumOfCard, setShowNumOfCard] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        // xl breakpoint
        setShowNumOfCard(4);
      } else if (screenWidth >= 1024) {
        // lg breakpoint
        setShowNumOfCard(3);
      } else if (screenWidth >= 768) {
        // md breakpoint
        setShowNumOfCard(2);
      } else {
        // sm and xs breakpoint
        setShowNumOfCard(1);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set initial state
    handleResize();

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative pb-10 md:px-5">
      <div className="overflow-hidden">
        <div className={`flex space-x-4`}>
          {cardItem.map(
            (item, index) =>
              index >= currentIndex &&
              index < currentIndex + showNumOfCard && (
                <div
                  key={index}
                  className={`bg-white shadow-xl rounded-2xl border-2 border-e-0 border-cyan-700 
                  transition-all duration-300 w-full min-h-[400px]`}
                >
                  <img
                    src={item.url}
                    className="w-full rounded-t-2xl"
                    alt="card image"
                  />
                  <div className="mx-1">
                    <p className="text-[#5DA7CA] font-semibold text-lg my-1">
                      {item.heading}
                    </p>
                    <p className="leading-6 text-sm mb-3">{item.content}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="absolute bottom-3 md:bottom-0 left-0 w-full flex justify-center">
        <div className="flex">
          {[...Array(cardItem.length - (showNumOfCard - 1))].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-4 w-4 rounded-full mx-1 ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
        className="absolute top-1/2 left-0 md:-left-5 transform -translate-y-1/2 z-10"
        disabled={currentIndex === 0}
      >
        <BsChevronLeft
          className={`h-8 w-8 ${
            currentIndex === 0 ? 'hidden' : 'text-slate-500'
          }`}
        />
      </button>
      <button
        onClick={() =>
          setCurrentIndex(
            Math.min(cardItem.length - showNumOfCard, currentIndex + 1)
          )
        }
        className="absolute top-1/2 right-0 md:-right-5 transform -translate-y-1/2 z-10"
        disabled={currentIndex + showNumOfCard >= cardItem.length}
      >
        <BsChevronRight
          className={`h-8 w-8 ${
            currentIndex + showNumOfCard >= cardItem.length
              ? 'hidden'
              : 'text-slate-500'
          }`}
        />
      </button>
    </div>
  );
};

export default Carousel;

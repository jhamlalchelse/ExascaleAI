import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = ({ cardItem }) => {
  const showNumOfCard = 4;
  const numOfDots = Math.ceil(cardItem.length - (showNumOfCard - 1));

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(cardItem.length - 1, prevIndex + 1)
    );
  };

  return (
    <div className="relative pb-10">
      <div className="overflow-hidden">
        <div className="flex space-x-4">
          {cardItem.map(
            (item, index) =>
              index >= currentIndex &&
              index < currentIndex + showNumOfCard && (
                <div
                  key={index}
                  className={`bg-white shadow-xl rounded-2xl border-2 border-e-0 border-cyan-700 
                transition-all duration-300 w-full`}
                >
                  <img
                    src={item.url}
                    className="w-[340px] h-[206px] rounded-t-2xl"
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
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="flex">
          {[...Array(numOfDots)].map((_, index) => (
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
        onClick={goToPreviousSlide}
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10"
        disabled={currentIndex === 0}
      >
        <BsChevronLeft
          className={`h-8 w-8 ${
            currentIndex === 0 ? 'hidden' : 'text-slate-500'
          }`}
        />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10"
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

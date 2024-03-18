import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; // Import the icon components you are using
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = ({ cardItem }) => {
  const showNumOfCard = 4;
  const numOfDots = Math.ceil(cardItem.length / showNumOfCard);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(currentIndex + showNumOfCard);

  const goToPreviousSlide = () => {
    const firstIndexVal = currentIndex - showNumOfCard;
    const lastIndexVal = lastIndex - showNumOfCard;

    setCurrentIndex(firstIndexVal > 0 ? firstIndexVal : 0);
    setLastIndex(firstIndexVal > 0 ? lastIndexVal : showNumOfCard);
  };

  const goToNextSlide = () => {
    const firstIndex = currentIndex + showNumOfCard;
    const lastIndex = currentIndex + showNumOfCard * 2;

    setCurrentIndex(
      lastIndex > cardItem.length ? cardItem.length - showNumOfCard : firstIndex
    );
    setLastIndex(lastIndex > cardItem.length ? cardItem.length : lastIndex);
  };

  const goToSpecificSlide = (index) => {
    const newIndex = Math.min(
      index * showNumOfCard,
      Math.max(0, cardItem.length - showNumOfCard)
    );
    setCurrentIndex(newIndex);
    setLastIndex(newIndex + showNumOfCard);
  };

  return (
    <div className="relative pb-10">
      <div className="overflow-hidden">
        <div className="flex space-x-4">
          {cardItem.slice(currentIndex, lastIndex).map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-xl rounded-2xl border-2 border-e-0 border-cyan-700 
              transition-all duration-300 w-full`}
              // style={{ width: `${cardItem.length * (100 / showNumOfCard)}%` }}
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
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="flex">
          {[...Array(numOfDots)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSpecificSlide(index)}
              className={`h-4 w-4 rounded-full mx-1 ${
                index === Math.ceil(currentIndex / showNumOfCard)
                  ? 'bg-black'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10"
        disabled={currentIndex === 0 ? true : false}
      >
        <BsChevronLeft
          className={`h-8 w-8 ${
            currentIndex === 0 ? 'hidden' : 'text-slate-500'
          }`}
        />
      </button>
      <button
        onClick={goToNextSlide}
        disabled={lastIndex === cardItem.length ? true : false}
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10"
      >
        <BsChevronRight
          className={`h-8 w-8 ${
            lastIndex === cardItem.length ? 'hidden' : 'text-slate-500'
          }`}
        />
      </button>
    </div>
  );
};

export default Carousel;

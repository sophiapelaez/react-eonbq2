import React, { useState } from 'react';
import { Discography } from './Discography.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLEft } from 'react-icons/fa';

const Carousel = ({ album }) => {
  const [current, setCurrent] = useState(0);
  const length = album.length;

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(album) || album.length <= 0) {
    return null;
  }

  return (
    <section className="discography">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="left-right" onClick={nextSlide} />
      {Discography.map((album, index) => {
        return (
          <div
            className={index === current ? 'album active' : 'album'}
            key={index}
          >
            {index === current && (
              <img src={album.image} alt="Album cover" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselItems = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
  { id: 3, content: 'Item 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div>
      <button onClick={prevItem}>Previous</button>
      <button onClick={nextItem}>Next</button>

      <div className="carousel-container">
        <AnimatePresence>
          <motion.div
            key={carouselItems[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="carousel-item"
          >
            {carouselItems[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
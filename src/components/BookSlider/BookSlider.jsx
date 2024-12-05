import React, { useState } from "react";
import './BookSlider.css'
const BookSlider = () => {
  const totalPages = 20; // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Start on page 1

  const handleLeftClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Go to the previous page
    }
  };

  const handleRightClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Go to the next page
    }
  };

  const getPageRotation = (pageIndex) => {
    // Calculate rotation for each page based on the current page number
    if (pageIndex <= currentPage) {
      return "rotateY(0deg)"; // Page is fully visible (opened)
    } else {
      return "rotateY(90deg)"; // Page is flipped
    }
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="book">
      <div className="cover">
        {pages.map((pageIndex) => (
          <div
            key={pageIndex}
            className={`page ${pageIndex % 2 === 0 ? "right" : "left"}`}
            style={{ transform: getPageRotation(pageIndex) }}
          >
            <p>Page {pageIndex}</p>
          </div>
        ))}
      </div>
      <button className="left-arrow" onClick={handleLeftClick}>
        ←
      </button>
      <button className="right-arrow" onClick={handleRightClick}>
        →
      </button>
      <p>Page {currentPage} of {totalPages}</p>
    </div>
  );
};

export default BookSlider;

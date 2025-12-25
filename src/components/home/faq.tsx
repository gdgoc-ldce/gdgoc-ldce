import React from "react";

// Dummy data for the 9 categories.
const faqCategories = [
  { title: "Category 1" },
  { title: "Category 2" },
  { title: "Category 3" },
  { title: "Category 4" },
  { title: "Category 5" },
  { title: "Category 6" },
  { title: "Category 7" },
  { title: "Category 8" },
  { title: "Category 9" },
];

export const FaqSection = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-4xl">
        {/* Main Title */}
        <h2 className="font-title mb-8 text-center text-6xl font-bold text-black md:text-7xl">
          Help Center
        </h2>

        {/* The 3x3 Grid - Corrected Implementation */}
        <div className="grid grid-cols-3">
          {faqCategories.map((category, index) => {
            // Determine if the cell is in the last row
            const isLastRow = index >= 6;
            // Determine if the cell is in the last column
            const isLastCol = (index + 1) % 3 === 0;

            return (
              <div
                key={category.title}
                className={`p-8 text-center text-xl font-bold text-black transition duration-200 ${!isLastRow ? "border-b-2 border-dashed border-black" : ""} ${!isLastCol ? "border-r-2 border-dashed border-black" : ""} `}
              >
                {category.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

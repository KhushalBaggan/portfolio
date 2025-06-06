import React from "react";
import Clone_Food_Wagon from "../assets/portfolio/Clone_Food_Wagon.png";
import Personal_portfolio from "../assets/portfolio/Personal_portfolio.png";
import Brain_tumor_detector from "../assets/portfolio/Brain_tumor_detector.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Clone_Food_Wagon,
      href: "https://github.com/KhushalBaggan/FoodWagon",
      alt: "Food Wagon Clone",
    },
    {
      id: 2,
      src: Personal_portfolio,
      href: "https://github.com/KhushalBaggan/Portfolio",
      alt: "Personal Portfolio",
    },
    {
      id: 3,
      src: Brain_tumor_detector,
      href: "https://github.com/KhushalBaggan/Brain_Tumor_Detection",
      alt: "Brain tumor detector",
    },
    // Add more projects here
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, alt }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
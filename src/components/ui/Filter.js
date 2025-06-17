"use client";

import "../../assets/pages/products.css"
import { useState } from "react";
import { FaAngleDown, FaFilter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Filter({className}) {
  const cityList = [{ label: "city1" }, { label: "city2" }];
  const provinceList = [
    { label: "province1" },
    { label: "province2" },
    { label: "province3" },
  ];

  const [openIndex, setOpenIndex] = useState(null);
    const [openMenu , setOpenMenu] =useState(false);

  const [filterPrice, setFilterPrice] = useState({ lowest: "",highest: "",});

  
  const [filterRating, setFilterRating] = useState({ lowestRating: null,highestRating: null,});


  const toggleFilter = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className={`filters-section ${className} ${openMenu && "!z-[999999]"}`}>
       {openMenu && (
              <div className="fixed   w-full h-full top-0 right-0 bg-black  bg-opacity-50 z-[9999999] flex items-center justify-end">
                <div
                  className="absolute inset-0  "
                  onClick={() => setOpenMenu(false)}
                ></div>
                <div
                  className={`bg-white w-3/4 max-w-xs h-full relative shadow-lg z-[999999]  `}
                >
                  <div className="p-5 flex justify-end">
                    <span
                      onClick={() => setOpenMenu(false)}
                      className="text-[25px] bg-mainBlue text-white p-1 rounded-lg  text-text__light cursor-pointer"
                    >
                      <IoMdClose className="hover:rotate-180 duration-500 " />
                    </span>
                  </div>
                  <nav className="px-5 flex flex-col w-full">
                    <span className="flex flex-col gap-2 mb-5 justify-center items-center w-full">
                  
                
                     
                    </span>
              
                    <ul className="space-y-4 flex justify-center items-center  flex-col">
             <div
        className="filter-section-card  "
      >
        <div
          className="filter-section-card-toggle  "
          key={1}
          onClick={() => toggleFilter(1)}
        >
          Price:
          <i
            className={` ${
              openIndex === 1 ? "rotate-180 duration-200 " : ""
            }`}
          >
            <FaAngleDown />
          </i>
        </div>
        {openIndex === 1 && (
          <div className="filter-section-active-price  ">
            <input
              type="number"
              onChange={(e) =>
                setFilterPrice({ ...filterPrice, lowest: e.target.value })
              }
              value={filterPrice.lowest}
              className="filter-section-active-price-input"
              placeholder="Lowest Price:"
            />
            <input
              type="number"
              onChange={(e) =>
                setFilterPrice({ ...filterPrice, highest: e.target.value })
              }
              value={filterPrice.highest}
              className="filter-section-active-price-input"
              placeholder="Highest Price:"
            />
            <div className="filter-section-active-btn-holder mobile:flex-col">
              <button
                className="filter-section-active-btn"
              >
                Apply
              </button>
                <button
                className="filter-section-active-btn"
                >
                  Clear
                </button>
            </div>
          </div>
        )}
      </div>
      <div
          className="filter-section-card  "

      >
        <div
          className="filter-section-card-toggle  "
          key={2}
          onClick={() => toggleFilter(2)}
        >
          Ratings
          <i
            className={`${
              openIndex === 2 ? "rotate-180 duration-200 " : ""
            }`}
          >
            <FaAngleDown />
          </i>
        </div>
        {openIndex === 2 && (
          <div className="filter-section-active-rating  ">
          <div className="filter-section-active-rating-holder ">
                          <span className="filter-section-active-rating-label">From</span>

            <input
              type="number"
              min={0}
              max={5}
              onChange={(e)=>setFilterRating({...filterRating , lowestRating:e.target.value})}
           value={filterRating.lowestRating}

              className="filter-section-active-rating-input"
            />
            <span className="filter-section-active-rating-label">To</span>

            <input
              type="number"
              min={1}
              max={5}
                            onChange={(e)=>setFilterRating({...filterRating , highestRating:e.target.value})}
value={filterRating.highestRating}
              className="filter-section-active-rating-input"
            />
</div>
            <div className="filter-section-active-btn-holder mobile:flex-col">
              <button
                className="filter-section-active-btn"
              >
                Apply
              </button>

                  <button
                className="filter-section-active-btn"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
      <div
         className="filter-section-card "

      >
        <div
        className="filter-section-card-toggle "
          key={3}
          onClick={() => toggleFilter(3)}
        >
          Province & City
          <i
            className={` ${
              openIndex === 3 ? "rotate-180 duration-200 " : ""
            }`}
          >
            <FaAngleDown />
          </i>
        </div>
        {openIndex === 3 && (
          <div className="filter-section-active-city">
            <select class="filter-section-active-city-select">
              <option
                value=""
                className="filter-section-active-city-option "
                hidden
                selected
              >
                Province:
              </option>
              {provinceList.map((i) => (
                <option value={i.label}>{i.label}</option>
              ))}
            </select>
            <select class="filter-section-active-city-select">
              <option
                value=""
                className="filter-section-active-city-option"
                hidden
                selected
              >
                City:
              </option>
              {cityList.map((i) => (
                <option value={i.label}>{i.label}</option>
              ))}
            </select>
          </div>
        )}
      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
      <div
        className="filter-section-card tablet:!hidden "
      >
        <div
          className="filter-section-card-toggle  "
          key={1}
          onClick={() => toggleFilter(1)}
        >
          Price:
          <i
            className={` ${
              openIndex === 1 ? "rotate-180 duration-200 " : ""
            }`}
          >
            <FaAngleDown />
          </i>
        </div>
        {openIndex === 1 && (
          <div className="filter-section-active-price  ">
            <input
              type="number"
              onChange={(e) =>
                setFilterPrice({ ...filterPrice, lowest: e.target.value })
              }
              value={filterPrice.lowest}
              className="filter-section-active-price-input"
              placeholder="Lowest Price:"
            />
            <input
              type="number"
              onChange={(e) =>
                setFilterPrice({ ...filterPrice, highest: e.target.value })
              }
              value={filterPrice.highest}
              className="filter-section-active-price-input"
              placeholder="Highest Price:"
            />
            <div className="filter-section-active-btn-holder">
              <button
                onClick={handleFilterPrice}
                className="filter-section-active-btn"
              >
                Apply
              </button>
                <button
                  onClick={handleClearPrice}
                className="filter-section-active-btn"
                >
                  Clear
                </button>
            </div>
          </div>
        )}
      </div>
      <div
          className="filter-section-card tablet:!hidden "

      >
        <div
          className="filter-section-card-toggle  "
          key={2}
          onClick={() => toggleFilter(2)}
        >
          Ratings
          <i
            className={`${
              openIndex === 2 ? "rotate-180 duration-200 " : ""
            }`}
          >
            <FaAngleDown />
          </i>
        </div>
        {openIndex === 2 && (
          <div className="filter-section-active-rating  ">
          <div className="filter-section-active-rating-holder ">
                          <span className="filter-section-active-rating-label">From</span>

            <input
              type="number"
              min={0}
              max={5}
              onChange={(e)=>setFilterRating({...filterRating , lowestRating:e.target.value})}
           value={filterRating.lowestRating}

              className="filter-section-active-rating-input"
            />
            <span className="filter-section-active-rating-label">To</span>

            <input
              type="number"
              min={1}
              max={5}
                            onChange={(e)=>setFilterRating({...filterRating , highestRating:e.target.value})}
value={filterRating.highestRating}
              className="filter-section-active-rating-input"
            />
</div>
            <div className="filter-section-active-btn-holder">
              <button
                className="filter-section-active-btn"
      onClick={handleFilterRatings}
              >
                Apply
              </button>

                  <button
                className="filter-section-active-btn"
      onClick={handleClearRatings}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
      <div
         className="filter-section-card tablet:!hidden"

      >
        <div
        className="filter-section-card-toggle "
          key={3}
          onClick={() => toggleFilter(3)}
        >
          Province & City
          <i
            className={` ${
              openIndex === 3 ? "rotate-180 duration-200 " : ""
            }`}
          >
            <FaAngleDown />
          </i>
        </div>
        {openIndex === 3 && (
          <div className="filter-section-active-city">
            <select class="filter-section-active-city-select">
              <option
                value=""
                className="filter-section-active-city-option "
                hidden
                selected
              >
                Province:
              </option>
              {provinceList.map((i) => (
                <option value={i.label}>{i.label}</option>
              ))}
            </select>
            <select class="filter-section-active-city-select">
              <option
                value=""
                className="filter-section-active-city-option"
                hidden
                selected
              >
                City:
              </option>
              {cityList.map((i) => (
                <option value={i.label}>{i.label}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      <button className="hidden tablet:flex w-full py-2.5 px-2 rounded-md justify-center bg-mainBlue text-white" onClick={()=>setOpenMenu(!openMenu)}>
        <FaFilter/>
      </button>
    </section>
  );
}

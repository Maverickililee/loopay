"use client";

import { useRouter } from "next/navigation";
import { FaTshirt } from "react-icons/fa";
import { FaCar, FaHouse, FaToolbox, FaTv } from "react-icons/fa6";
import {  MdOutlineWork } from "react-icons/md";

export default function Category() {
  const category = [
    {
      title: "Real Estates",
      english_title: "real-estates",
      id: 1,
      icon: <FaHouse size={20} className="category-section-icon"  />,
    },
    {
      title: "Vehicle",
      english_title: "vehicles",
      id: 2,
      icon: <FaCar size={20} className="category-section-icon"  />,
    },
    {
      title: " Electronics",
      english_title: "electronics",
      id: 3,
      icon: <FaTv size={20} className="category-section-icon"  />,
    },
        {
      title: "Jobs",
      english_title: "jobs",
      id: 4,
      icon: <MdOutlineWork
 size={20} className="category-section-icon" />,
    },
            {
      title: "Tools",
      english_title: "tools",
      id: 5,
      icon: <FaToolbox
 size={20} className="category-section-icon" />,
    },
               {
      title: "Clothes",
      english_title: "clothes",
      id: 6,
      icon: <FaTshirt
 size={20} className="category-section-icon" />,
    },
   

  ];
  const router = useRouter();
  function updateQueryParams(newParams) {
  const currentParams = new URLSearchParams(window.location.search);

  Object.entries(newParams).forEach(([key, value]) => {
    if (value !== null && value !== '') {
      currentParams.set(key, value);
    } else {
      currentParams.delete(key);
    }
  });

  router.push(`/products?${currentParams.toString()}`);
}
function handleClick(category){
updateQueryParams({
category,
})
}

  return (
    <section className="category-section ">
      <div className="container category-section-container ">
        {category.slice(0, 6).map((i) => (
          <button
          onClick={()=>handleClick(i.english_title.toLowerCase())}
          key={i.id}
            className=" category-section-card "
          >
            {i.icon}
            <span className="category-section-card-title">{i.title}</span>
</button>        ))}
      </div>
    </section>
  );
}

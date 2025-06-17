"use client";
import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import Filter from "./Filter";
import "../../assets/pages/products.css"
import { useRouter } from "next/navigation";

export default function Sort() {
       const [openIndex, setOpenIndex] = useState(1);


        const tabs=[
            {name:"Most Related" ,id:1},
              {name:"Latest" ,id:2},
                 {name:"Most Expensive" ,id:3},
              {name:"Less Expensive" ,id:4},
        ]

        const router =useRouter();

function updateQueryParams(newParams) {
  const currentParams = new URLSearchParams(window.location.search);

  Object.entries(newParams).forEach(([key, value]) => {
    if (value !== null && value !== '') {
      currentParams.set(key, value);
    } else {
      currentParams.delete(key);
    }
  });

  router.push(`/products/0?${currentParams.toString()}`);
}

function handleSort(id) {
  if (id === 2) {
    updateQueryParams({ sort: 'date' });
  } 
  else if (id === 3) {
    updateQueryParams({ sort: 'price_desc' });
  }
  else if (id === 4) {
    updateQueryParams({ sort: 'price_asc' });
  } 
  else{
        updateQueryParams({ sort: null });
  }
}

  return (
    <div className='sort-section '>
        <FaSortAmountDown  className="sort-section-icon"/>
      <span className="sort-section-label">
       Sort By:
      </span>
      {
        tabs.map((i)=>(
            <span key={i.id} className={`sort-section-tabs ${openIndex === i.id ? "text-white bg-mainBlue " : "text-textColor bg-slate-100" } `} onClick={()=>{ setOpenIndex(i.id); handleSort(i.id)}}>
                {i.name}
            </span>
        ))
      }
      <Filter className="!hidden tablet:!flex"/>
    </div>
  )
}

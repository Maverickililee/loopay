"use client";
import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import Filter from "./Filter";
import "../../assets/pages/products.css"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Sort() {
       const [openIndex, setOpenIndex] = useState(1);


        const tabs=[
            {name:"Most Related" ,id:1},
              {name:"Latest" ,id:2},
                 {name:"Most Expensive" ,id:3},
              {name:"Less Expensive" ,id:4},
        ]





  return (
    <div className='sort-section '>
        <FaSortAmountDown  className="sort-section-icon"/>
      <span className="sort-section-label">
       Sort By:
      </span>
      {
        tabs.map((i)=>(
            <Link href={`/products/0/?sort=${i.id}`} key={i.id} className={`sort-section-tabs ${openIndex === i.id ? "text-white bg-mainBlue " : "text-textColor bg-slate-100" } `} onClick={()=>{ setOpenIndex(i.id);}}>
                {i.name}
            </Link>
        ))
      }
      {/* <Filter className="!hidden tablet:!flex"/> */}
    </div>
  )
}

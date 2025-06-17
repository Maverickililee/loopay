"use client";
import "@/assets/input.css";
import Link from "next/link";
import { useState } from "react";
import { FaCar, FaCarBattery, FaCity, FaGlobe, FaToolbox } from "react-icons/fa6";
import Dropdown from "../ui/Dropdown";


export default function Hero(props) {
  const data = props.data[0];

  const [country, setCountry] = useState("country");
  const [province, setProvince] = useState("province");

const countryList = [
          { label: "country1", onClick: () => setCountry("country1") },
          { label: "country2", onClick: () => setCountry("country2") },
        ];
        const provinceList=[
          {label:"province1",onClick:()=>setProvince("province1")},
           {label:"province2",onClick:()=>setProvince("province2")},
            {label:"province3",onClick:()=>setProvince("province3")},
        ]

  return (
    <section className="hero-section ">
    
      <div className="container hero-container">
        <span className="hero-slogan">Over 500,000 Active Ads</span>
        <h2 className="hero-title">{data.title}</h2>
        <p className="hero-description">
          {data ? `${data.description}` : "no content!"}
        </p>
        <div className="hero-input-holder">
     
<Dropdown

       label={country}
        items={countryList}
>
  <FaGlobe className="size-7 text-subText"/>
  </Dropdown>
     <Dropdown

       label={province}
        items={provinceList}
>
  <FaCity className="size-7 text-subText"/>
  </Dropdown>
        </div>
        <div className="hero-btn-holder">
          <Link className="hero-btn" href={"/products?category=vehicle"}>
          <FaCar/>
          <span>
  Cars
          </span>
        
          </Link>
          <Link className="hero-btn" href={"/products?category=tools"}>
          <FaToolbox/>
          <span>
  Services
          </span>
        
          </Link>
          <Link className="hero-btn" href={"/products?category=electronics"}>
          <FaCarBattery/>
          <span>
  Electronics
          </span>
        
          </Link>
        </div>
      </div>
    </section>
  );
}

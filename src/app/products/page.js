import Filter from '@/components/ui/Filter'
import Sort from '@/components/ui/Sort'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import "../../assets/pages/products.css"
import { FaCartPlus } from 'react-icons/fa6';

export default async function page({ searchParams }) {
      const productList=[
                {
          id:1,
      code: "102",
      title:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
      abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
      price:"104",
      category:"electronics",
      src:"https://statics.basalam.com/public-88/users/48XaO2/05-31/HqwriThRvpfFNr912z0PBdVO4YrTzmHu4ZmHeg72Yp0Gn8ojen.jpg_256X256X70.jpg",
      colors:["#C0C1C5","#202022"],
          createdAt: "2022-01-15T15:30:00Z",

      sizes:['XL' ,"XX"],
            rating:"4",

    },
    {
      id:0,
      code: "101",
      title:"48V rechargeable car wash with bag and foam container",
      abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
      price:"12.5",
      category:"tools",
      src:"https://statics.basalam.com/public-77/users/L3ZLze/04-25/Oxzsc9uefForJQ68iICuykNUIC4siBlBxiAnHZwvNTe2JCsb1z.jpg_800X800X70.jpg",
      colors:["#BD2A31","#ED6803","#252326"],
      sizes:["M" ,"L" ,'X'],
          createdAt: "2025-01-15T15:30:00Z",

      rating:"1",
    },

        {
          id:2,
      code: "103",
      title:"Finish Quantum 72-count dishwasher tablets, original with improved formula, made in Türkiye",
      abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
      price:"10.0",
      category:"tools",
          createdAt: "2024-12-10T12:00:00Z", 

      src:"https://statics.basalam.com/public-35/users/60DL7D/09-28/FRTKd9JFEODrCqzWOLTs7CXuAx9Y2qGPoT1iMwGqX4nanugutM.jpg_800X800X70.jpg",
      colors:["#216DBE","#f80414"],
      sizes:["M"],
            rating:"5",

    },
        {
          id:3,
      code: "104",
      title:"Kazuki IAC18CHXAAA gas air conditioner, capacity 18,000",
      abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
      price:"550.20",
      src:"https://statics.basalam.com/public-13/users/PqxwKw/10-03/UyEwsFPxE8MSYs1HKmzFLi4EL5TytJYXK72FZvBJwUjATDVnkl.jpg_800X800X70.jpg",
      colors:["#F5F5F5"],
                createdAt: "2024-12-8T12:00:00Z", 
      category:"electronics",

      sizes:['XXX'],
            rating:"2",

    },
  ];


  const sort = searchParams.sort || "";
  const search = searchParams.search || "";
  const lowest=parseFloat(searchParams.lowest || "0");
  const highest = parseFloat(searchParams.highest || "1000000");
const category = searchParams.category ||"";

  const lowestRating=parseFloat(searchParams.lowestRating || "0");
  const highestRating =parseFloat(searchParams.highestRating || "5");

  const filtered = productList.filter((i)=>{
      const price = parseFloat(i.price.replace('$', '').replace('.', ','));
  const rating = parseFloat(i.rating || 0);
    return rating>=lowestRating && rating <= highestRating && price >= lowest && price <= highest;

  })
  
  const searched = filtered.filter((i)=>{
  const title = i.title.toLowerCase().includes(search);
  return title;
  
})
const catgeoriesed= category
  ? searched.filter((i) => i.category === category)
  : searched;
const sorted = [...catgeoriesed]; 
if (sort === "price_asc") {
  sorted.sort(
    (a, b) =>
      parseFloat(a.price.replace(',', '.')) -
      parseFloat(b.price.replace(',', '.'))
  );
} else if (sort === "price_desc") {
  sorted.sort(
    (a, b) =>
      parseFloat(b.price.replace(',', '.')) -
      parseFloat(a.price.replace(',', '.'))
  );

}
  else if (sort === "date") {
  sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
  
  return (
  <main className='products-list '>
    <div className="container products-list-container ">
    <span className='products-list-root '>
  Home / All Products
      </span>
 
    <section className='products-list-main '>
   <Filter className="tablet:!hidden"/>
   <div className='products-list-content' >
    <Sort/>
    <div className='products-list-card-holder'>
{sorted?.map((i)=>(
  <div key={i.id} className='products-list-card '>
    <div className='products-list-card-img-holder'>
    <Image
    className='products-list-card-img'
    width={2000}
    height={2000}
    alt='loading...'
                      src={i.src}
    />
    </div>

    <h4 className="products-list-card-code">
      Code: #{i?.code}
    </h4>
    <div className='products-list-card-info'>
 <h3 className='products-list-card-title'>
{i?.title}
    </h3>
    <span className='products-list-card-price'>
      {i?.price} $
    </span>
    </div>
    <span className='products-list-card-label'>
      Details:
    </span>
    <p className='products-list-card-description ' >
      {i?.abstract }
   </p>
   <span className='products-list-card-label'>
      Available Colors:
    </span>
    <div className='products-list-card-colors-holder'>
      {i.colors?.slice(0,6).map((j,index)=>(
        <div key={index} style={{backgroundColor:j,}} className="products-list-card-colors  ">
        </div>
      ))}
    </div>
     <span className='products-list-card-label'>
      Available Sizes:
    </span>
        <div className='products-list-card-size-holder'>
      {i.sizes?.slice(0,6).map((j,index)=>(
        <div key={index} className="products-list-card-size ">
          {j}

        </div>
      ))}
    
    </div>
    <div className='products-list-card-btn-holder'>
      <button className='products-list-card-cart'>
        <FaCartPlus className='products-list-card-cart-icon'/>
      </button>
      <Link className='products-list-card-btn' href={`product/${i.title}`} >
       Read More
      </Link>
    </div>
  </div>
))}
    </div>
   </div>
    </section>
    </div>
    
  </main>
  )
}

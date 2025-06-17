import React from 'react'
import Swipper from '../ui/Swipper'
import Image from 'next/image'
import { FaCartPlus } from 'react-icons/fa6'
import Link from 'next/link'

export default function Products({title  ,abstract,data }) {
      const productList=data.adv;
  //     [
  //   {
  //     id:0,
  //     code: "101",
  //     title:"48V rechargeable car wash with bag and foam container",
  //     abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
  //     price:"12.5",
  //     src:"https://statics.basalam.com/public-77/users/L3ZLze/04-25/Oxzsc9uefForJQ68iICuykNUIC4siBlBxiAnHZwvNTe2JCsb1z.jpg_800X800X70.jpg",
  //     colors:["#BD2A31","#ED6803","#252326"],
  //     sizes:["M" ,"L" ,'X']
  //   },
  //       {
  //         id:1,
  //     code: "102",
  //     title:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
  //     abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
  //     price:"104",
  //     src:"https://statics.basalam.com/public-88/users/48XaO2/05-31/HqwriThRvpfFNr912z0PBdVO4YrTzmHu4ZmHeg72Yp0Gn8ojen.jpg_256X256X70.jpg",
  //     colors:["#C0C1C5","#202022"],
  //     sizes:['XL' ,"XX"]
  //   },
  //       {
  //         id:2,
  //     code: "103",
  //     title:"Finish Quantum 72-count dishwasher tablets, original with improved formula, made in Türkiye",
  //     abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
  //     price:"10.0",
  //     src:"https://statics.basalam.com/public-35/users/60DL7D/09-28/FRTKd9JFEODrCqzWOLTs7CXuAx9Y2qGPoT1iMwGqX4nanugutM.jpg_800X800X70.jpg",
  //     colors:["#216DBE","#f80414"],
  //     sizes:["M"]
  //   },
  //       {
  //         id:3,
  //     code: "104",
  //     title:"Kazuki IAC18CHXAAA gas air conditioner, capacity 18,000",
  //     abstract:"Lorem Ipsum is a fabricated text with an unintelligible simplicity produced by the printing industry and used by graphic designers.",
  //     price:"550.20$",
  //     src:"https://statics.basalam.com/public-13/users/PqxwKw/10-03/UyEwsFPxE8MSYs1HKmzFLi4EL5TytJYXK72FZvBJwUjATDVnkl.jpg_800X800X70.jpg",
  //     colors:["#F5F5F5"],
  //     sizes:['XXX']
  //   },
  // ];
  return (
    <section className='product-section '>
            <div className="container  product-section-container ">
                <h2 className='product-section-header'>
                    {title}
                </h2>
                <p className='product-section-abstract' dangerouslySetInnerHTML={{__html:abstract}} >
           
                </p>
                <Link className='product-section-link ' href='/products'>
               View More 

                </Link>
                <div className='product-section-card-holder'>
     <Swipper  slide={4}  spaceBetween={30} breake={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1440:{
                      slidesPerView:4,
                      spaceBetween:30,
                    }
                  }} navigation={false} pagination={false} scrollbar={true} loop={true} time={2000}          >

{productList?.map((i)=>(
  <div key={i.id} className='product-section-card '>
    <div className='product-section-card-img-holder'>
    <Image
    className='product-section-card-img'
    width={2000}
    height={2000}
    alt='loading...'
                      src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${i.photo}`}
    />
    </div>

    <h4 className="product-section-card-code">
      Code: #{i?.code}
    </h4>
    <div className='product-section-card-info'>
 <h3 className='product-section-card-title'>
{i?.title}
    </h3>
    <span className='product-section-card-price'>
      {i?.price}$
    </span>
    </div>
    <span className='product-section-card-label'>
      Details:
    </span>
    <p className='product-section-card-description ' >
      {i?.abstract }
   </p>
   <span className='product-section-card-label'>
      Available Colors:
    </span>
    <div className='product-section-card-colors-holder'>
      {i.colors?.slice(0,6).map((j,index)=>(
        <div key={index} style={{backgroundColor:j,}} className="product-section-card-colors  ">
        </div>
      ))}
    </div>
     <span className='product-section-card-label'>
      Available Sizes:
    </span>
        <div className='product-section-card-size-holder'>
      {i.sizes?.slice(0,6).map((j,index)=>(
        <div key={index}  className="product-section-card-size ">
          {j}

        </div>
      ))}
    
    </div>
    <div className='product-section-card-btn-holder'>
      <button className='product-section-card-cart'>
        <FaCartPlus className='product-section-card-cart-icon'/>
      </button>
      <Link className='product-section-card-btn' href={`product/${i.english_title}`} >
       Read More
      </Link>
    </div>
  </div>
))}

                  </Swipper>

                </div>
              
            </div>
    </section>
  )
}

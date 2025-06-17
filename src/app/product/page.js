import Swipper from "@/components/ui/Swipper";
import timeSince from "@/functions/timesince";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import "../../assets/pages/products.css";
import CategoryButton from "@/components/ui/CategoryButton";
export default function page() {
  const product = {
    id: 1,
    code: "102",
    category:"Electronics",
    title:
      " Printer HP LaserJet 227fdw",
    abstract:
      "<h1>HP 227fdw Laser Multifunction Printer Printer</h1> <ul><li>Type: Black and White Laser Multifunction</li> <li>Maximum Paper Size: A4</li> <li>Black and White Printing Speed: 26 Sheets of Paper per Minute</li> <li>Print Resolution: 600*600 dpi </li> <li>Duplex Printing Capability: Yes</li> <li>Cartridge Type: 30A</li> <li> One Year Official Warranty</li></ul>",
    price: "104",
    category:"electronics",
    photo: [
      "https://statics.basalam.com/public-35/users/aN/09-18/VgNar4nlYWmiSOrlyvclekqZHAY8FnuA5uMgVxiNlVM3FPLTRR.jpg_800X800X70.jpg",
      "https://statics.basalam.com/public-35/users/aN/09-18/HZ1wF1toV9GZa4g4HR38X4pGOpLAX82EtkLejrP2uvWdUhAUe5.jpg_800X800X70.jpg",
      "https://statics.basalam.com/public-35/users/aN/09-18/IcEU3LfQOKYavZO6Fw51S0LCT4xNqJaDVgZW5Qx8tYKEkZa5ee.jpg_800X800X70.jpg",
      "https://statics.basalam.com/public-35/users/aN/09-18/Nqm3aYYNpT7l3sjrwFhQK5XLf6YkmeCevbQkz7Q4NKIGG4Oufi.jpg_800X800X70.jpg",
    ],
    location : "Alaska,	Cordova, 3785 Blackwell Street",
    colors: ["#C0C1C5", "#202022"],
    createdAt: "2022-01-15T15:30:00Z",

    sizes: ["XL", "XX"],
    rating: "4.0",
  };


  return (
    <main className="product-page ">
      <div className="container product-page-container ">
        <div className="product-page-img-holder  "                 style={{ boxShadow: " 1px 1px 15px 5px #e0e0e05a" }}
>
          <Swipper
            slide={4}
            spaceBetween={30}
            breake={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            navigation={false}
            pagination={true}
            scrollbar={true}
            loop={true}
            time={2000}
          >
            {product.photo.map((i, index) => (
              <Image
                key={index}
                width={2000}
                height={2000}
                alt="loading..."
                src={i}
                className="product-page-img"
              />
            ))}
          </Swipper>
        </div>
        <div className="product-page-main">
              <h1 className="product-page-title">
                {product.title}
              </h1>
              <span className="product-page-date">
                {timeSince(product.createdAt)} - {product.location}
              </span>
              <span className="product-page-rating ">
                <FaStar className="product-page-rating-icon"/>
                {product.rating}
              </span>
              <span className="product-page-info-holder"> 
              <span >
                Price:
              </span>
              <span>
                {product.price}$
              </span>
              </span>
                <span className="product-page-info-holder "> 
              <span >
                Category:
              </span>
           <CategoryButton title={product.category.toLocaleLowerCase()}/>
              </span>
                <span className="product-page-sizes-holder  "> 
              <span>
                Availabe Sizes:
              </span>
              <ul className="product-page-size-list">
              {product.sizes.map((i,index)=>(
                <li key={index} className="product-page-size ">
                  {i}
                </li>
              ))}
              </ul>
              </span>
                            <span className="product-page-colors-holder   "> 
              <span>
                Availabe Colors:
              </span>
              <ul className="product-page-colors-list">
              {product.colors.map((i,index)=>(
                <li key={index} style={{backgroundColor:i}} className="product-page-color">
                </li>
              ))}
              </ul>
              </span>
              <div className="product-page-cart">
                <input type="number" defaultValue={1} min={1} className="product-page-cart-input"  />
          <button className="product-page-cart-btn ">
              Add to cart
              </button> 
              </div>
    
                            <span className="product-page-description-holder   "> 
                <span>
                  Description:
                </span>
                <span className=" product-page-content "    dangerouslySetInnerHTML={{__html:product.abstract}}>
             
                
                 
                </span>
              </span>
        </div>
      </div>
    </main>
  );
}

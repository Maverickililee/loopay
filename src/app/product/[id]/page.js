import Swipper from "@/components/ui/Swipper";
import timeSince from "@/functions/timesince";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import "../../../assets/pages/products.css";
import axiosServerSide from "@/Api/axiosServerSide";
import Link from "next/link";

async function getData(id) {
  const res = await axiosServerSide.post(
   "/adv/TourismSiteGet/",
    { url: id  }
  );
  return res.data;
}
export async function generateMetadata({ params }) {
  const { id } = await params;
  if (!id) {
    console.error('id is missing!');
  }

  const data = await getData(id);
  console.log(data);

  return {
    title: data.title || 'Default Product Title', 
    openGraph: {
      title: data?.title || 'Default Product Title',
      url: `${process.env.BASE_URL}/product/${id}`,
      type: 'article',
      images: [
        {
          url: `${process.env.PHOTO_URL}${data?.image}`, 
          height: 600,
          alt: data.title || 'Product Image',
        },
      ],
    },
  };
}
export default async function SingleProductPage({ params }) {
  const { id } = await params;
  if (!id) {
    console.error('Title is missing!');
  }
  const product = await getData(id);


  return (
    <main className="product-page ">
      <div className="container product-page-container ">
        <div className="product-page-img-holder  "                 style={{ boxShadow: " 1px 1px 15px 5px #e0e0e05a" }}
>
          <Swipper
            slide={3}
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
            {product?.photos?.map((i, index) => (
              <Image
                key={index}
                width={2000}
                height={2000}
                alt="loading..."
                        src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${i}`}
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
                {timeSince(product.publish_date)} - {product.city}
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
        <Link href={`products/0/${product.category}`}  className="product-page-category">
                {product.category}
              </Link>
              </span>
                <span className="product-page-sizes-holder  "> 
              <span>
                Availabe Sizes:
              </span>
              <ul className="product-page-size-list">
              {product?.sizes?.map((i,index)=>(
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
              {product?.colors?.map((i,index)=>(
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
                <span className=" product-page-content "    dangerouslySetInnerHTML={{__html:product.content}}>
             
                
                 
                </span>
              </span>
        </div>
      </div>
    </main>
  );
}

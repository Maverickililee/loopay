import Image from "next/image";
import Swipper from "../ui/Swipper";

export default function Brands({data}) {
    const brands = data;
  return (
 <section className="brands-section ">
    <div className="container brands-section-container ">
<Swipper  slide={5}  spaceBetween={30} breake={{
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
                      spaceBetween: 40,
                    },
                    1440:{
                      slidesPerView:5,
                      spaceBetween:50,
                    }
                  }} navigation={false} pagination={false} scrollbar={true} loop={true} time={2000}          >
                    {brands.map((i)=>(
                        <div key={i.id} className=" brands-section-card">
     <Image 
     className="brands-section-card-img"
                            width={2000}
                            height={2000}
                            alt="loading..."
                      src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${i.photo}`}
                            />
                        </div>
      
                    ))}
                 

                     
                  </Swipper>
    </div>

 </section>
  )
}

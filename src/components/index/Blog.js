import Image from "next/image";
import Swipper from "../ui/Swipper";
import Link from "next/link";
import {  FaUser } from "react-icons/fa6";


export default function Blog({title ,abstract ,data}) 
{

  const blogs = data;
 
  return (
    <section className='blogs-section '>
            <div className="container  blogs-section-container ">
                <h2 className='blogs-section-header'>
                    {title}
                </h2>
                <p className='blogs-section-abstract' dangerouslySetInnerHTML={{__html:abstract}} >
           
                </p>
                   <Link className='blogs-section-link ' href='/blogs/0'>
               View More 

                </Link>
                <div className='blogs-section-card-holder  '>
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

{blogs?.map((i)=>(
  <div key={i.id} className='blogs-section-card'>
    <Image
    className='blogs-section-card-img'
    width={2000}
    height={2000}
    alt="loading..."
                      src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${i.photo}`}
    />

 <h3 className=' blogs-section-card-title'>
{i?.title}
    </h3>

    <p className=' blogs-section-card-description ' dangerouslySetInnerHTML={{__html:i?.abstract }}>
  </p>
<span className="blogs-section-card-author">
    <FaUser className="blog-section-card-author-icon"/>
    {i?.user.full_name} 
</span>
 

      <Link className='blogs-section-card-btn' href={`blog/${i.title}`} >
Read More     </Link>

  </div>
))}

                  </Swipper>

                </div>
              
            </div>
    </section>
  )
}

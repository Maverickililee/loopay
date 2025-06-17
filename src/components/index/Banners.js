import Image from "next/image";


export default function Banners({data}) {
const banners =data;

  return (
    <div className="banner-section ">
        <div className="container banner-section-container  ">
        {data.slice(0,4).map((i)=>(
            <div key={i.id} className=" banner-section-img-holder">
         
                       <Image
                       className='banner-section-img '
                       width={2000}
                       height={2000}
                       alt="loading..."
                                         src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${i.photo}`}
                       />
            </div>
        ))}
        </div>
    </div>
  )
}

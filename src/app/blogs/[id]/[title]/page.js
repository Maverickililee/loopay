import "../../../../assets/pages/blogs.css";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Category from "@/components/ui/Category";
import axiosServerSide from "@/Api/axiosServerSide";

async function getData(page = 0, category =category) {
  try {
    const response = await axiosServerSide.post(`/Content/BlogList/`, {
      category : category,
      page: +page,
      pageCount: 30,
      order: "new",
    });

    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}

export default async function BlogsPage({params }) {
  const { id ,title } = await params;
  const data = await getData(id ,title );
  console.log(data);





  return( 
 <main className='blogs-list '>
    <div className="container blogs-list-container ">
    <span className='products-list-root '>
  Home / All blogs
      </span>
 
    <section className='blogs-list-main '>
   <Category data={data?.contentCategorys}/>
   <div className='blogs-list-content' >
    <div className="blogs-list-card-holder">
            {data?.blogPaginationData?.blogs.length > 0 ? (
              data?.blogPaginationData?.blogs?.map((i) => (
                <div key={i.id} >
                    <div  className='blogs-list-card'>
    <Image
    className='blogs-list-card-img'
    width={2000}
    height={2000}
    alt="loading..."
                        src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${i.photo}`}
    />

 <h3 className=' blogs-list-card-title'>
{i?.title}
    </h3>

    <p className=' blogs-list-card-description ' dangerouslySetInnerHTML={{__html:i?.abstract }}>
  </p>
<span className="blogs-list-card-author">
    <FaUser className="blogs-list-card-author-icon"/>
    {i?.user.full_name} 
</span>
 

      <Link className='blogs-list-card-btn' href={`/blog/${i.english_title}`} >
Read More     </Link>

  </div>
                </div>
              ))
     ) : (
              <div className="bg-mainBlue p-3 w-full col-span-2 rounded-[5px] text-white ">
                No Article Is Availabe!!
                </div>
            )}
    </div>
          <div className="flex flex-row-reverse !justify-end items-center">
              <Pagination
              count={data?.blogPaginationData?.totalCount}
              url={"Blogs"}
            />
              </div>
    </div>
    </section>
    </div>
  </main>
  );
}

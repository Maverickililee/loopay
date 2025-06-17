
import Link from "next/link";
import "../../assets/pages/blogs.css";

export default function Category({data}) {
  const category = data;
  return (
    <div className=" category-sidebar">
        <span  className="mb-4">
            catgeories:
        </span>
        {category.map((i)=>(
                <Link key={i.id} href={`/blogs/0/${i.english_title}`}
            
            className="category-sidebar-links" >
            {i.title}
            </Link>
        ))}
    </div>
  )
}

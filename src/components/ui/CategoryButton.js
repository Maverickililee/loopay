"use client";
import { useRouter } from "next/navigation";
import "../../assets/pages/products.css";

export default function CategoryButton({title}) {
      const router = useRouter();
      function updateQueryParams(newParams) {
      const currentParams = new URLSearchParams(window.location.search);
    
      Object.entries(newParams).forEach(([key, value]) => {
        if (value !== null && value !== '') {
          currentParams.set(key, value);
        } else {
          currentParams.delete(key);
        }
      });
    
      router.push(`/products/0?${currentParams.toString()}`);
    }
    function handleClick(category){
    updateQueryParams({
    category,
    })
    }
  return (
   <button onClick={()=> handleClick(title)}  className="product-page-category">
                {title}
              </button>
  )
}

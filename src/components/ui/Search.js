'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6';

export default function Search() {
    const [search , setSeatch] =useState("");
    const [ showClear , setShowClear] =useState(false);

const router =useRouter();

function updateQueryParams(newParams) {
  const currentParams = new URLSearchParams(window.location.search);

  Object.entries(newParams).forEach(([key, value]) => {
    if (value !== null && value !== '') {
      currentParams.set(key, value);
    } else {
      currentParams.delete(key);
    }
  });

  router.push(`/products?${currentParams.toString()}`);
}


  function handleSearch() {
     updateQueryParams({
      search,
    });
    setShowClear(true);
  }
  function handleClear(){
        updateQueryParams({
      search: null,
    });
    setShowClear(false);
  }

  return (
             <div className={`header-section-search `}>
                                          <input type="text" onChange={(e)=>setSeatch(e.target.value.toLocaleLowerCase())} value={search} className='header-section-search-input ' placeholder='Search For Products...' />
                                          <FaSearch onClick={handleSearch} className='header-section-search-icon'/>
                                          {showClear &&
                                                                                    <FaX onClick={handleClear} className='header-section-search-icon'/>

                                          }
  
              </div>
  )
}

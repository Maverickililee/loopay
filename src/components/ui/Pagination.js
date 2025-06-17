"use client";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useRouter, usePathname } from "next/navigation";

export default function Pagination({ count, url }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const pathSegments = pathname.split("/");
  let pageIndex = pathSegments.findIndex((seg) => !isNaN(parseInt(seg))); 
  const currentPage = pageIndex !== -1 ? parseInt(pathSegments[pageIndex]) : 0;

  function handlePageClick({ selected }) {
    if (selected === currentPage) return; 
    setLoading(true);

    if (pageIndex !== -1) {
      pathSegments[pageIndex] = selected.toString();
    } else {
      pathSegments.push(selected.toString());
    }

    router.push(pathSegments.join("/"));
  }

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return (
    <div className="relative Container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={Math.ceil(count / 30)}
        previousLabel="Prev"
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        pageClassName={`w-12 h-10 hover:scale-105 duration-200 bg-slate-200 bg-opacity-35 border  sx:w-8 sx:h-10 sx:text-[16px] font-black hover:bg-color_3 hover:text-color_6 transition-[var(--transition)] rounded-lg border text-[14px] flex justify-center items-center ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        pageLinkClassName="w-12 h-10 bg-slate-200 hover:scale-105 duration-200 bg-opacity-35 border  sx:w-8 sx:h-10 sx:text-[16px] font-black hover:bg-color_3 hover:text-color_6 transition-[var(--transition)] rounded-lg border text-[14px] flex justify-center items-center"
        previousClassName={`w-12 h-10 bg-slate-200 hover:scale-105 duration-200 bg-opacity-35 border  sx:w-8 sx:h-10 sx:text-[16px] font-black hover:bg-color_3 hover:text-color_6 transition-[var(--transition)] rounded-lg border text-[14px] flex justify-center items-center ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        nextClassName={`w-12 h-10 bg-slate-200 hover:scale-105 duration-200 bg-opacity-35 border  sx:w-8 sx:h-10 sx:text-[16px] font-black hover:bg-color_3 hover:text-color_6 transition-[var(--transition)] rounded-lg border text-[14px] flex justify-center items-center ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex gap-3 mt-5 w-full justify-start tablet:flex-wrap"
        activeClassName="  sx:w-7 sx:h-9 sx:text-[14px] text-mainBlue w-10 h-10"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}
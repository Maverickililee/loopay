"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearchLocation } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import Input from "../Global/Input/Input";
import { hideLoading, showLoading } from "@/store/slices/loadingSlice";
import { showAlert } from "@/store/slices/alertSlice";

const TreeNode = ({ node, type, level = 0, index = 1 }) => {
  const [expanded, setExpanded] = useState(false);
  const isLeaf = !node.children || node.children.length === 0;

  return (
    <div className="w-full mt-1">
      <div
        className={`relative Blogs__bott__aside__card__top__link ${
          !isLeaf ? "cursor-pointer" : ""
        } ${level > 0 ? "tree-branch" : ""}`}
        style={{ paddingRight: `${level * 2 + 16}px` }}
        onClick={() => !isLeaf && setExpanded(!expanded)}
      >
        <span className="Blogs__bott__aside__card__top__link__index">
          {level === 0 ? index + 2 : "-"}
        </span>

        {isLeaf ? (
          <Link href={`/products/0/${node.id}`} className="flex-1 text-sm">
            {node.title}
          </Link>
        ) : (
          <span className="flex-1 text-sm">{node.title}</span>
        )}

        {!isLeaf && (
          <span className="ml-2">
            {expanded ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        )}
      </div>

      {expanded && node.children?.length > 0 && (
        <div className="tree-children mt-1">
          {node.children.map((child, idx) => (
            <TreeNode
              key={child.id}
              node={child}
              type={type}
              level={level + 1}
              index={idx + 3}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function AsideTouristPlaces({ data, type, page }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    const searchValue = document.getElementById("search").value;
    if (searchValue.length !== 0) {
      dispatch(showLoading());
      setTimeout(() => {
        router.push(
          `/products/0?search=${searchValue}`
        );
        dispatch(hideLoading());
      }, 500);
    } else {
      dispatch(
        showAlert({
          color: "#ffeaea",
          message: "مقداری وارد نشده",
        })
      );
    }

    document.getElementById("search").value = "";
  };

  return (
    <>
      {/* {open && (
        <aside className="Blogs__bott__aside !hidden xx:!block">
          <div className="Blogs__bott__aside__card">
            <h3 className="Blogs__bott__aside__title">
              {type === 4 ? "دسته بندی اقامتگاه ها" : "دسته بندی آگهی ها"}
            </h3>
            <div className="Blogs__bott__aside__card__top">
              <Link
                href={`/${
                  type === 1
                    ? "TouristPlaces"
                    : type === 2
                    ? "ExplorePlaces"
                    : type === 4
                    ? "Residences"
                    : "HouseAds"
                }/0`}
                className="Blogs__bott__aside__card__top__link"
              >
                <span className="Blogs__bott__aside__card__top__link__index">
                  1
                </span>
                {type === 4 ? "همه اقامتگاه ها" : "همه آگهی ها"}
              </Link>
              {data?.length > 0 ? (
                data
                  .filter((item) => item.parent === null)
                  .map((item) => (
                    <TreeNode key={item.id} node={item} type={type} level={0} />
                  ))
              ) : (
                <div className="w-full p-2 rounded-lg font-medium bg-color_3 text-color_6 text-[12px]">
                  دسته بندی وجود ندارد
                </div>
              )}
            </div>
          </div>
        </aside>
      )} */}

      <button
        onClick={() => setOpen((state) => !state)}
        className="hidden xx:flex justify-center items-center btn"
      >
        فیلتر <IoFilterSharp />
      </button>

      <aside className="Blogs__bott__aside xx:!hidden">
        <div className="relative w-full">
          <Input label="جستجو" class="w-full" id="search" />
          <button
            className="absolute top-[3px] left-0.5 p-[0.5rem] rounded-lg bg-color_3 text-color_6 duration-200"
            onClick={handleSearch}
          >
            <FaSearchLocation className="text-[18px]" />
          </button>
        </div>

        <div className="Blogs__bott__aside__card">
          <h3 className="Blogs__bott__aside__title">
            {type === 4 ? "دسته بندی اقامتگاه ها" : "دسته بندی آگهی ها"}
          </h3>
          {page !== 2 ? (
            <div className="Blogs__bott__aside__card__top mt-4">
              <Link
                href={`/products/0`}
                className="Blogs__bott__aside__card__top__link text-sm"
              >
                <span className="Blogs__bott__aside__card__top__link__index">
                  1
                </span>{" "}
                {type === 4 ? "همه اقامتگاه ها" : "همه آگهی ها"}
              </Link>
              {data?.length > 0 ? (
                data.map((item, idx) => (
                  <TreeNode
                    key={item.id}
                    node={item}
                    type={type}
                    level={0}
                    index={idx}
                  />
                ))
              ) : (
                <div className="w-full p-2 rounded-lg font-medium bg-color_3 text-color_6 text-[12px]">
                  دسته بندی وجود ندارد
                </div>
              )}
            </div>
          ) : (
            <div className="Blogs__bott__aside__card__top">
              <button
                className="btn !text-[14px]"
                onClick={() => router.back()}
              >
                بازگشت <IoMdArrowRoundBack />
              </button>
              {data?.length > 0 ? (
                data.map((item, idx) => (
                  <TreeNode
                    key={item.id}
                    node={item}
                    type={type}
                    level={0}
                    index={idx}
                  />
                ))
              ) : (
                <div className="w-full p-2 rounded-lg font-medium bg-color_3 text-color_6 text-[12px]">
                  فیلدی برای این دسته بندی وجود ندارد
                </div>
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

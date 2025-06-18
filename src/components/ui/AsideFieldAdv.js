"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { FaSearchLocation } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Input from "../Global/Input/Input";
import SelectBoxCustom from "../Global/SelectBoxCustom/SelectBoxCustom";
import { hideLoading, showLoading } from "@/store/slices/loadingSlice";

export default function AsideFieldAdv({
  data = [],
  id,
  type,
  fieldsValue,
  setFieldsValue,
  searchValue,
  setSearchValue,
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  // تغییر فیلد
  const onFieldChange = useCallback(
    (fieldId, newValue) => {
      setFieldsValue((prev) => ({
        ...prev,
        [fieldId]: newValue,
      }));
    },
    [setFieldsValue]
  );

  // بازگشت به صفحه قبل
  const handleBack = () => {
    router.back();
  };

  // هندلر کلیک جستجو
  const handleSearchClick = () => {
    if (!searchValue.trim()) {
      dispatch(showAlert({ color: "#ffeaea", message: "مقداری وارد نشده" }));
      return;
    }
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(hideLoading());
    }, 500);
  };

  // رندر فیلد ها
  const renderField = (field) => {
    const selectedValue =
      fieldsValue[field.id] ?? (field.field_type === 3 ? [] : null);

    switch (field.field_type) {
      case 2: {
        const items = (field.items || []).map((item) =>
          typeof item === "string" ? { name: item, value: item } : item
        );
        return (
          <SelectBoxCustom
            key={field.id}
            label={field.title}
            list={items}
            value={items.find((i) => i.value === selectedValue) || null}
            onChange={(opt) => onFieldChange(field.id, opt?.value ?? null)}
            isMulti={false}
            className="my-2"
            nameLable="name"
            valueKey="value"
          />
        );
      }

      case 3: {
        const items = (field.items || []).map((item) =>
          typeof item === "string" ? { name: item, value: item } : item
        );

        if (items.length <= 3) {
          return (
            <div
              key={field.id}
              className="px-3 py-2 border rounded-lg my-2 flex items-center w-full flex-wrap  gap-2"
            >
              <label className="font-semibold text-sm text-gray-700">
                {field.title}:
              </label>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => {
                  const isChecked =
                    Array.isArray(selectedValue) &&
                    selectedValue.includes(item.value);
                  return (
                    <label
                      key={item.value}
                      className={`flex items-center gap-2 px-3 py-1 rounded-md border cursor-pointer select-none
                      ${
                        isChecked
                          ? "bg-color_2/50 border-color_1 font-semibold"
                          : "bg-gray-50 hover:bg-gray-200 border-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isChecked}
                        onChange={() => {
                          let newVals = Array.isArray(selectedValue)
                            ? [...selectedValue]
                            : [];
                          if (newVals.includes(item.value)) {
                            newVals = newVals.filter((v) => v !== item.value);
                          } else {
                            newVals.push(item.value);
                          }
                          onFieldChange(field.id, newVals);
                        }}
                      />
                      <span className="text-sm text-gray-800">{item.name}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        }

        return (
          <SelectBoxCustom
            key={field.id}
            label={field.title}
            list={items}
            value={items.filter((item) =>
              Array.isArray(selectedValue)
                ? selectedValue.includes(item.value)
                : false
            )}
            onChange={(selectedOptions) =>
              onFieldChange(
                field.id,
                selectedOptions ? selectedOptions.map((opt) => opt.value) : []
              )
            }
            isMulti={true}
            className="my-2"
            nameLable="name"
            valueKey="value"
          />
        );
      }

      case 4: {
        const items = (field.items || []).map((item) =>
          typeof item === "string" ? { name: item, value: item } : item
        );

        if (items.length <= 3) {
          return (
            <div
              key={field.id}
              className="px-3 py-2 border rounded-lg my-2 flex items-center w-full flex-wrap gap-2"
            >
              <label className="font-semibold text-sm text-gray-700">
                {field.title}:
              </label>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => {
                  const isChecked = selectedValue === item.value;
                  return (
                    <label
                      key={item.value}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full border cursor-pointer select-none
      ${
        isChecked
          ? "bg-color_2/50 border-color_1 font-semibold"
          : "bg-gray-50 hover:bg-gray-200 border-gray-200"
      }`}
                    >
                      {/* دایره‌ی رادیو */}
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
        ${isChecked ? "border-color_1" : "border-gray-400"}`}
                      >
                        {isChecked && (
                          <span className="w-2 h-2 rounded-full bg-color_1" />
                        )}
                      </span>

                      <input
                        type="radio"
                        name={`radio-${field.id}`}
                        className="hidden"
                        checked={isChecked}
                        onChange={() =>
                          onFieldChange(field.id, isChecked ? null : item.value)
                        }
                      />
                      <span className="text-sm text-gray-800">{item.name}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        }

        return (
          <SelectBoxCustom
            key={field.id}
            label={field.title}
            list={items}
            value={items.find((i) => i.value === selectedValue) || null}
            onChange={(opt) => onFieldChange(field.id, opt?.value ?? null)}
            isMulti={false}
            className="my-2"
            nameLable="name"
            valueKey="value"
          />
        );
      }

      default:
        return null;
    }
  };

  const currentPath =`/products/0/${id}`;

  return (
    <>
      {open && (
        <aside className="Blogs__bott__aside !hidden xx:!block">
          <div className="Blogs__bott__aside__card">
            <h3 className="Blogs__bott__aside__title">دسته بندی آگهی ها</h3>
            <div className="Blogs__bott__aside__card__top">
              <Link href={`${currentPath}`}>
                <a className="Blogs__bott__aside__card__top__link">
                  <span className="Blogs__bott__aside__card__top__link__index">
                    1
                  </span>
                  همه آگهی ها
                </a>
              </Link>

              {data.filter((item) => item.parent === null).length === 0 && (
                <div className="w-full p-2 rounded-lg font-medium bg-color_3 text-color_6 text-[12px]">
                  دسته بندی وجود ندارد
                </div>
              )}
            </div>
          </div>
        </aside>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="hidden xx:flex justify-center items-center btn"
        type="button"
      >
        فیلتر <IoFilterSharp />
      </button>

      <aside className="Blogs__bott__aside xx:!hidden">
        <div className="relative w-full">
          <Input
            label="جستجو"
            class="w-full"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="absolute top-[3px] left-0.5 p-[0.5rem] rounded-lg bg-color_3 text-color_6"
            onClick={handleSearchClick}
            type="button"
          >
            <FaSearchLocation className="text-[18px]" />
          </button>
        </div>

        <div className="Blogs__bott__aside__card">
          <h3 className="Blogs__bott__aside__title">فیلترهای پیشرفته</h3>
          <button
            onClick={handleBack}
            className="flex items-center gap-1 my-4 btn"
            type="button"
          >
            بازگشت
            <IoMdArrowRoundBack />
          </button>
          {!data ? (
            <div className="flex justify-center items-center gap-2 text-center w-full">
              در حال بارگذاری...{" "}
              <AiOutlineLoading3Quarters className="animted" />
            </div>
          ) : data.length === 0 ? (
            <div className="w-full p-2 rounded-lg font-medium bg-color_3 text-color_6 text-[12px] text-center">
              فیلد فیلتری یافت نشد
            </div>
          ) : (
            data.map((field) => (
              <React.Fragment key={field.id}>
                {renderField(field)}
              </React.Fragment>
            ))
          )}
        </div>
      </aside>
    </>
  );
}

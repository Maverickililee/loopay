"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { Control } from "./CustomControl.tsx";
import { useTranslation } from "react-i18next";

export default function SelectBoxCustom({
  listIsFun,
  onKeyDownF,
  createAble,
  list,
  label,
  nameLable = "label",
  onChange,
  isDisabled,
  seclabel,
  className,
  valueKey = "value",
  isMulti,
  mode,
  value, // برای حالت edit
  defaultValue, // 🆕 برای حالت add
}) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      minHeight: "40px",
      height: "40px",
      boxShadow: state.isFocused ? null : null,
      borderRadius: "7px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "30px",
    }),
    option: (styles) => ({
      ...styles,
    }),
  };

  const [inputValue, setInputValue] = useState("");
  const [createdOptions, setCreatedOptions] = useState([]);
  const [internalValue, setInternalValue] = useState(null);
  const { t } = useTranslation()

  // 🟢 فقط یک بار مقدار اولیه ست بشه
  useEffect(() => {
    if (!value && defaultValue) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, value]);

  const createOption = (label) => ({
    label,
    value: label,
  });

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    if (event.key === "Tab") {
      const newOption = createOption(inputValue);
      const newOptions = [...createdOptions, newOption];
      setCreatedOptions(newOptions);
      setInputValue("");
      event.preventDefault();
      onKeyDownF?.(newOptions);
    }
  };
  

  if (createAble) {
    return (
      <CreatableSelect
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        options={createdOptions}
        onChange={(selected) => {
          setCreatedOptions(selected);
          onKeyDownF?.(selected);
        }}
        onInputChange={(val) => setInputValue(val)}
        onKeyDown={handleKeyDown}
        styles={customStyles}
        className="xs:w-full  border-none"
        components={{ Control }}
        placeholder={t(label)}
        value={createdOptions}
      />
    );
  }

  const finalValue = value || internalValue || null;
  
  return (
    <Select
      isDisabled={isDisabled}
      isMulti={isMulti}
      styles={customStyles}
      getOptionLabel={(option) =>
        seclabel
          ? `${option[nameLable]} - ${option[seclabel]}`
          : option[nameLable]
      }
      getOptionValue={(option) => option[valueKey]}
      options={listIsFun ? listIsFun() : list}
      value={finalValue}
      components={{ Control }}
      className={`w-full border-none ${className || ""}`}
      placeholder={t(label)}
      onChange={(e) => {
        setInternalValue(e); // مقدار جدید ذخیره بشه
        onChange?.(e);
      }}
      menuPosition="auto"
    />
  );
}

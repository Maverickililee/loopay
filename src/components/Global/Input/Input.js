"use client";
const   Input = (props) => {
  function separate(Number) {
    Number += "";
    Number = Number.replace(",", "");
    let x = Number.split(".");
    let y = x[0];
    let z = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
    return y + z;
  }

const stripHtmlTags = (str) => {
  return str && str.replace(/<\/?[^>]+(>|$)/g, "");
};




  return (
    <div
      className={`did-floating-label-content sm:w-full  ${props.class} ${props.classB}`}
    >
      {props.textAria ? (
        <textarea
          disabled={props.mode === "view"}
          defaultValue={stripHtmlTags(props.value)} // مقدار بدون تگ‌های HTML
          id={props.id}
          className="did-floating-input"
          placeholder=" "
          style={props.style}
        />
      ) : (
        <>
          {props.price && (
            <input
              disabled={props.mode == "view" || props.disable ? true : false}
              defaultValue={props.value}
              className={`did-floating-input ${props.ltr && "ltrImportant"} ${
                (props.maxNumber || props.minNumber) && "numberShow"
              }`}
              type="text"
              placeholder=" "
              style={props.style}
              onChange={(e) => {
                e.target.value = separate(e.target.value.replace(/\,/g, ""));
                document.getElementById(props.id).value = parseInt(
                  e.target.value.replace(/\,/g, "")
                );
              }}
              onKeyDown={(e) => props.onKeyDown && props.onKeyDown(e)}
              max={props.maxNumber}
              min={props.minNumber}
            />
          )}
          <input
            disabled={props.mode == "view" || props.disable ? true : false}
            defaultValue={props.value}
            id={props.id}
            className={`${
              props.price && "hiddenimportant"
            } did-floating-input ${props.ltr && "ltrImportant"} ${
              (props.maxNumber || props.minNumber) && "numberShow"
            }`}
            type={props.type}
            placeholder=" "
            style={props.style}
            onChange={(e) => props.onChange && props.onChange(e)}
            onKeyDown={(e) => props.onKeyDown && props.onKeyDown(e)}
            max={props.maxNumber}
            min={props.minNumber}
          />
        </>
      )}

      <label
        style={props.styleLabel}
        className="did-floating-label"
        htmlFor="inputField"
      >
        {props.label}
      </label>
    </div>
  );
};
export default Input;

"use client"
import Sort from "@/components/ui/Sort";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../../../assets/pages/products.css";
import { FaCartPlus } from "react-icons/fa6";
import axiosServerSide from "@/Api/axiosServerSide";
import Pagination from "@/components/ui/Pagination";
import AsideFieldAdv from "@/components/ui/AsideFieldAdv";

async function getData(
  page = 0,
  category = "",
  searches = [],
  fieldfilter = []
) {
  try {
    const response = await axiosServerSide.post(`adv/TourismSiteListClient/`, {
      sort: "id",
      page: +page,
      pageSize: 30,
      is_deleted: false,
      searches,
      filters: [],
      category,
      fieldfilter,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}

export default async function AdvPage() {
  const params = useParams();
  const id = params?.id || "";
  const title = params?.title || "";

  const [searchValue, setSearchValue] = useState("");
  const [fieldsValue, setFieldsValue] = useState({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const searches = searchValue.trim()
    ? [{ column: "title", value: searchValue.trim() }]
    : [];

  const fieldfilter = Object.entries(fieldsValue).map(([id, value]) => ({
    id: +id,
    fieldType: 3,
    value,
  }));

  useEffect(() => {
    if (!id || !title) return;
    setLoading(true);
    getData(id, title, searches, fieldfilter)
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [id, title, searchValue, fieldsValue]);

  return (
    <main className="products-list ">
      <div className="container products-list-container ">
        <span className="products-list-root ">Home / All Products</span>

        <section className="products-list-main ">
          <AsideFieldAdv
            data={data?.fields || []}
            id={id}
            type={2}
            fieldsValue={fieldsValue}
            setFieldsValue={setFieldsValue}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="products-list-content">
            <Sort />
            <div className="products-list-card-holder">
              {data?.data?.length > 0 ? (
                data?.data?.map((i) => (
                  <div key={i.id} className="products-list-card ">
                    <div className="products-list-card-img-holder">
                      <Image
                        className="products-list-card-img"
                        width={2000}
                        height={2000}
                        alt="loading..."
                        src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${i.photo}`}
                      />
                    </div>

                    <h4 className="products-list-card-code">
                      Code: #{i?.code}
                    </h4>
                    <div className="products-list-card-info">
                      <h3 className="products-list-card-title">{i?.title}</h3>
                      <span className="products-list-card-price">
                        {i?.price} $
                      </span>
                    </div>
                    <span className="products-list-card-label">Details:</span>
                    <p className="products-list-card-description ">
                      {i?.content_value}
                    </p>
                    <span className="products-list-card-label">
                      Available Colors:
                    </span>
                    <div className="products-list-card-colors-holder">
                      {i.colors?.slice(0, 6).map((j, index) => (
                        <div
                          key={index}
                          style={{ backgroundColor: j }}
                          className="products-list-card-colors  "
                        ></div>
                      ))}
                    </div>
                    <span className="products-list-card-label">
                      Available Sizes:
                    </span>
                    <div className="products-list-card-size-holder">
                      {i.sizes?.slice(0, 6).map((j, index) => (
                        <div key={index} className="products-list-card-size ">
                          {j}
                        </div>
                      ))}
                    </div>
                    <div className="products-list-card-btn-holder">
                      <button className="products-list-card-cart">
                        <FaCartPlus className="products-list-card-cart-icon" />
                      </button>
                      <Link
                        className="products-list-card-btn"
                        href={`/product/${i.id}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-mainBlue p-3 w-full col-span-2 rounded-[5px] text-white ">
                  No ADV Is Availabe!!
                </div>
              )}
            </div>
            <div className="flex flex-row-reverse !justify-end items-center">
              <Pagination count={data?.count} url={"products"} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

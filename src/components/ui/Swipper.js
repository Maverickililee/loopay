"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const Swipper = ({
  slide,
  spaceBetween,
  breake,
  pagination,
  time,
  navigation,
  loop,
  effect,
  className,
  children,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation={navigation}
      spaceBetween={spaceBetween}
      slidesPerView={slide}
      breakpoints={breake}
      pagination={pagination}
      autoplay={{ delay: time, disableOnInteraction: false }}
      loop={loop}
      effect={effect}
      className={`${className} mySwiper`}
    >
      {children?.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../style";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ServicesH = () => {
  const [over, setOver] = useState(false);

  return (
    <div
      className={`flex items-center justify-center py-[2rem] flex-col sm:h-[650px] h-[500px] ${styles.greyBg} `}
    >
      <h1 className=" text-xl mb-[1rem] font-bold  ">Our Service</h1>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[95%] rounded-xl lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div
              className={`flex flex-col gap-7  mb-20 group   shadow-lg text-white rounded-xl px-6 py-8 h-[550px] w-[315px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer`}
              onClick={() => setOver(!over)}
            >
              <div
                className="absolute inset-0 rounded-xl  bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className={`absolute inset-0 rounded-xl bg-black opacity-10 group-hover:opacity-50`} />

              <div className="relative  flex flex-col gap-3">
                <item.icon className="text-[lime] group-hover:text-[lime] w-[32px] h-[32px]" />
                <h1 className="text-2xl font-bold lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px] text-xl   ">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-[lime] group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesH;

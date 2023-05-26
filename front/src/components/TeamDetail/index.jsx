import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function TeamDetail() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="team-card-child">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
              alt=""
            />
            <p>Ethan Welch</p>
            <div className="committed-parent">
              <div className="div"></div>
              <div className="committed">UX Designer</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-card-child">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
              alt=""
            />
            <p>Ethan Welch</p>
            <div className="committed-parent">
              <div className="div"></div>
              <div className="committed">UX Designer</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-card-child">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
              alt=""
            />
            <p>Ethan Welch</p>
            <div className="committed-parent">
              <div className="div"></div>
              <div className="committed">UX Designer</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-card-child">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
              alt=""
            />
            <p>Ethan Welch</p>
            <div className="committed-parent">
              <div className="div"></div>
              <div className="committed">UX Designer</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-card-child">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
              alt=""
            />
            <p>Ethan Welch</p>
            <div className="committed-parent">
              <div className="div"></div>
              <div className="committed">UX Designer</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

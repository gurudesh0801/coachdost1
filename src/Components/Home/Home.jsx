import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <div className="texts">
          <h1>
            <span className="coach">COACH</span>
            <span className="dost">DOST</span>
          </h1>
          <p>
            Transform Your Life With Personalised Coaching And Valuable Guidance
          </p>
        </div>
      </div>
      <div className="container">
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000, // Set autoplay delay to 2 seconds
            disableOnInteraction: false, // Continues autoplay after interactions
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="Slide 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="Slide 5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="Slide 6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="Slide 7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="Slide 8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              alt="Slide 9"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Home;

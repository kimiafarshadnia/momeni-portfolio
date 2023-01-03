// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Pagination, Navigation,EffectFade  } from "swiper";


const Slider = () => {
    return ( 
        <section className='my-4 flex items-center justify-center'>
            <div className="w-full">
                <div className='h-64 bg-violet-200 flex justify-center items-center'>
                    <Swiper
                   effect="fade"
                        pagination={{
                        type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, EffectFade]}
                        className="mySwiper bg-violet-100"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
     );
}
 
export default Slider;
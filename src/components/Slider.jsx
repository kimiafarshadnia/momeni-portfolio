// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow } from "swiper";


const Slider = () => {
    return ( 
        <section className='my-4 flex flex-col items-center justify-center p-4 sm:p-3 md:p-0'>
            <h1 className="text-center text-2xl font-semibold mb-4 capitalize">dream home</h1>
            <p className="text-center mb-8 capitalize">the last project</p>
            <div className="w-full md:w-4/5">
                <div className='flex justify-center items-center'>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                        className="mySwiper"
                    >
                        <SwiperSlide  className="flex justify-center">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center">
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center">
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                       
                    </Swiper>
                </div>
                
            </div>
        </section>
     );
}
 
export default Slider;
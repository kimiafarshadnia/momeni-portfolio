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
        <section className='flex flex-col items-center justify-center pb-8'>
            <div className="  text-center pt-8">
                <h1 className=" mb-4 capitalize">dream home</h1>
                <p className="text-2xl font-semibold mb-8 capitalize">the last project</p>
            </div>
            <div className="w-full md:w-4/5 pb-12">
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
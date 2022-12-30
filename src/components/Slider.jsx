import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
    return ( 
        <section className='mb-4'>
            <div className="w-full">
                <div className='h-64 bg-violet-200 flex justify-center items-center'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </section>
     );
}
 
export default Slider;
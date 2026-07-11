// first want to run this in terminal ----> npm install swiper
import './movieSwiper.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiper({ slides,slideChange }) {

    console.log(slides);

    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // spaceBetween
            spaceBetween={0}
           
            slidesPerView={3}
            // slidesPerView={"auto"}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}

            // coverflowEffect={{
            //     rotate: 50,
            //     stretch: 0,
            //     depth: 100,
            //     modifier: 1,
            //     slideShadows: true,
            // }}
            coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 70,
                modifier: 2,
                scale: 0.9,
                slideShadows: false,
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            className="movieSwiper"
        >
            {
                slides.map(slide => (
                    <SwiperSlide key={slide._id}>
                        <img src={slide.previewImg} alt="Preview Image" onClick={()=>slideChange(slide._id)} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default MovieSwiper;

import imagen1 from "../assets/nosotros/nimg_1.png";
import imagen2 from "../assets/nosotros/nimg_2.png";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Autoplay, Pagination, Navigation } from 'swiper';

const Nosotros = () => {
    return (
        <div className="font-Roboto ">
            {/* <div className="relative mb-[12%]  "> 
                <div className="absolute z-50">
                    <img src={imagen1} alt="" />
                </div>
                <div className="bg-[#a9c7ca] translate-y-[16%]   ">
                    <img src={imagen2} alt="" />
                </div>
            </div> */}
            <div className="bg-[#a9c7ca]">
                    <img src={imagen2} alt="" />
                </div>
            <div className="relative w-full h-40 flex items-center justify-center bg-[#ecf7f9]">
                <p className="text-[5vw] text-center  lg:text-4xl lg:px-64 ">Somos una agencia de marketing y publicidad que tiene como objetivo principal crear e innovar en los diferentes aspectos visuales de tu empresa</p>
            </div>
            <div className="my-20 md:my-40 pl-[20vw]  ">
                <div className="mb-6 " >
                    <h1 className="text-[7vw] md:text-5xl text-white">Te ayudamos con</h1>
                </div>
                <div className="text-[5vw] md:text-2xl backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] rounded-l-2xl  py-20 ml-14 pl-10" data-aos="fade-right">
                    <p>Definición y creación de la identidad de tu empresa</p>
                    <p>Mantenimiento y creación de sitios web y apps</p>
                </div>
            </div>

            {/* <div className="relative w-full h-40 flex items-center justify-center bg-[#ecf7f9]">
                <p className="text-[7vw] md:text-5xl">Carrucel 2</p>
            </div>
            <div className="grid grid-cols-1 my-20 md:my-48 ">
                <div className="w-full md:w-2/3 justify-self-center">
                    <Swiper
                    effect={'coverflow'}
                    slidesPerView={2}
                    spaceBetween={50}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 200,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}     
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow,Autoplay, Pagination, Navigation]}
                    className="mySwiper swiper_container md:h-[15rem]"
                >
                    <SwiperSlide className="w-60 h-auto bg-[#a9c7ca] rounded-3xl  "><img src={imagen2} alt="slide_image" className="rounded-3xl"/></SwiperSlide>
                    <SwiperSlide className="w-60 h-auto bg-[#a9c7ca] rounded-3xl "><img src={imagen2} alt="slide_image"className="rounded-3xl"/></SwiperSlide>
                    <SwiperSlide className="w-60 h-auto bg-[#a9c7ca] rounded-3xl "><img src={imagen2} alt="slide_image" className="rounded-3xl"/></SwiperSlide>
                    <SwiperSlide className="w-60 h-auto bg-[#a9c7ca] rounded-3xl "><img src={imagen2} alt="slide_image" className="rounded-3xl"/></SwiperSlide>
                </Swiper>
                </div>
            </div> */}
        </div>
    )
}
export default Nosotros
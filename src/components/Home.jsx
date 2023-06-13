import { Outlet, Link } from "react-router-dom" ;

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper';

import imagenInicioDisenio from "../assets/home/img_1.webp";
import imagenInicioProg from "../assets/home/img_2.webp";

import gif1 from "../assets/gif/gif_social_media_final.gif";
import gif2 from "../assets/gif/gif_logo_final.gif";
import gif3 from "../assets/gif/gif_mockup_final.gif";

import gif2_1 from "../assets/gif/gif_manual_web_final.gif";
import gif2_2 from "../assets/gif/gif_pag_web_final.gif";
import gif2_3 from "../assets/gif/gif_apps_final.gif";

import caroucel1 from "../assets/home/caroucel_1.webp";
import caroucel2 from "../assets/home/caroucel_2.webp";
import caroucel3 from "../assets/home/caroucel_3.webp";


// import gif2 from "../assets/gif"
const Home = () => {

    return(
        <div className="font-Roboto ">
            <div id="carrucel" >
                <div className="w-full">
                <Swiper
                    effect={'coverflow'}
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    coverflowEffect={{
                    rotate: 100,
                    stretch: 60,
                    depth: 100,
                    modifier: 2.5,
                    }}     
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={caroucel1} alt="slide_image" className="h-[48vw] w-full "/></SwiperSlide>
                    <SwiperSlide><img src={caroucel2} alt="slide_image" className="h-[48vw] w-full"/></SwiperSlide>
                    <SwiperSlide><img src={caroucel3} alt="slide_image" className="h-[48vw] w-full"/></SwiperSlide>

                </Swiper>
                </div>
            </div>
            <div id="Disenio" className="place-self-center">
                <div>
                    <img src={imagenInicioDisenio} alt="" />
                </div>
                <div className="shadow-2xl shadow-black bg-[#ecf7f9] text-center">
                    <div className="w-full h-40 flex items-center justify-center">
                        <h1 className="text-[40px] md:text-5xl">DISEÑO</h1>
                    </div>
                    <div className="grid grid-cols-3 ">
                        {/* <div>
                            <p>__________________________________ ______ __</p>
                        </div>
                        <div>
                            <p>__________________________________ ______ __</p>
                        </div>
                        <div>
                            <p>__________________________________ ______ __</p>
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 text-center mb-16">
                    <Link className="justify-self-center" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">SOCIAL MEDIA</h2>
                        <img src={gif1} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                    <Link className="justify-self-center" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">LOGOS</h2>
                        <img src={gif2} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                    <Link className="justify-self-center" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">MOCKUP</h2>
                        <img src={gif3} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                </div>
            </div>
            <div id="Programacion" className="my-[-18%]">
                <div>
                    <img src={imagenInicioProg} alt="" className=""/>
                </div>
                <div className="shadow-2xl shadow-black bg-[#ecf7f9] text-center z-10">
                    <div className="w-full h-40 flex items-center justify-center">
                        <h1 className="text-[40px] md:text-5xl">PROGRAMACIÓN</h1>
                    </div>
                    <div className="grid grid-cols-3 ">
                        {/* <div>
                            <p>__________________________________ ______ __</p>
                        </div>
                        <div>
                            <p>__________________________________ ______ __</p>
                        </div>
                        <div>
                            <p>__________________________________ ______ __</p>
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 place-content-center text-center mb-80">
                    <Link className="justify-self-center" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl  md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">MANUAL WEB</h2>
                        <img src={gif2_1} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                    <Link className="justify-self-center" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">PAGINAS WEB</h2>
                        <img src={gif2_2} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                    <Link className="justify-self-center" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">APPS</h2>
                        <img src={gif2_3} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                </div>
            </div>
            
                
            <Outlet></Outlet>
        </div>
        
    )
}
export default Home
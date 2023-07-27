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
                <div id='disenioimg' className="w-full  bg-fixed bg-no-repeat  bg-[length:auto_100%] xl:bg-[length:100%_100%]">
                    {/* <img src={imagenInicioDisenio} alt="" /> */}
                    <div className="py-40 md:py-60 pl-[20vw] grid grid-cols-1 xl:grid-cols-3  ">
                        <div className="col-span-1 ">
                            
                        </div>
                        <div className="col-span-2 text-[5vw] md:text-2xl backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] rounded-l-2xl  py-20 ml-14 pl-10" data-aos="fade-right">
                            <p>Nuestra agencia de publicidad te permite acercarte más a 
                            tus clientes innovando y avivando tu marca e imagen 
                            corporativa para destacar tus diferentes servicios</p>
                        </div>
                    </div>
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
                <div className="grid place-items-center items-start grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-2 md:px-16 lg:px-32 xl:px-16 2xl:px-32 text-center mb-16 mt-10 xl:mt-0">
                    <Link className="" to="/servicios">
                        <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col w-80 rounded-2xl xl:rounded-t-none lg:w-96 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                            <h2 className="mt-5 text-primary">SOCIAL MEDIA</h2>
                            <p className="mt-5 text-primary text-justify mx-10">Generamos publicidad adaptable a tu línea gráfica para diferentes redes sociales.</p>
                            <img src={gif1} alt="" className="self-center p-10 h-auto" />
                        </div>
                    </Link>
                    <Link className="" to="/servicios">
                        <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col w-80 rounded-2xl xl:rounded-t-none lg:w-96 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                            <h2 className="mt-5 text-primary">LOGOS</h2>
                            <p className="mt-5 text-primary text-justify mx-10">Hacemos que tu empresa se vea auténtica personalizando su identidad visual.</p>
                            <img src={gif2} alt="" className="self-center p-10 h-auto" />
                        </div>
                    </Link>
                    <Link className="" to="/servicios">
                        <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col w-80 rounded-2xl xl:rounded-t-none lg:w-96 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                            <h2 className="mt-5 text-primary">MOCKUP</h2>
                            <p className="mt-5 text-primary text-justify mx-10">Innovamos los empaques de tus diferentes productos y servicios.</p>
                            <img src={gif3} alt="" className="self-center p-10 h-auto" />
                        </div>
                    </Link>
                </div>
            </div>
            <div id="Programacion" className="my-[-18%]">
                <div id='programacionimg' className="w-full  bg-fixed bg-no-repeat  bg-[length:auto_100%] xl:bg-[length:100%_100%]">
                    {/* <img src={imagenInicioDisenio} alt="" /> */}
                    <div className="py-40 md:py-60 md:pt-[30%]  pr-[20vw] grid grid-cols-1 xl:grid-cols-3  ">
                        <div className="col-span-2 px-10 text-[5vw] md:text-2xl backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] rounded-r-2xl  py-20 mr-14 " data-aos="fade-right">
                            <p>Adéntrate con nosotros a un mundo lleno de posibilidades
                            donde tus clientes estarán al día con novedades y servicios
                            de tu empresa con tan solo un click</p>
                        </div>
                        <div className="col-span-1 ">
                            
                        </div>
                    </div>
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
                <div className="grid place-items-center items-start px-2 md:px-16 lg:px-32 xl:px-16 2xl:px-32 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-content-center text-center mb-80  mt-10 xl:mt-0">
                    <Link className="" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col w-80 rounded-2xl  xl:rounded-t-none lg:w-96 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">TIENDA VIRTUAL</h2>
                        <p className="mt-5 text-primary text-justify mx-10">Ofrece tus productos las 24 horas del día, mostrando los mejores atributos de cada uno de ellos.</p><br />
                        <img src={gif2_1} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                    <Link className="" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col w-80 rounded-2xl xl:rounded-t-none lg:w-96 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">PAGINAS WEB</h2>
                        <p className="mt-5 text-primary text-justify mx-10">Genera confianza en tus usuarios al poner a su disposición tu historia, ubicación y los servicios que ofreces por medio de un sitio web.</p>
                        <img src={gif2_2} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                    <Link className="" to="/servicios">
                    <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col w-80 rounded-2xl xl:rounded-t-none lg:w-96 hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5 text-primary">APPS</h2>
                        <p className="mt-5 text-primary text-justify mx-10">Al crear aplicaciones móviles ofrecerás servicios y experiencias de calidad a tus usuarios.</p><br />
                        <img src={gif2_3} alt="" className="self-center p-10 h-auto" />
                    </div></Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
        
    )
}
export default Home
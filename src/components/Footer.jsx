import icono_anited from "../assets/icono_anited.png";
import icono_facebook from "../assets/icono_facebook.png";
import icono_instagram from "../assets/icono_instagram.png";
import icono_tik_tok from "../assets/icono_tik_tok.png";
import icono_whatsapp from "../assets/icono_whatsapp.png";
import icono_correo from "../assets/icono_correo.png";
import icono_ubicacion from "../assets/icono_ubicacion.png";
import icono_anited_blanco from "../assets/icono_anited_blanco.png";

const Footer =()=>{
    return(
        <footer className="shadow-black drop-shadow-2xl   text-center  bg-primary text-white font-Roboto">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full h-auto md:h-96 z-50 py-10">
                <div className="border-b-2 md:border-b-0 md:border-r-2 my-20 md:my-0 flex flex-col justify-center text-center ">
                    <div className="w-full flex justify-center mb-3">
                        <img src={icono_anited} alt="" className="w-[12vh]  hover:w-[14vh]  transition-all duration-200"/>
                    </div> 
                    <div className="flex justify-center ">
                        <div className="m-3">
                            <a href="https://www.facebook.com/people/Anited/100089420817644/?mibextid=ZbWKwL" target="_blank" className="text-white"><img src={icono_facebook} alt="" className="w-[3vh] hover:w-[4vh]  transition-all duration-200"/></a>
                        </div> 
                        <div className="m-3">
                            <a href="https://www.instagram.com/anited_oficial/" target="_blank" className="text-white"><img src={icono_instagram} alt="" className="w-[3vh] hover:w-[4vh]  transition-all duration-200"/></a>
                        </div> 
                        <div className="m-3">
                            <a href="https://www.tiktok.com/@anited_oficial" target="_blank" className="text-white"><img src={icono_tik_tok} alt="" className="w-[3vh] hover:w-[4vh]  transition-all duration-200"/></a>
                        </div> 
                    </div>
                </div>

                <div className="flex flex-col justify-center text-center mb-20 md:mb-0">
                    <div className="my-6">
                        <h2 className="text-2xl">Contactanos</h2>
                    </div>
                    <div className="flex flex-col w-56 mx-auto ">
                        <div className="">
                            <a href="https://wa.me/593985081264" target="_blank" className="text-white hover:text-[#f5a02b] "><p><img src={icono_whatsapp} alt="" className="float-left" />0980267515</p></a>
                        </div>
                        <div className="">
                            <a href="mailto:anited1966@gmail.com" className="text-white hover:text-[#f5a02b] "><p><img src={icono_correo} alt="" className="float-left"/>anited1966@gmail.com</p></a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center text-center mb-20 md:mb-0">
                    <div className="my-6">
                        <h2 className="text-2xl">Ubicanos</h2>
                    </div>
                    <div className="flex justify-center">
                        <p><img src={icono_ubicacion} alt="" className="float-left "/>Quito - Villaflora <br /> 
                        Oe2-129</p>
                    </div >           
                </div>
            </div>
            <div>
                <div className="flex justify-end">
                    <p><img src={icono_anited_blanco} alt="" className="float-left w-4 h-auto"/>Anited, 2023 - todos los derechos reservados </p>
                </div >
            </div>
            
            
        </footer>
    )
}
export default Footer
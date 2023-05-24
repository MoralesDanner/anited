

import contactos_telefono_anited from "../assets/contactos/contactos_telefono_anited.gif";
import text_contactos from "../assets/contactos/text_contactos.png";


import whatsapp from "../assets/contactos/cimg_2.png";
import messenger from "../assets/contactos/cimg_3.png";
import instagram from "../assets/contactos/cimg_4.png";


const Contactos = () => {
    return (
        <div className="font-Roboto">
            <div id="Disenio" className="place-self-center">
                <div className="flex flex-col bg-[#004c6a7d]">
                    <img src={contactos_telefono_anited} alt="" className="self-center w-[50vw]" />
                    <img src={text_contactos} alt="" className="self-center w-[50vw] translate-y-[-5vw]"/> 
                </div>
                <div className="shadow-2xl shadow-black bg-[#ecf7f9] text-center">
                    <div className="w-full h-40 flex items-center justify-center">
                        <h1 className="text-[40px] md:text-5xl">NUESTRAS REDES</h1>
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
                    <div className=" justify-self-center">
                        <a href="https://wa.me/593985081264" target="_blank" className="hover:text-[#f5a02b] ">
                            <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col mx-5 w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0  hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                                <h2 className="text-3xl py-5 text-primary ">WHATSAPP</h2>
                                <div className="w-full h-9 bg-[#a9c7ca] shadow-xl shadow-[#a9c7ca] text-white flex items-center justify-center">
                                    <p>0985081264</p>
                                </div>
                                <img src={whatsapp} alt="" className="self-center p-10 lg:w-80 lg:h-80"/>
                            </div>
                        </a>
                    </div>
                    <div className="justify-self-center">
                        <a href="https://www.facebook.com/people/Anited/100089420817644/?mibextid=ZbWKwL" target="_blank" className="hover:text-[#f5a02b] ">
                            <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col mx-5 w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 justify-self-center hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                                <h2 className="text-3xl  py-5 text-primary  ">MESSENGER</h2>
                                <div className="w-full h-9 bg-[#a9c7ca] shadow-xl shadow-[#a9c7ca] text-white flex items-center justify-center">
                                    <p>@anited_oficial</p>
                                </div>
                                <img src={messenger} alt="" className="self-center p-10 lg:w-80 lg:h-80" />
                            </div>
                        </a>
                    </div>
                    <div className="justify-self-center ">
                        <a href="https://www.instagram.com/anited_oficial/" target="_blank" className="hover:text-[#f5a02b] ">
                            <div className="backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg flex flex-col mx-5 w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 justify-self-center hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                                <h2 className="text-3xl  py-5 text-primary  ">INSTAGRAM</h2>
                                <div className="w-full h-9 bg-[#a9c7ca] shadow-xl shadow-[#a9c7ca] text-white flex items-center justify-center">
                                    <p>@anited_oficial</p>
                                </div>
                                <img src={instagram} alt="" className="self-center p-10 lg:w-80 lg:h-80" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contactos
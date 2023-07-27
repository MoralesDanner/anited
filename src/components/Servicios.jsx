import sportada_disenio from "../assets/servicios/sportada_disenio.webp";
import sportada_programacion from "../assets/servicios/sportada_programacion.webp";
import {BsCheckCircleFill} from 'react-icons/bs';

const Servicios = () => {
    return (
        <div className="font-Roboto ">
            <div id="serviciosDisenio">
                <div className="w-full">
                    <img src={sportada_disenio} alt="slide_image" />
                </div>
                <div className="relative w-full h-40 flex items-center justify-center bg-[#ecf7f9]">
                    <p className="text-[40px] md:text-5xl">DISEÑO</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-center mb-16 my-16 lg:mx-36 xl:mx-44">
                    <div className=" flex flex-col justify-self-center my-5 py-5">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%] hover:w-[36vw] transition-all duration-500 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl  pb-8">LOGOS</h2>
                            <table className="table-auto m-auto text-left text-[18px] lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Naming</td>
                                    <td>$50</td>
                                    </tr>
                                    <tr>
                                    <td>Logotipo</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Manual de identidad Corporativa</td>
                                    <td>$80</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 py-5">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl pb-8">SOCIAL MEDIA</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>1 Post</td>
                                    <td>$3</td>
                                    </tr>
                                    <tr>
                                    <td>1 Post Animado</td>
                                    <td>$6</td>
                                    </tr>
                                    <tr>
                                    <td>1 Historia</td>
                                    <td>$2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 h-auto lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl  pb-8">DISEÑOS</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Diseño de empaques</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Tarjetas de presentación</td>
                                    <td>$</td>
                                    </tr>
                                    <tr>
                                    <td>Diseño de Flayers</td>
                                    <td>$15</td>
                                    </tr>
                                    <tr>
                                    <td>Mascota Corporativa</td>
                                    <td>$20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl pb-8">ANIMACIONES</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Marca Animada</td>
                                    <td>$50</td>
                                    </tr>
                                    <tr>
                                    <td>Gifs</td>
                                    <td>$4</td>
                                    </tr>
                                    <tr>
                                    <td>Mascota Corporativa</td>
                                    <td>$50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id="serviciosProgramacion">
                <div className="w-full">
                    <img src={sportada_programacion} alt="slide_image" />
                </div>
                <div className="relative w-full h-40 flex items-center justify-center bg-[#ecf7f9]">
                    <p className="text-[40px] md:text-5xl">PROGRAMACIÓN</p>
                </div>
                <div className="grid">
                    <div className="justify-self-center mt-16 p-20 relative w-[75%] h-auto flex items-center justify-center bg-[#ecf7f9] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl ">
                        <p className="text-[18px] md:text-2xl text-justify">Nuestros planes incluyen diseño personalizado, optimización para móviles, 
                        integración con redes sociales, botón de whatsapp, Hosting (Alojamiento web) y dominio, Integración con mapas de Google.                    
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 text-center mb-16 my-16 lg:mx-36 xl:mx-44">
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl  pb-8">LANDING PAGE</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Sección única</td>
                                    <td>$79</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl pb-8">SITIO WEB BÁSICO</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>- Hasta 4 secciones. <br />
                                        - Formulario de contacto.</td>
                                    <td>$119</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-auto lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl  pb-8">SITIO WEB PRO</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>- Hasta 6 secciones. <br /> 
                                        - Formulario personalizado.<br /> 
                                        - Copia de seguridad del sitio web.
                                    </td>
                                    <td>$189</td>
                                    </tr>                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-auto lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl pb-8">AUTO ADMINISTRABLE</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>- Diseño de sitio hasta 10 secciones.<br />
                                        - Actualización de contenidos.<br />
                                        - Formularios personalizados.<br />
                                        - Capacitación y manual de Usuario.<br />
                                        - Copia de seguridad del sitio web.<br />
                                        - Reportes de estadísticas.<br />
                                    </td>
                                    <td>$419</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-auto lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl  pb-8">TIENDA VIRTUAL</h2>
                            <table className="table-auto m-auto text-left text-[18px] lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>- Carga manual de productos. <br />
                                        - Actualización de contenidos.<br />
                                        - Capacitación y manual de Usuario.<br />
                                        - Copia de seguridad del sitio web.<br />
                                        - Reportes de estadísticas.<br />
                                    </td>
                                    <td>$559</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl pb-8">MANUAL WEB</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Manual web</td>
                                    <td>$80</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="serviciosPaquete">
                <div className="relative w-full h-40 flex items-center justify-center bg-[#ecf7f9]">
                    <p className="text-[40px] md:text-5xl">PAQUETES</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-center mb-16 my-16 lg:mx-36 xl:mx-44">
                    <div className=" flex flex-col justify-self-center my-5 py-5">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl  pb-8">IDENTIDAD CORPORATIVA</h2>
                            <table className="table-auto m-auto text-left text-[18px] lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Naming + Logo + Manual</td>
                                    <td>$130</td>
                                    </tr>
                                    <tr>
                                    <td>Naming + Logo</td>
                                    <td>$70</td>
                                    </tr>
                                    <tr>
                                    <td>Logo + Manual</td>
                                    <td>$90</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 py-5">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 h-auto lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl pb-8">SOCIAL MEDIA</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>5 Post</td>
                                    <td>$13</td>
                                    </tr>
                                    <tr>
                                    <td>10 Post + 3 historias</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>5 Historia</td>
                                    <td>$8</td>
                                    </tr>
                                    <tr>
                                    <td>10 Historias + 2 posts</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>30 Post + 4 Historia</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>30 Historia + 4 post</td>
                                    <td>$38</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-white/70  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-80 lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl  pb-8">ANIMACIONES</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>5 Post animados</td>
                                    <td>$28</td>
                                    </tr>
                                    <tr>
                                    <td>10 Post animados</td>
                                    <td>$55</td>
                                    </tr>
                                    <tr>
                                    <td>5 Gifs</td>
                                    <td>$18</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servicios
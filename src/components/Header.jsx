import { Outlet, NavLink } from "react-router-dom" ;
import { useState } from "react";
import { HiMenu,HiOutlineX } from "react-icons/hi";
import icono_anited from "../assets/icono_anited.png";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import icono_whatsapp from "../assets/whatsapp.png";
import {Link as LinkRoll} from "react-scroll";

const Header =()=>{
    const [fix, setFix] = useState(false);
    const [dropdown,setDropdown]= useState(false);

    const AccionDropdown=()=>{
        setDropdown(!dropdown);
    }

    function setFixed(){
        if(window.scrollY >=200){
            setFix(true)

        }else{
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed);

    const[showMenu, setShowMenu]= useState(false);    
    return(
        <div>
            <header className={`nav flex items-center justify-between xl:justify-start w-full h-[15vh] z-50  bg-primary font-Roboto ${fix?"navmod backdrop-blur-sm transition-all duration-500":" "}`}>
                <nav className="hidden bg-[#ffffff00] xl:flex h-full w-full top-0 static flex-1 flex-row items-center justify-center gap-5 transition-all duration-500" >
                    <NavLink to="/" className="text-white font-sans border-b-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200 mr-4">Inicio</NavLink>
                    <NavLink to="/nosotros" className="text-white font-sans border-b-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200 mr-4">Nosotros</NavLink>
                    <NavLink to="/servicios" className="text-white font-sans border-b-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  mr-4">Servicios</NavLink>
                    <NavLink to="/contactos" className="text-white font-sans border-b-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  mr-4">Contactanos</NavLink>
                    {/* <Dropdown isOpen={dropdown} toggle={AccionDropdown} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                        <DropdownToggle>
                            <NavLink to="/servicios" className="text-[#ffffff] border-b-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Servicios</NavLink>
                        </DropdownToggle> 
                        <DropdownMenu className={`${dropdown?"block": "hidden"} bg-[#004c6a8e] rounded-xl backdrop-blur-sm `}>
                            <DropdownItem className=""><NavLink to="servicios#serviciosDisenio" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Diseño</NavLink></DropdownItem><br />
                            <DropdownItem className=""><NavLink to="servicios#serviciosProgramacion" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</NavLink></DropdownItem><br />
                            <DropdownItem className=""><LinkRoll to="serviciosProgramacion" smooth={true} offset={200} duration={500} className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</LinkRoll></DropdownItem><br />
                            <DropdownItem className=""><NavLink to="servicios#serviciosPaquete" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Paquetes</NavLink> </DropdownItem>
                        </DropdownMenu> 
                    </Dropdown>  */}
                    
                </nav>
                <div className="w-1/3 flex justify-center">
                    <div>
                        <NavLink to="/"><img src={icono_anited} alt="" className="w-[12vh] xl:flex-row  hover:w-[14vh] transition-all duration-200"/></NavLink>
                    </div> 
                </div>
                <div className="w-1/3 text-center">
                    {/* <button className="">Buscar</button> */}
                </div>
                <button onClick={()=>setShowMenu(!showMenu)} className="text-2xl p-2 xl:hidden bg-[#ffffff00] text-white">{showMenu?<HiOutlineX/>:<HiMenu/>}</button>
            </header>
            <nav className={`fixed w-[80%] md:w-[40%] h-full xl:w-full ${showMenu?"left-0 bg-[#004c6a]":"-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-5 z-50 transition-all duration-500 xl:bg-[#ffffff00]`} >
                    <NavLink to="/" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] font-sans border-l-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200 px-10">Inicio</NavLink>
                    <NavLink to="/nosotros" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] font-sans border-l-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200 px-10">Nosotros</NavLink>
                    <NavLink to="/servicios" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] font-sans border-l-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200 px-10">Servicios</NavLink>
                    <NavLink to="/contactos" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] font-sans border-l-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200 px-10">Contactanos</NavLink>
                    {/* <Dropdown isOpen={dropdown} toggle={AccionDropdown} direction="end">
                        <DropdownToggle>
                            <NavLink to="/servicios" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] font-sans border-l-4 border-[#ffffff00] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Servicios</NavLink>
                        </DropdownToggle> 
                        <DropdownMenu className={`${dropdown?"inline-block ": "hidden"}`}>
                            <DropdownItem onClick={()=>setShowMenu(!showMenu)} className=""><a href="servicios#serviciosDisenio" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Diseño</a></DropdownItem><br />
                            <DropdownItem className=""><a href="servicios#serviciosProgramacion" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</a></DropdownItem><br />
                            <DropdownItem className=""><LinkRoll to="serviciosProgramacion" smooth={true} offset={200} duration={500} className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</LinkRoll></DropdownItem><br />
                            <DropdownItem className=""><a href="servicios#serviciosPaquete" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Paquetes</a> </DropdownItem>
                        </DropdownMenu> 
                    </Dropdown>  */}

                </nav>
            <div className="bg-primary h-[15vh] xl:h-[8vh]">
            </div>
            <div className="nav items-center justify-between xl:justify-start z-50 absolute bottom-5 right-5 h-16 w-16 hover:w-20 hover:h-20  transition-all duration-300">
                <a href="https://wa.me/593985081264" target="_blank" className="text-white hover:text-[#f5a02b]"><img src={icono_whatsapp} alt="" className="float-left" /><span className="animate-ping absolute left-1 top-1  h-14  w-14 hover:h-12 hover:left-4 hover:top-4 rounded-full bg-green-400 hover:bg-green-600 opacity-75 hover:opacity-90   "></span></a>
            </div>
            <Outlet></Outlet>
        </div>
        
        
    )
}
export default Header
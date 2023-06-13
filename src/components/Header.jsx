import { Outlet, Link } from "react-router-dom" ;
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
                    <Link to="/" className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200 mr-4">Inicio</Link>
                    <Link to="/nosotros" className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Nosotros</Link>
                    <Dropdown isOpen={dropdown} toggle={AccionDropdown} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                        <DropdownToggle>
                            <Link to="/servicios" className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Servicios</Link>
                        </DropdownToggle> 
                        {/* <DropdownMenu className={`${dropdown?"block": "hidden"} bg-[#004c6a8e] rounded-xl backdrop-blur-sm `}>
                            <DropdownItem className=""><Link to="servicios#serviciosDisenio" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Diseño</Link></DropdownItem><br />
                            <DropdownItem className=""><Link to="servicios#serviciosProgramacion" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</Link></DropdownItem><br />
                            <DropdownItem className=""><LinkRoll to="serviciosProgramacion" smooth={true} offset={200} duration={500} className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</LinkRoll></DropdownItem><br />
                            <DropdownItem className=""><Link to="servicios#serviciosPaquete" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Paquetes</Link> </DropdownItem>
                        </DropdownMenu>  */}
                    </Dropdown> 
                    <Link to="/contactos" className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Contactanos</Link>
                </nav>
                <div className="w-1/3 flex justify-center">
                    <div>
                        <Link to="/"><img src={icono_anited} alt="" className="w-[12vh] xl:flex-row  hover:w-[14vh] transition-all duration-200"/></Link>
                    </div> 
                </div>
                <div className="w-1/3 text-center">
                    {/* <button className="">Buscar</button> */}
                </div>
                <button onClick={()=>setShowMenu(!showMenu)} className="text-2xl p-2 xl:hidden bg-[#ffffff00] text-white">{showMenu?<HiOutlineX/>:<HiMenu/>}</button>
            </header>
            <nav className={`fixed w-[80%] md:w-[40%] h-full xl:w-full ${showMenu?"left-0 bg-[#004c6a]":"-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-5 z-50 transition-all duration-500 xl:bg-[#ffffff00]`} >
                    <Link to="/" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Inicio</Link>
                    <Link to="/nosotros" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Nosotros</Link>
                    <Dropdown isOpen={dropdown} toggle={AccionDropdown} direction="end">
                        <DropdownToggle>
                            <Link to="/servicios" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Servicios</Link>
                        </DropdownToggle> 
                        {/* <DropdownMenu className={`${dropdown?"inline-block ": "hidden"}`}>
                            <DropdownItem onClick={()=>setShowMenu(!showMenu)} className=""><a href="servicios#serviciosDisenio" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Diseño</a></DropdownItem><br />
                            <DropdownItem className=""><a href="servicios#serviciosProgramacion" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</a></DropdownItem><br />
                            <DropdownItem className=""><LinkRoll to="serviciosProgramacion" smooth={true} offset={200} duration={500} className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Programación</LinkRoll></DropdownItem><br />
                            <DropdownItem className=""><a href="servicios#serviciosPaquete" className="text-[#ffffff] hover:text-lg  hover:text-[#f5a02b] transition-all duration-200">Paquetes</a> </DropdownItem>
                        </DropdownMenu>  */}
                    </Dropdown> 

                    <Link to="/contactos" onClick={()=>setShowMenu(!showMenu)} className="text-[#ffffff] hover:text-xl hover:text-[#f5a02b] transition-all duration-200  ">Contactanos</Link>
                </nav>
            <div className="bg-primary h-[15vh] xl:h-[8vh]">
            </div>
            <div className="nav items-center justify-between xl:justify-start z-50 absolute bottom-5 right-5 h-16 w-16 hover:w-20 hover:h-20  transition-all duration-300">
                <a href="https://wa.me/593985081264" target="_blank" className="text-white hover:text-[#f5a02b]"><img src={icono_whatsapp} alt="" className="float-left" /></a>
            </div>
            <Outlet></Outlet>
        </div>
        
        
    )
}
export default Header
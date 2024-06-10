import { Link, NavLink } from "react-router-dom"
import { FaMapMarkerAlt, FaQuestionCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import navLogo from '../assets/navLogo.png'
import facebookIcon from '../assets/facebookIcon.png'
import instagramIcon from '../assets/instagramIcon.png'
import UserMenu from './UserMenu'
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export default function Navbar(){

    
    const isAuth = useIsAuthenticated();

    return(
        <nav className="flex items-center justify-start p-1 max-h-20 bg-white text-black border-b border-b-gray-300 shadow">
            <Link to="/">
                <img src={navLogo} alt="Logo" className="h-16 w-32 ms-4 object-contain" />
            </Link>
            
            <div className="grow flex justify-end ml-40 mr-10 items-center h-full gap-x-8 text-lg text-gray-700">
                {/* <div to="inventory" className="text-sm basis-1/6 px-5 text-left justify-start flex flex-col max-h-max my-2 mx-4 rounded-2xl">
                    <p>Enviar a </p>
                    <p className="flex"><FaMapMarkerAlt className="size-5"/>Medellín</p>
                </div> */}

                <NavLink to="/createSell" className={({isActive}) => "py-1 text-sm basis-1/6 flex items-center justify-center max-h-max content-center my-2 mx-6 rounded-2xl " + (isActive? "font-bold cursor-default" : "hover:bg-gray-200")}>
                    Empieza a vender
                </NavLink>
                <NavLink to="/createPawn" className={({isActive}) => "py-1 text-sm basis-1/6 text-balance flex items-center justify-center max-h-max content-center my-2 mx-6 rounded-2xl " + (isActive? "font-bold cursor-default" : "hover:bg-gray-200")}>
                    Empieza a empeñar
                </NavLink>
                <NavLink to="/all-products" className={({isActive}) => "py-1 text-sm basis-1/6 text-balance flex items-center justify-center h-min content-center my-2 mx-6 rounded-2xl " + (isActive? "font-bold cursor-default" : "hover:bg-gray-200")}>
                    Explorar productos
                </NavLink>
                
                <div to="owners" className="text-sm basis-1/6 px-5 text-left justify-start flex flex-col max-h-max my-2 mx-4 rounded-2xl">
                    <p>Síguenos en</p>
                    <div className="flex">
                        <img src={facebookIcon} className="size-4"/>
                        <img src={instagramIcon} className="size-4 ml-4"/>
                    </div>  
                </div>
            </div>

            <div className="inline-flex items-center mx-5 gap-x-5">
                {
                    isAuth ?
                        <>
                            {/* <Link to="/Car">
                                <FaShoppingCart className='size-7 hover:text-gray-500' />
                            </Link> */}
                            <UserMenu />
                        </>
                    :
                        <>
                            <Link to="/login" className="text-nowrap text-sm text-gray-700 hover:bg-brilliantColor rounded-full px-4 py-2">
                                Iniciar sesión
                            </Link>
                            <Link to="/signup" className="text-sm text-white bg-firstColor rounded-full px-4 py-2">
                                Registrarse
                            </Link>
                        </>
                }



            </div>
        </nav>
    )
}

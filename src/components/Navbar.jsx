import { Link, NavLink } from "react-router-dom"
import { FaMapMarkerAlt, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import navLogo from '../assets/navLogo.png'
import facebookIcon from '../assets/facebookIcon.png'
import instagramIcon from '../assets/instagramIcon.png'

export default function Navbar(){
    return(
        <nav className="flex items-center justify-start p-1 max-h-20 bg-white text-black border-b border-b-gray-300 shadow">
            <Link to="/">
                <img src={navLogo} alt="Logo" className="h-16 ms-4" />
            </Link>
            
            <div className="grow flex justify-end ml-40 mr-10 items-center h-full gap-x-8 text-sm">
                <div to="inventory" className="basis-1/6 px-5 text-left justify-start flex flex-col max-h-max my-2 mx-4 rounded-2xl">
                    <p>Enviar a </p>
                    <p className="flex"><FaMapMarkerAlt className="size-5"/>Medellín</p>
                </div>
                <NavLink to="owners" className={({isActive}) => "basis-1/6 text-balance flex items-center justify-center max-h-max content-center my-2 mx-4 rounded-2xl " + (isActive? "font-bold cursor-default" : "hover:bg-gray-200")}>
                    ¿Quiénes somos?</NavLink>
                <NavLink to="update" className={({isActive}) => "basis-1/6 text-balance flex items-center justify-center max-h-max content-center my-2 mx-4 rounded-2xl " + (isActive? "font-bold cursor-default" : "hover:bg-gray-200")}>
                    Empieza a empeñar</NavLink>
                <NavLink to="inventory" className={({isActive}) => "basis-1/6 text-balance flex items-center justify-center h-min content-center my-2 mx-4 rounded-2xl " + (isActive? "font-bold cursor-default" : "hover:bg-gray-200")}>
                    <FaQuestionCircle className="size-5 mr-2"/>Ayuda
                </NavLink>
                <div to="owners" className="basis-1/6 px-5 text-left justify-start flex flex-col max-h-max my-2 mx-4 rounded-2xl">
                    <p>Síguenos en</p>
                    <div className="flex">
                        <img src={facebookIcon} className="size-4"/>
                        <img src={instagramIcon} className="size-4 ml-4"/>
                    </div>
                </div>
            </div>

            <div className="flex items-center relative justify-end text-black p-2 font-montserrat ml-auto mr-4">
                <Link to="/Car">
                <FaShoppingCart className='size-8 mr-4' />
                </Link>
                <FaCircleUser className='size-8'/>
            {/* <div className="absolute right-0 w-48 bg-white border rounded-md shadow-lg opacity-0 hover:opacity-100 transition duration-300">
                <div className='cursor-pointer flex block-4 py-2 text-gray-800 hover:bg-gray-200' onClick={logout}>
                <ChevronDoubleLeftIcon className='size-6 mr-4'/>
                <span> Cerrar sesión</span>
                
                </ div>
            </div> */}  
            </div>
        </nav>
    )
}
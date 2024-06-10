import logo from '../assets/logo.png'
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer className="flex mx-10 border-t border-gray-300 p-8 items-center text-gray-700">
            <img className='h-14' src={logo} alt='logo' />
            <div className='ml-20 flex items-center'>
                <FaRegCopyright className='size-3'/>
                <p className='text-xs ms-1'>pawns.Ltd2024</p>
            </div>

            <div className="ml-16 inline-flex items-center gap-x-8 text-sm">
                <Link to="/about" className=" hover:text-gray-500">Sobre nosotros</Link>
                <Link className=" hover:text-gray-500">Términos</Link>
                <a href="https://forms.gle/ETjvi8XaMMpW4STh7" target="_blank" className=" hover:text-gray-500">PQR</a>
            </div>

            <div className='ml-auto text-start leading-10'>
                <p className='text-sm'>Cra. 80 # 77 - 35</p>
                <div className='flex flex-row'>
                    <FaMapMarkerAlt className='size-3' />
                    <span className='text-xs'>Medellín, Colombia</span>
                </div>
                
            </div>
            <h6 className='text-sm ms-10'>+57 305 3382615</h6>
            <div className='flex flex-row ml-8 space-x-4'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
        </footer>
    )
}

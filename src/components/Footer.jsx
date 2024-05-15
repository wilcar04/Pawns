import logo from '../assets/logo.png'
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="flex mx-10 border-t border-gray-300 p-8 items-center">
            <img className='h-14' src={logo} alt='logo' />
            <div className='ml-40 text-start leading-10'>
                <p className='text-sm'>Cra. 80 # 77 - 35</p>
                <div className='flex flex-row'>
                    <FaMapMarkerAlt className='size-3' />
                    <span className='text-xs'>Medellín, Colombia</span>
                </div>
                
            </div>
            <h6 className='text-sm ms-10'>+57 305 3382615</h6>
            <div className='flex items-center ml-auto'>
                <FaRegCopyright className='size-3'/>
                <p className='text-xs ms-1'>pawns.Ltd2024</p>
            </div>
            <div className='flex flex-row ml-8 space-x-4'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
        </footer>
    )
}

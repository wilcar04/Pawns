import { MenuItem } from '@headlessui/react'
import { BsArrowLeftRight } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { RiLoader2Fill } from "react-icons/ri";
import { FaRegCalendarMinus } from 'react-icons/fa'
import { TbTruckLoading } from "react-icons/tb";
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function ClientMenuOptions(){
    return (
        <>
            <div className="py-1">
                <MenuItem>
                    {({ focus }) => (
                        <Link
                        to="/OnProcessPawns"
                        className={classNames(
                            focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                            <div className="inline-flex items-center gap-x-2">
                                <RiLoader2Fill  className='size-4'/>
                                <span>Empeños en envío</span>
                            </div>
                        </Link>
                    )}
                </MenuItem>

                <MenuItem>
                    {({ focus }) => (
                        <Link
                        to="/OnProcessSales"
                        className={classNames(
                            focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                            <div className="inline-flex items-center gap-x-2">
                                <TbTruckLoading  className='size-4'/>
                                <span>Ventas en envío</span>
                            </div>
                        </Link>
                    )}
                </MenuItem>

                <MenuItem>
                    {({ focus }) => (
                        <Link
                        to="/ActivePawns"
                        className={classNames(
                            focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                            <div className="inline-flex items-center gap-x-2">
                                <FaRegCalendarMinus className='size-4'/>
                                <span>Empeños activos</span>
                            </div>
                        </Link>
                    )}
                </MenuItem>
            </div>

            <div className="py-1">
                <MenuItem>
                    {({ focus }) => (
                        <Link
                        to="/PawnsRequest"
                        className={classNames(
                            focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                            <div className="inline-flex items-center gap-x-2">
                                <BsArrowLeftRight className='size-4'/>
                                <span>Solicitudes de empeños</span>
                            </div>
                        
                        </Link>
                    )}
                </MenuItem>
                <MenuItem>
                    {({ focus }) => (
                        <Link
                        to="/SalesRequest"
                        className={classNames(
                            focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                            <div className="inline-flex items-center gap-x-2">
                                <IoBagOutline className='size-4'/>
                                <span>Solicitudes de venta</span>
                            </div>
                        
                        </Link>
                    )}
                </MenuItem>
                
            </div>

        </>
    )
}
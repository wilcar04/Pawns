import { MenuItem } from '@headlessui/react'
import { FaRegCalendarMinus } from 'react-icons/fa'
import { BsArrowLeftRight } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function ClientMenuOptions(){
    return (
        <>
        <div className="py-1">
        <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2">
                        <FaRegCalendarMinus className='size-4'/>
                        <span>Mis solicitudes</span>
                    </div>
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2">
                        <BsArrowLeftRight className='size-4'/>
                        <span>Mis empeños</span>
                    </div>
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2">
                        <IoBagOutline className='size-4'/>
                        <span>Mis compras</span>
                    </div>
                  
                </a>
              )}
            </MenuItem>
          </div>
        </>
    )
}
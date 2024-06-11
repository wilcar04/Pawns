import { MenuItem } from '@headlessui/react'
import { FaRegCalendarMinus } from 'react-icons/fa'
import { BsArrowLeftRight } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';

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
                  to="/MyPawnRequest"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2">
                        <FaRegCalendarMinus className='size-4'/>
                        <span>Solicitudes de Empeño</span>
                    </div>
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <Link
                  to="/MySalesRequest"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2">
                        <MdAttachMoney className='size-4'/>
                        <span>Solicitudes de Venta</span>
                    </div>
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <Link
                  to="/MyPawns"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2">
                        <BsArrowLeftRight className='size-4'/>
                        <span>Mis empeños</span>
                    </div>
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <Link
                  to="/MyShopping"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2">
                        <IoBagOutline className='size-4'/>
                        <span>Mis compras</span>
                    </div>
                  
                </Link>
              )}
            </MenuItem>
          </div>

          {/* <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <Link
                  to="/CustomerInformation"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <Link to="/CustomerInformation">
                    <div className="inline-flex items-center gap-x-2 cursor-pointer">
                      <CiUser className="size-5" />
                      <span>Mi perfil</span>
                    </div>
                  </Link>
                </Link>
              )}
            </MenuItem>
          </div> */}
        </>
    )
}
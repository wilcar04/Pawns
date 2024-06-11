import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { FaCircleUser } from 'react-icons/fa6'
import { CiUser } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { Link, useNavigate } from 'react-router-dom';
import ClientMenuOptions from './ClientMenuOptions';
import AdminMenuOptions from './AdminMenuOptions';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const signOut = useSignOut()
  const navigate = useNavigate();

  const authUser = useAuthUser()

  function handleLogOut() {
    signOut()
    navigate(0)
  }

  if (authUser === null){
    return 
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 x-3 py-2">
              <FaCircleUser className='size-7 hover:text-gray-500'/>
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-3">
            <h6 className='block px-4 pt-2 text-sm text-gray-900'>{authUser.name}</h6>
            <p className='block px-4 pb-2 text-xs text-gray-700'>{authUser.email}</p>
          </div>

          { authUser.type === "cliente" ? 
            <ClientMenuOptions />
            :
            <AdminMenuOptions />
          }


            
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <div
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <div className="inline-flex items-center gap-x-2 cursor-pointer" onClick={handleLogOut}>
                        <SlLogout className='size-4'/>
                        <span>Cerrar sesión</span>
                    </div>
                  
                </div>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
// import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/img/nimbussystems_logo-1.png';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#' },
  { name: 'Industry', href: '#' },
  { name: 'Government Services', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Career', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-transparent lg:sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto lg:max-w-7xl lg:ml-28 xl:max-w-full">
            <div className="bg-white flex h-20 items-center justify-between px-3 lg:justify-end lg:rounded-l-full">
              <div className="flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#121D4B] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center lg:justify-start">
                <div className="flex items-center lg:justify-around lg:pr-5 xl:pr-20">
                  <img
                    className="h-16 w-auto sm:max-lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block lg:pr-24 xl:px-20">
                  <div className="flex space-x-4 lg:space-x-3 xl:space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-[#1E307A] hover:bg-[#121D4B] hover:text-white',
                          'rounded-md px-3 py-2 text-sm xl:text-lg font-black italic font-ralewaythin' 
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

import React from 'react'
import Carts from '../carts/carts';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux';

function Navbar() {
    const cart = useSelector((state) => state.data.cartProducts);

    return (
        <div> <div className="w-full px-4 flex justify-end z-40">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`cart-button--js
    ${open ? '' : 'text-opacity-90'}
    group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span>Carts</span>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute  z-10 mt-3 w-screen max-w-sm right-0 translate-x-20 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                        <Carts />
                                        <div className="bg-gray-50 p-4">
                                            <p className='text-3xl text-gray-500 mb-9'>Would you like to checkout for the listed items ?</p>
                                            <a
                                                href="/checkout"
                                                className={`flow-root rounded-md text-xl font-semibold tracking-widest text-center  p-4 transition duration-150 ease-in-out text-white focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${cart && cart.length > 0 ? 'bg-orange-400 hover:bg-orange-500 ' : 'bg-gray-500 cursor-not-allowed'}`}
                                            >
                                                Checkout
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
        </div>
    )
}

export default Navbar
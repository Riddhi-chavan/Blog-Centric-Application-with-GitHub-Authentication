"use client"
import React from 'react'
import { useState  , useEffect} from 'react'
import { SignInButton } from '../component/Buttons';

const Nav = () => {
    const [showdrop , setshowdrop ] = useState(false);
    const [ menu , setmenu] = useState(false)
    const [image , setimage] = useState(true)


    useEffect(() => {
        const handleDocumentClick = (event : any) => {
          // Check if the click is outside the dropdown menu and user button
          if (showdrop && !event.target.closest('.your-dropdown-container') ||  (menu && !event.target.closest('.your-navbar-container'))) {
            setshowdrop(false);
            setmenu(false);
          }
        };
    
        // Attach the event listener when the component mounts
        document.addEventListener('click', handleDocumentClick);
    
        // Detach the event listener when the component unmounts
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, [showdrop, menu]);

    const handleuser = () => {
        setshowdrop(!showdrop);
    }

    const  displaymenu = () => {
        setmenu(!menu)
        console.log("it click")
    }


    
    
 
    return (
        <div>
            <nav className="bg-gray-800 ">
                <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center md:justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" onClick={displaymenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span  className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-16 w-auto" src="/icon.svg" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block mt-3">
                             
                                <div className="flex space-x-4">
                                    <a href="dashboard" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                    <a href="About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                                    <a href="user" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">User</a>
                              
                                </div>
                              
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
{/* 
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" onClick={handleuser} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                     {image  ? 
                                        <img className="h-8 w-8 rounded-full" src="/question.png" alt="" />
                                        :  
                                          <SignInButton/>
                                        }
                                    </button>
                                </div>
                                { showdrop ? 
                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a>
                                    </div>
                                    :
                                    null 
                                    }
                                </div> */}
                                <SignInButton/>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                {menu ? 
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="dashboard" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="About" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
                        <a href="user" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">User</a>
                        
                    </div>
                     : null }
                </div>
            </nav>

        </div>
    )
}

export default Nav

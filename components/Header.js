import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
        <div className= "flex justify-between max-w-6xl">
        <div className='relative hidden lg:inline-grid w-24
        cursor-pointer'>
            <Image
            src = 'https://links.papareact.com/ocw' 
            layout='fill'
            objectFit='contain'
            />
        </div>

        <div className='relative w-10 lg:hidden flex-shrink-0
        cursor-pointer'>
        <Image
            src = 'https://links.papareact.com/jjm' 
            layout='fill'
            objectFit='contain'
        />
        </div>

        <div className='relative mt-11 p-3 rounded-md bg-red-500'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-500'/>
            </div>
           <input type="text" placeholder='Search'></input> 
        </div>
       

        {/* Right */}

        </div>
       
        {/* left will be logo, middle will be search, right will be permissions */}
    </div>
  );
}

export default Header
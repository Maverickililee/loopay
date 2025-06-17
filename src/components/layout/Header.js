"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCartShopping, FaGlobe, FaList, FaLocationPin } from 'react-icons/fa6'
import Menu from '../ui/Menu'
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Search from '../ui/Search';
import Link from 'next/link';

export default function (props) {
    const [language, setLanguage] = useState(false);
        const [cart, setCart] = useState(false);
    const [openMenu , setOpenMenu] =useState(false);

  const headerMenu = props.HeaderMenu;
  
    const languageList=[
        {label:'English' , id:0},
        {label:'Italian' , id:0},

    ]
  return (
<header className='header '>
       {openMenu && (
              <div className="fixed   w-full h-full top-0 right-0 bg-black  bg-opacity-50 z-[999999] flex items-center justify-end">
                <div
                  className="absolute inset-0  "
                  onClick={() => setOpenMenu(false)}
                ></div>
                <div
                  className={`bg-white w-3/4 max-w-xs h-full relative shadow-lg z-[999999]  `}
                >
                  <div className="p-5 flex justify-end">
                    <span
                      onClick={() => setOpenMenu(false)}
                      className="text-[25px] bg-mainBlue text-white p-1 rounded-lg  text-text__light cursor-pointer"
                    >
                      <IoMdClose className="hover:rotate-180 duration-500 " />
                    </span>
                  </div>
                  <nav className="px-5 flex flex-col w-full">
                    <span className="flex flex-col gap-2 mb-5 justify-center items-center w-full">
                        <Image
 src="/header/logo.png"                     width={2000}
                     height={2000}
                     alt="loading..."
                     className="header-section-logo "
                   />
                
                     
                    </span>
              
                    <ul className="space-y-4 flex justify-center items-center  flex-col">
                      {headerMenu?.map((i, index) => {
                        return (
                          <Link
                            className="hover:text-white font-semibold  hover bg-slate-100 py-2 w-full text-center rounded-lg hover:bg-mainBlue  transition-[var(--transition)]"
                            key={index}
                            href={`${i.url}`}
                            onClick={()=> setOpenMenu(!openMenu)}
                          >
                            <li>{i.title}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
    <div className='header-section'>
<div className="container header-section-container ">
    
       <Image
 src="/header/logo.png"                     width={2000}
                     height={2000}
                     alt="loading..."
                     className="header-section-logo "
                   />
                   <div className='header-section-holder'>
                    <nav className="desktop:hidden">
                <Menu    data={headerMenu}/>
            </nav>
 <Search   />

                                  <span onClick={()=>(setLanguage(!language))} className=' mobile:hidden header-section-button '>
                        <FaGlobe  className=' header-section-button-icon'/>
                        {language &&
                        <div className=' header-section-language-dropdown'>
                           {languageList.map((i)=>(
                            <span  className='header-section-language'>
                                {i.label}
                            </span>
                           ))}
                        </div>
                        }

                    </span>
                               <span 
                              className='header-section-button mobile:hidden '>
                        <FaLocationPin className='header-section-button-icon'/>
                    </span>
                    <span  onClick={()=>setCart(!cart)}  className='header-section-button mobile:hidden '>
                        <FaCartShopping className='header-section-button-icon'/>
                                {cart &&
                        <div className='header-section-cart'>
<BsFillPatchExclamationFill size={40}  />
                            Your cart is empty!
                        </div>
                        }
                    </span>
            
                <span 
                onClick={()=>setOpenMenu(!openMenu)}
                              className='header-section-button !hidden mobile:!flex'>
                        <FaList className='header-section-button-icon'/>
                    </span>

                   </div>

</div>
</div>
<div className='hidden desktop:flex mobile:!hidden  w-full border-b py-2'>
    <div className="container flex justify-center">
<Menu data={headerMenu}/>
    </div>

</div>
</header>
  )
}

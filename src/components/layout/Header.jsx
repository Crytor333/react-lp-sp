import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
    
  return (
    <div className={`fixed top-0 z-20  py-[15px]  w-full ${props.colo}`}>
      <div className='flex justify-between max-w-[1366px] w-full xl:px-[60px] lg:px-[50px] md:px-[30px] sm:px-[20px] px-[15px] m-auto items-center'>
        <div className='header-logo'>
          <img src="./logo.png" alt="header-logo" className='xl:w-[245px] lg:w-[230px] md:w-[200px] sm:w-[170px] w-[130px]' />
        </div>
        <nav>
          <ul className=' gap-[35px] w-full xl:flex hidden'>
            <li><Link>外貨両替宅配サービスとは</Link></li>
            <li><Link>宅配までの流れ</Link></li>
            <li><Link>お役立ち情報</Link></li>
            <li><Link>よくある質問</Link></li>
          </ul>
        </nav>
        <div className='special flex items-center lg:gap-[35px] lg:text-[16px] md:text-[14px] text-[12px] md:gap-[30px] sm:gap-[25px] gap-[15px] leading-none'>
          <Link className='relative after:content-[" "] after:h-[14px] items-center after:w-[1px] after:bg-gray-500 after:absolute md:after:top-[5px] after:top-[3px] md:after:right-[-17.5px] sm:after:right-[-12.5px] after:right-[-7.5px]'>ログイン</Link>
          <Link>会員登録</Link>
          <div className='menu-bar sm:w-[65px] w-[55px] sm:h-[65px] h-[55px] bg-[#3C9DA9] rounded-full gap-[5px] items-center flex flex-col justify-center'>
            <span className='sm:w-[45px] w-[35px] sm:h-[2px] h-[1px] bg-white'></span>
            <span className='sm:w-[45px] w-[35px] sm:h-[2px] h-[1px] bg-white'></span>
            <div className='text-white sm:text-[16px] text-[14px]'>MENU</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {


  return (
    <div className=' flex flex-col max-w-[1366px] w-full  m-auto pt-[15px]' id="footer" >
      <marquee className="text-white text-[90px] font-bold py-0 leading-none">FORIEGN CURRENCY EXCHANGE FORIEGN CURRENCY EXCHANGE</marquee>
      <div className='w-full flex flex-col  gap-[25px] bg-gradient-to-tl to-[#3C9DA9] from-[#66D7A6] rounded-tl-[3em] rounded-tr-[3em] justify-center items-center pt-[30px]'>
        <div className='w-full px-[15px] md:px-[60px] flex flex-col sm:flex-row   gap-[25px] sm:justify-between lg:gap-[15px] rounded-tl-[3em] rounded-tr-[3em] justify-center lg:justify-between items-center pt-[30px] sm:pt-0 '>
          <div className=' gap-[15px] flex flex-col'>
            <img src='./footer-logo.png' alt='' className='w-[225px]' />
            <div>
              <div className='flex items-center gap-[10px]'>
                <img src='./phone.png' alt='phone' className='w-[33px] h-[33px]' />
                <span className='text-[36px] text-white'>0120-110-081</span>
              </div>
              <div className='text-white text-[14px]'>営業時間：9:00～16:00（土日祝を除く）</div>
            </div>
            <div className='bg-white rounded-full py-[14px] flex gap-[10px] justify-center items-center border-4 border-[#3C9DA9] ring-1 ring-white'>
              <img src='./email.png' alt='' className='w-[17px] h-[14px]' />
              <span className='text-gray-400 font-bold'>メールでのお問い合わせ</span>
            </div>
          </div>
          <div className='w-full lg:w-[60%] sm:w-[50%] flex flex-col  gap-[25px] rounded-tl-[3em] rounded-tr-[3em] justify-center sm:items-end sm:justify-end items-center pt-[30px] '>
            <div className='w-full flex flex-col lg:flex-row text-white md:px-0 gap-[40px] sm:justify-around'>
              <div className='flex flex-col gap-[10px]'>
                <span className='text-[16px] font-bold'>Forrengeについて</span>
                <ul className='flex gap-[20px] leading-none flex-wrap lg:flex-col'>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>外貨両替宅配サービスとは</Link></li>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>宅配までの流れ</Link></li>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>よくある質問</Link></li>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>外貨を購入する</Link></li>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>外貨を売却する</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <span className='text-[16px] font-bold'>お役立ち情報</span>
                <ul className='flex gap-[20px] leading-none flex-wrap'>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>コラム</Link></li>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>お知らせ</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-[10px] text-white'>
                <span className='text-[16px] font-bold'>ユーザー向け</span>
                <ul className='flex gap-[20px] lg:flex-col leading-none flex-wrap'>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>ログイン</Link></li>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>会員登録</Link></li>
                  <li><Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full sm:flex items-center gap-[5px] hidden'>会員登録について</Link></li>
                </ul>
                <Link className='text-[14px]  before:content-[" "] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full flex items-center gap-[5px]'>会員登録について</Link>
              </div>
              <div className='flex gap-[20px] text-[12px] lg:hidden'>
                <Link className='relative after:absolute after:content-[" "] after:w-[1px] after:h-[10px] after:bg-white after:top-[5px] after:right-[-10px]'>運営会社</Link>
                <Link>個人情報保護方針</Link>
              </div>
            </div>
            <div className='lg:flex gap-[20px]  text-white text-[12px] lg:justify-end hidden'>
              <Link className='relative after:absolute after:content-[" "] after:w-[1px] after:h-[10px] after:bg-white after:top-[5px] after:right-[-10px]'>運営会社</Link>
              <Link>個人情報保護方針</Link>
            </div>
          </div>
        </div>
        <div className='fixed bottom-[50px] right-[15px] sm:right-[3%] md:right-[2%] lg:right-[3%] 2xl:right-[10%] z-10'>
          <div className={`right-[-10px] before:flex before:left-[-2px] relative before:top-0 before:absolute before:content-[" "] before:w-[7px] before:h-[7px] before:${props.col} before:md:${props.mdcolor} before:rounded-full w-[2px] h-[60px] ${props.col} md:${props.mdcol}`}></div>
          <a className={` flex-col flex page-top mt-[10px] cursor-pointer ${props.color} md:${props.mdcolor}`} href='#home'>PAGETOP</a>
        </div>
        <div className='w-full'>
          <div className='border-t-[1px] border-white px-[15px] text-white py-[11px] w-[93%] m-auto'>
            <div className='text-center m-auto text-[12px]'>&copy;2023 Forrenge.</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
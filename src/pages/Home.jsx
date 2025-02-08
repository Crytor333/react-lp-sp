import React, { useState, useEffect } from 'react'
import StepCard from '../components/common/StepCard'
import DetailCard from '../components/common/DetailCard'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

function Home() {

  const [col, setCol] = useState('bg-white')
  const [color, setColor] = useState("text-white");
  const [colo, setColo] = useState('');
  const [mdcol, setmdCol] = useState('');
  const [mdcolor, setmdColor] = useState('');

  useEffect(() => {
    onscroll = () => {
      if (scrollY > 0) {
        setColo('bg-[rgba(256,256,256,0.9)]')
      }
      else setColo('');
      if (scrollY < 1350) {
        setColor("text-gray-400");
        setCol('bg-gray-400')
      }
      else {
        setColor("text-white");
        setCol('bg-white')

      }
    }
  }, [scrollY])

  return (
    <>
      <Header colo={colo} />
      <div className='bg-[#F3F3F3] flex flex-col max-w-[1366px] w-full xl:px-[60px] lg:px-[50px] md:px-[30px] sm:px-[20px] px-[15px] m-auto py-[15px] relative' id='home'>
        {/* <div className='absolute right-[-55%] sm:right-[-40%] md:right-[-30%] lg:right-[-20%] top-[159px] z-1'> */}
        <div className='absolute right-0 top-[130px] z-1'>
          {/* <img src='./circle.png' alt='circle' className=' w-[371px] sm:w-[500px] md:w-[650px] lg:w-[750px] h-[371px] sm:h-[500px] md:h-[650px] lg:h-[750px]  z-1' /> */}
          <img src='./circle.png' alt='circle' className='object-none object-left  hidden md:flex md:w-[400px] lg:w-[500px] xl:w-[600px] h-[750px] z-1' />
          <img src='./371circle.png' alt='circle' className='object-none object-left  w-[180px] md:hidden h-[371px] z-1' />
        </div>
        <div className='sel-lang fixed z-20 right-[35px] sm:right-[45px] md:right-[6%] lg:right-[7%] xl:right-[8%] 2xl:right-[14%] top-[100px] sm:top-[130px]'>
          <img src='./world.png' alt='world-icon' />
          <span className='ml-[-2px]'>JP</span>
          <img src='./down-arrow.png' alt='arrow-icon' />
        </div>
        <div className='title mt-[71.8px] sm:mt-[130px] z-10'>
          <span className='text-gray-400 before:content-[""] flex items-center gap-[5px] before:bg-gray-400 before:rounded-full before:w-[10px] before:h-[10px]'>Flow</span>
          <h1 className='text-[28px] font-bold'>宅配までの流れ</h1>
        </div>
        <div className='w-full sm:px-[30px] md:px-[60px] lg:px-[95px] xl:px-[115px] z-10 md:pt-[161px]'>
          <div className='z-10 cate_btn mt-[103px] flex justify-between sm:justify-start w-full gap-[16px] text-nowrap  text-[16px] font-bold'>
            <button className='text-white rounded-lg bg-[#39B9B5] w-[164px] md:flex-row sm:w-[200px] md:w-[260px] py-[9px] flex flex-col justify-center border-[2px] border-white'>
              <div className='m-auto md:m-0 md:p-0'>外貨購入</div>
              <div className='m-auto  md:m-0 md:p-0'>(日本円→外貨の場合)</div>
            </button>
            <button className='text-gray-500 rounded-lg bg-[#E6E6E6] w-[164px] sm:w-[200px] md:w-[260px] py-[9px] flex flex-col md:flex-row justify-center border-[2px] border-white'>
              <span className='m-auto md:m-0 md:p-0'>外貨購入</span>
              <span className='m-auto md:m-0 md:p-0'>(日本円→外貨の場合)</span>
            </button>
          </div>
          <div className='step mt-[35px] z-10 gap-[20px] flex flex-col'>
            <StepCard
              stepNum="01"
              stepTitle="ご注文"
              stepContent="注文ページより、お客様情報、購入したい外貨の選択、金額等をご入力いただきご注文下さい。"
              flag={true}
            />
            <StepCard
              stepNum="02"
              stepTitle="お振込み"
              stepContent="メールにてご案内する弊社指定の口座へ日本円のお振込みをお願いいたします。\
                        お振込み金額確認後、送付の準備をいたします。"
              flag={true}

            />
            <StepCard
              stepNum="03"
              stepTitle="外貨配送"
              stepContent="注文ページにてご指定の場所へ外貨を送付いたします。\
                      ※営業日かつ午後3時までのお申込みであれば、即日出荷いたします。午後3時以降の場合翌営業日の出荷です。在庫状況により出荷が遅れる場合があります。ご了承下さい。"
              flag={true}
            />
            <StepCard
              stepNum="04"
              stepTitle="到着"
              stepContent="出荷後1～2日程度でお届けいたします。\
                      ※場所、悪天候、諸事情により到着日は遅れることがございます。"
              flag={true}
            />
            <StepCard
              stepNum="05"
              stepTitle="ご注文"
              stepContent="注文ページより、お客様情報、購入したい外貨の選択、金額等をご入力いただきご注文下さい。"
              flag={false}
            />

          </div>
          <div className='mt-[80px] flex flex-col w-full gap-[104px]  lg:gap-[15px] xl:gap-[35px] lg:flex-row lg:pt-[40px]'>
            <DetailCard
              detailImg='./detail-1.png'
              detailText='Forrengeとは'
              className='detail1 absolute top-[-32px] '
              centClassName='hidden'
            />
            <DetailCard
              detailImg='./chat.png'
              detailText='よくある質問'
              className="chat top-[-80px] absolute "
              centClassName='hidden'

            />
            <DetailCard
              detailImg='./lamp.png'
              detailText='お役立ち情報'
              className='lamp top-[-100px] absolute '
              centClassName='cent absolute top-[-60px] '
            />
          </div>
        </div>

      </div>
      <Footer col={col} color={color} mdcol={mdcol} mdcolor={mdcolor} />
    </>

  )
}

export default Home
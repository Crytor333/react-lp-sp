import React from 'react'

function StepCard(props) {
  return (
    <>
      <div className='w-full border-[2px] border-white rounded-lg bg-[rgba(256,256,256,0.1)] flex flex-col p-[20px] gap-[15px]' id='blurCtrl'>
        <div className='flex gap-[15px] items-center '>
          <div className='w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] bg-[#3C9DA9] rounded-full flex flex-col justify-center items-center text-white leading-none'>
            <span className='text-[12px] font-bold'>STEP</span>
            <span className='text-[24px] font-bold'>{props.stepNum}</span>
          </div>
          <div className='sm:w-[80%]'>
            <span className='text-[20px] font-bold'>{props.stepTitle}</span>
            <span className='hidden text-[14px] sm:flex'>{props.stepContent}</span>
          </div>
        </div>
        <div className='flex sm:hidden text-[14px] tracking-tight '>{props.stepContent}</div>
      </div>
      {
        props.flag &&
        <span className=' m-auto border-l-transparent border-r-transparent border-t-[20px] border-white w-[30px] border-l-[15px] border-r-[15px]'></span>
      }
    </>
  )
}

export default StepCard
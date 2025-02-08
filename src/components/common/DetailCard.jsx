import React from 'react'

const DetailCard = (props) => {
  return (
    <div className='relative w-full'>
      <div className=' w-full pt-[51px] pb-[32px] gap-[20px] justify-center flex border-white border-[2px] rounded-xl'>
        <span className='text-[20px] text-gray-500 font-bold'>{props.detailText}</span>
        <img src='./left-arrow.png' alt='left-arrow'/>
      </div>
      <img src={props.detailImg} alt='detailImg' className={props.className || 'absolute top-[-32px] left-[50px]'}/>
      <img src='./lamp-cent.png' className={props.centClassName ||''} />
    </div>
  )
}

export default DetailCard
import React from 'react'
import leftLeaf from '@/asset/images/cocktail-left-leaf.png'
import rightLeaf from '@/asset/images/cocktail-right-leaf.png'

export default function index() {
  return (
    <>
      <div className="w-full  relative bg-[url('@/asset/images/noise.png')]">
        {/* 第一部分 mojito文字+会动的video  */}
        < div className='w-[75%] flex-center flex-col text-center mx-auto'>
          <p className='text-transparent bg-clip-text bg-gradient-to-b from-white to-[#898989]md:mt-32 mt-20 text-8xl md:text-[15vw] text-center font-modern-negra'> MOJITO</p>
          <div className='flex  gap-5 mt-8 justify-between text-left'>
            <div className='flex flex-col gap-5 w-1/3'>
              <p>Cool. Crisp. Classic.</p>
              <p className='text-5xl text-[#e7d393]'>Sip the Spirit
                of Summer</p>
            </div>
            <div className='flex flex-col gap-5 w-1/3 text-left'>
              <p className='text-left'>Every cocktail on our menu is a
                blend of premium ingredients,
                creative flair, and timeless recipes
                — designed to delight your senses.</p>
              <p className='text-xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#898989] cursor-pointer'>View cocktails</p>
            </div>
          </div>
          {/* 两侧叶子 */}
          <img src={leftLeaf} alt="" className=' absolute left-[-10px] top-[-20px]' />
          <img src={rightLeaf} alt="" className=' absolute right-[-50px] bottom-[-50px]' />
        </div>

        <div>
          {/* 第二部分 列表 */}
          
        </div>
      </div>

    </>
  )
}

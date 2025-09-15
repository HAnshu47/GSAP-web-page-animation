import React from 'react'
import leftLeaf from '@/asset/images/cocktail-left-leaf.png'
import rightLeaf from '@/asset/images/cocktail-right-leaf.png'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

export default function Index() {
  useGSAP(() => {

    gsap.to("#mojito", {
      opacity: 0,
      y: 10,
      // duration: 6,
      yoyo: true,
      stagger: 0.6, // 每个字延迟 0.1 秒
      ease: "power2.out"
    },);
    gsap.from("#text1", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: "power2.out",
    },);
    gsap.from("#text2", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: "power2.out",
    },);

    gsap.from('.mojito', {
      opacity: 0.5,
      y: -20,
      duration: 1.8,
      stagger: 0.3,
      ease: "power2.out",
    },);

  })
  const mojito = 'MOJITO'
  return (
    <>
      <div className="w-full  relative bg-[url('@/asset/images/noise.png')]">
        {/* 第一部分 mojito文字+会动的video  */}
        < div className='w-[75%] flex-center flex-col text-center mx-auto flex'>
          <div className='flex'>
            {mojito.split('').map((item, index) => (
              <p key={index} className='mojito inline text-transparent bg-clip-text bg-gradient-to-b from-white to-[#898989]md:mt-32 mt-20 text-8xl md:text-[15vw]  font-modern-negra'> {item}</p>
            ))}
          </div>


          <div className='flex  gap-5 mt-8 justify-between text-left'>
            <div className='flex flex-col gap-5 w-1/3'>
              <p>Cool. Crisp. Classic.</p>
              <p className='text-5xl text-[#e7d393]' id='text1'>Sip the Spirit
                of Summer</p>
            </div>
            <div className='flex flex-col gap-5 w-1/3 text-left'>
              <p className='text-left' id='text2'>Every cocktail on our menu is a
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

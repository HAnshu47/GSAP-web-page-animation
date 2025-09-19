import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { goodLists, featureLists } from '../../../constants/index'
import MojitoType from './mojitoType';

export default function Index() {
  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "top top",   // 滚动到 art 时启动
        end: "bottom center", // 到底部完成
        scrub: 1.5,
        pin: true,
        /**
         * pin: true 是用来让触发元素在滚动过程中“固定”在视口中的
         *固定在屏幕上不动，直到 ScrollTrigger 的 end 达到指定位置，元素才会“解锁”继续滚动。
         如果false 他就会直接滚到底屏，遮照没有放大就结束了
         */
      },
    });

    tl.to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
    tl.to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut ' })
  })
  return (
    <>
      <div id='art'>
        {/* 1.the art 文字 */}
        <h2 className='will-fade'>The Art</h2>
        <div className="mask">
          {/* 2.img +遮照img  */}
          <div className="cocktail-img mt-15">
            <img src="/images/under-img.jpg" alt="" className="abs-center masked-img size-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-between w-full p-10 ">
          {/* 3.左侧菜单 + 右侧菜单 */}
          <div className="space-y-4 will-fade left-menu">
            {goodLists.map((item, index) => (
              <div key={index} className='flex justify-start items-center'>
                <img src="/images/check.png" alt="" className='mr-2' />{item}
              </div>
            ))}</div>
          <div className="space-y-4 will-fade right-menu">
            {featureLists.map((item, index) => (
              <div key={index} className='flex justify-start items-center'>
                <img src="/images/check.png" alt="" className='mr-2' />{item}
              </div>
            ))}</div>
        </div>



      </div>
      {/* 切换菜单 */}
      <MojitoType />
    </>
  )
}

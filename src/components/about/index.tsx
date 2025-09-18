import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { abtImg, profileLists, featureLists } from "../../../constants/index";
import { Divider, Rate } from 'antd';

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // 标题动画
    gsap.fromTo(
      "#about-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#about-heading",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // 子内容动画
    gsap.fromTo(
      ".sub-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".sub-content",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // 图片堆叠动画
    gsap.fromTo(
      ".stack-img",
      {
        opacity: 0,
        y: 0,
        rotation: (i) => gsap.utils.random(-15, 15), // 初始旋转
        x: (i) => gsap.utils.random(0, 0),        // 初始水平错位
      },
      {
        opacity: 1,
        y: (i) => -i * 20, // 往上堆叠，有层次感
        rotation: (i) => gsap.utils.random(-10, 10), // 最终保留一点随机角度
        x: (i) => i * 15 - 40, // 每张水平错开一点
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".image-stack-container",
          start: "top top",
          end: "+=" + abtImg.length * 400,
          scrub: true,
          pin: true,
        },
      }
    );
  });

  return (
    <div id="about">
      <div className="content">
        <div className="md:col-span-8">
          <div className="badge">Best Cocktails</div>
          <h2 id="about-heading">
            Where every detail matters - from muddle to garnish
          </h2>
        </div>

        <div className="sub-content">
          <p>
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>
          <div className=" flex gap-4 items-center">

            <div>
              <Rate allowHalf disabled defaultValue={4.5} />
              <div className="flex gap-2 justify-start my-score-box">
                <p className="flex gap-2 items-center bold text-2xl ">
                  <span>4.5</span>/5
                </p>
              </div></div>
            <p className="flex gap-2 items-center bold text-2xl w-[0.5px] h-20 bg-[#DCDCDC]"></p>
            <div>
              <div className="flex  w-full h-full bg-[url('/images/noise.png')] rounded-full p-4" >
                {profileLists.map((item, index) => (
                  <div key={index} className="flex items-center ml-[-10px]">
                    <img src={item.imgPath} alt="" />
                  </div>
                ))}

              </div>
            </div>
          </div>
          <p>More than +12000 customers</p>

        </div>
      </div>
      <div>
        {/* 第一行，1：1:2 */}
        <div className=" grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-3 w-full h-full rounded-xl ">
            <img src="/images/abt1.png" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="col-span-3  w-full h-full bg-[url('/images/noise.png')] p-4 rounded-xl">
            <h1> Crafted to lmpress</h1>
            <ul className="list-disc ">
              {featureLists.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-sm/8"><img src="/images/check.png" alt="" />{item}</li>
              ))}

            </ul>
          </div>
          <div className="col-span-6 w-full h-full rounded-xl">
            <img src="/images/abt2.png" alt="" /> </div>
        </div>
        {/* 第二行，3:1 */}
        <div className=" grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-9 w-full h-full rounded-xl">
            <img src="/images/abt3.png" alt="" className="object-cover w-full h-full" /> </div>
          <div className="col-span-3 w-full h-full  rounded-xl">
            <img src="/images/abt4.png" alt="" className="object-cover w-full h-full" />
          </div>
        </div>

      </div>



      {/* 图片堆叠区域 */}
      {/* <div className="image-stack-container relative w-full h-screen flex items-center justify-center overflow-hidden">
        {abtImg.map((item, index) => (
          <div
            key={index}
            className="stack-img rounded-3xl overflow-hidden h-72 w-[80%]   absolute shadow-lg "
          >
            <div className="bg-[url('/images/noise.png')] absolute inset-0 size-full"></div>
            <img
              src={item.imgPath}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div> */}


    </div>
  );
}

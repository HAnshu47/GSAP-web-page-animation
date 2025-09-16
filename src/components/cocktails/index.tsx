import React, { useRef } from 'react'
import leftLeaf from '@/asset/images/cocktail-left-leaf.png'
import rightLeaf from '@/asset/images/cocktail-right-leaf.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import input from '../../videos/input.mp4'
import { ulList } from '../../../constants/index'
import { useMediaQuery } from 'react-responsive'

export default function Index() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    tl.from('.mojito', {
      opacity: 0.5,
      y: 100,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
    });
    tl.from("#text1", {
      opacity: 0,
      y: 10,
      ease: "power2.out",
    });
    tl.from("#text2", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: "power2.out",
    });

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',   // 以 #cocktails 元素作为滚动触发区域
        start: 'top 30%',        // 当 #cocktails 顶部到达视口 30% 的位置时开始动画
        end: 'bottom 80%',       // 当 #cocktails 底部到达视口 80% 的位置时结束动画
        scrub: true,             // 让动画和滚动条位置绑定（随滚动进度播放/回退）
      }
    })

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100, y: 200 //x：初始在水平方向偏左 100px ，y：初始在垂直方向偏下 100px
      })
      .from('#c-right-leaf', {
        x: 100, y: 100
      })

    const video = videoRef.current as HTMLVideoElement | null;
    let tween: gsap.core.Tween | undefined;
    let stInstance: ScrollTrigger | undefined;
    let metadataListener: (() => void) | undefined;

    const initVideoScroll = () => {
      if (!video) return;
      const endTime = Math.min(12, video.duration || 12);
      const startValue = isMobile ? "top 50%" : "center 60%";
      const endValue = isMobile ? "120% top" : "bottom top";
      tween = gsap.to(video, {
        currentTime: endTime,
        ease: "none",
        scrollTrigger: {
          trigger: ".video-section",
          start: startValue,
          end: endValue,
          scrub: true
        }
      });
      stInstance = tween.scrollTrigger as ScrollTrigger | undefined;
    };

    if (video) {
      if (video.readyState >= 1) {
        initVideoScroll();
      } else {
        const onLoaded = () => initVideoScroll();
        metadataListener = onLoaded;
        video.addEventListener("loadedmetadata", onLoaded, { once: true });
      }
    }
    return () => {
      if (metadataListener && video) {
        video.removeEventListener("loadedmetadata", metadataListener);
      }
      if (tween) tween.kill();
      if (stInstance) stInstance.kill(true);
    };



  });

  const mojito = 'MOJITO';

  return (
    <>
      <div className="w-full  " id='hero'>
        {/* 第一部分 mojito文字+介绍 */}
        <div className='relative z-10 w-full pointer-events-none'>
          <div className='w-[75%] flex-center flex-col text-center mx-auto flex '>
            <div className='flex'>
              {mojito.split('').map((item, index) => (
                <h1
                  key={index}
                  className='mojito inline text-transparent bg-clip-text bg-gradient-to-b from-white to-[#898989] md:mt-32 mt-20 text-8xl md:text-[15vw] font-modern-negra'
                >
                  {item}
                </h1>
              ))}
            </div>

            <div className='flex gap-5 mt-8 justify-between text-left'>
              <div className='flex flex-col gap-5 w-1/3'>
                <p>Cool. Crisp. Classic.</p>
                <p className='text-5xl text-[#e7d393]' id='text1'>
                  Sip the Spirit of Summer
                </p>
              </div>
              <div className='flex flex-col gap-5 w-1/3 text-left'>
                <p className='text-left' id='text2'>
                  Every cocktail on our menu is a blend of premium ingredients,
                  creative flair, and timeless recipes — designed to delight your
                  senses.
                </p>
                <p className='text-xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#898989] cursor-pointer'>
                  View cocktails
                </p>
              </div>
            </div>

            {/* 两侧叶子 */}
            <img src={leftLeaf} alt="" className='left-leaf' />
            <img src={rightLeaf} alt="" className='right-leaf' />
          </div>
        </div>


      </div>
      {/* 第二部分 列表 */}
      <div id='cocktails'>
        <div className='list'>
          {ulList.map((item, index) => (
            <div key={index} className='w-1/2'>
              <h2 >{item.title}</h2>
              <ul className='mt-5'>
                {item.data.map((child, i) => (
                  <li key={i} >
                    <div className='flex flex-col gap-2'>
                      <h3>{child.title}</h3>
                      <p>{child.descript}</p>
                    </div>
                    <span>-${child.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <img src={leftLeaf} alt="" id='c-left-leaf' />
        <img src={rightLeaf} alt="" id='c-right-leaf' />
      </div>

      {/* 顶层 noise 背景 */}
      <div className="absolute inset-0 bg-[url('@/asset/images/noise.png')] bg-cover bg-center opacity-70 pointer-events-none z-[999]" />
      <div className="video-section z-0 absolute inset-0 h-screen " >
        {/* 背景视频 */}
        <video className='video'
          ref={videoRef}
          src={input}
          preload="auto"
        // style={{
        //   position: "sticky",
        //   top: 0,
        //   left: 0,
        //   width: "100%",
        //   height: "calc(100vh - 120px)",
        //   objectFit: "contain",  // 背景填充全屏
        //   zIndex: 0,
        //   pointerEvents: 'none'
        // }}
        />
      </div>
    </>
  )
}

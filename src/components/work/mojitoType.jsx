import React, { useState, useRef, useEffect } from 'react'
import { allCocktails } from '../../../constants/index'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function MojitoType() {
  const [currentCocktail, setCurrentCocktail] = useState(allCocktails[0])
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const detailsRef = useRef(null)

  useGSAP(() => {
    gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
      scrollTrigger: {
        trigger: "#menu",
        start: "top top",
        end: "bottom center",
        scrub: 1.5
      }
    })
  })

  // 当 currentCocktail 改变时，触发图片动画
  useEffect(() => {
    gsap.fromTo(imageRef.current,
      { x: "-100%", opacity: 0 },   // 初始位置：在左边
      { x: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
    )

    gsap.fromTo(titleRef.current,
      { y: 0, opacity: 0 },   // 初始：往下
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    )
    gsap.fromTo(detailsRef.current,
      { y: 50, opacity: 0 },   // 初始：往下
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    )
  }, [currentCocktail])
  const getCocktail = (direction = 1) => {
    const currentIndex = allCocktails.findIndex(
      cocktail => cocktail.name === currentCocktail.name
    )
    if (currentIndex === -1) return null // 没找到当前项

    const newIndex = (currentIndex + direction + allCocktails.length) % allCocktails.length
    return allCocktails[newIndex]
  }
  return (
    <div>
      <div id="menu">
        <img id="m-left-leaf" src="/images/slider-left-leaf.png" alt="" />
        <img id="m-right-leaf" src="/images/slider-right-leaf.png" alt="" />

        {/* tabs */}
        <div className="cocktail-tabs">
          {allCocktails.map((cocktail, index) => (
            <button
              key={index}
              className="text-xl"
              onClick={() => setCurrentCocktail(cocktail)}
            >
              {cocktail.name}
            </button>
          ))}
        </div>

        <div className="content">
          <div className="cocktail"></div>
          <div className="flex items-center justify-between gap-4 w-full">
            <span className="flex items-center gap-2">
              <p className="text-xl">{getCocktail(-1).name}</p>
              <img
                src="/images/right-arrow.png"
                alt=""
                className='arrow w-auto h-auto cursor-pointer'
                onClick={() => setCurrentCocktail(getCocktail(-1))}
              />
            </span>
            <span className="flex items-center gap-2">
              <img
                src="/images/left-arrow.png"
                alt=""
                className='arrow w-auto h-auto cursor-pointer'
                onClick={() => setCurrentCocktail(getCocktail(1))}
              />
              <p className='text-xl'>{getCocktail(1).name}</p>
            </span>
          </div>
          <img ref={imageRef} src={currentCocktail.image} alt="" className="flex-grow" />

          <div className="recipe">
            <div className="info">
              Recipe for:
              <p id="title" ref={titleRef}>{currentCocktail.name}</p>
            </div>
            <div className="details" ref={detailsRef}>
              <h2>{currentCocktail.title}</h2>
              <p>{currentCocktail.description}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

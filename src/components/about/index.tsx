import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { abtImg } from '../../../constants/index'

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#about-heading",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#about-heading",
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    )
    gsap.fromTo(
      ".top-grid",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".top-grid",
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    )
  })
  return (
    <div id='about'>
      <div className='content'>

        <div className="md:col-span-8 ">
          <div className='badge'>Best Cocktails</div>

          <h2 id='about-heading'>Where every detail matters -from muddle to garnish</h2>
        </div>
        <div className='sub-content'>
          <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
          <div className='flex gap-2 justify-start'>
            <p className='flex gap-2 items-center bold text-2xl'>

              <span>
                4.5
              </span>/5
            </p>
            <p>More than +12000 customers</p>


          </div>
        </div>
      </div>
      <div className='top-grid mt-8 '>
        {
          abtImg.map((item, index) => (
            <div key={index}>
              <div className='noisy' />
              <img src={item.imgPath} alt="" />

            </div>
          ))
        }
      </div>
      <div className='top-grid'>

      </div>


    </div>
  )
}

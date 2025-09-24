import React from 'react'
import { storeInfo, openingHours, socials } from '../../../constants/index'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

export default function Index() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    tl.fromTo(
      "#contact h2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    tl.fromTo(
      "#contact .step",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.2 },
      "-=0.2"
    );
  });

  return (
    <div id='contact'>
      <div className="content">
        <h2>Where to Find Us</h2>
        <h3>Visit Our Bar</h3>
        <p>{storeInfo.address}</p>

        <h3>Contact Us</h3>
        <p>{storeInfo.contact.phone} | {storeInfo.contact.email}</p>
        <h3>Open Every Day</h3>
        {openingHours.map((item, index) => (
          <p>{item.day} : {item.time}</p>
        ))}
      </div>
      <div className=" flex-center flex">
        {socials.map((item) => (
          <a href={item.url}>
            <img src={item.icon} alt={item.name} className='p-4' /></a>
        ))}

      </div>
    </div>
  )
}

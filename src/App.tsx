import React from 'react'
import { Anchor, ConfigProvider } from 'antd';
import { navLinks } from '../constants/index';
import Logo from '/images/logo.png'

export default function App() {


  return (
    <>
      <div className="flex justify-between items-center p-8 bg-[black] fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="" width={40} height={40} />
          <p className="text-white font-bold text-xl" style={{ fontFamily: '"Modern Negra", sans-serif' }} >Velvet Pour</p>
        </div>

        <ConfigProvider
          theme={{
            components: {
              Anchor: {
                colorText: 'white',
                colorPrimary: 'white',
                colorPrimaryHover: 'white',
                colorPrimaryActive: 'white',
                colorTextSecondary: 'white',
                colorTextTertiary: 'white',
              }
            }
          }}
        >
          <Anchor
            direction="horizontal"
            targetOffset={0}
            className="flex justify-end bg-[black]"
            items={navLinks.map((link) => ({
              key: link.id,
              href: `#${link.id}`,
              title: link.title,
            }))}
          /></ConfigProvider>
      </div>
      <div className="">
        {
          navLinks.map((link) => (
            <div
              key={link.id}
              id={link.id}
              style={{
                width: '100vw',
              }}
            >
              {React.createElement(link.component)}
            </div>
          ))
        }
      </div>



    </>
  )
}


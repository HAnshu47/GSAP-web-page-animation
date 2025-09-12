import React from 'react'
import { Anchor, ConfigProvider } from 'antd';
import { navLinks } from '../constants/index';


export default function App() {


  return (
    <>
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
          style={{ paddingBlockStart: '44px', }}
          className="flex justify-end bg-[black] p-8"
          items={navLinks.map((link) => ({
            key: link.id,
            href: `#${link.id}`,
            title: link.title,
          }))}
        /></ConfigProvider>
      {
        navLinks.map((link) => (
          <div
            key={link.id}
            id={link.id}
            style={{
              width: '100vw',
              height: '500px',
              textAlign: 'center',
              background: 'rgba(17, 236, 17, 0.5)',
            }}
          >
           {React.createElement(link.component)}
          </div>
        ))
      }


    </>
  )
}


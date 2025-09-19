import React from 'react'
import { allCocktails } from '../../../constants/index'
import { useState } from 'react'

export default function MojitoType() {
  const [currentCocktail, setCurrentCocktail] = useState(allCocktails[0])

  return (
    <div>
      <div id="menu">
        <img id="m-left-leaf" src="/images/slider-left-leaf.png" alt="" />
        <img id="m-right-leaf" src="/images/slider-right-leaf.png" alt="" />
        {/* 标题 */}
        <div className="cocktail-tabs">
          {allCocktails.map((cocktail, index) => (
            <>
              <button key={index} className="text-xl"  onClick={() => {
                setCurrentCocktail(allCocktails[index])
              }}
              >{cocktail.name}</button>
            </>
          ))}
        </div>
        <div className='content' >
       
            <img src={currentCocktail.image} alt="" />
            <div>
              <div className="name">Recipe for: {currentCocktail.name}</div>
              <div className="details">
                <div className="title">{currentCocktail.title}</div>
                <div className="description">{currentCocktail.description}</div>
              </div>
            </div>
         

        </div>

      </div>


      {/* 酒杯 */}
      {/* 左右 --酒杯 -- 箭头 */}
    </div>
  )
}

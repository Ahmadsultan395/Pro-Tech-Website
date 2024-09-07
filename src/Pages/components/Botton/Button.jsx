import React from 'react'

export const Button1 = ({name,mt}) => {
  return (
    <button className={`bg-[#db8a3b] px-5 py-2 text-[0.9rem] md:text-[1rem] rounded-[5px] text-white
    hover:bg-transparent hover:text-black hover:border-2 border-2 hover:border-[#db8a3b] border-[#db8a3b] ${mt}`}>
        {name}
    </button>
  )
}

export const Button2 = ({name,mt}) => {
    return (
      <button className={`bg-[transparent] px-5 py-2 text-[0.9rem] md:text-[1rem] rounded-[5px] text-black
    hover:text-white hover:bg-[#db8a3b]  border-2 border-[#db8a3b] ] ${mt}`}>
          {name}
      </button>
    )
  }
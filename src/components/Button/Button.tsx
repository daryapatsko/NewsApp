import React,{FC} from 'react'
import "./Button.css"



interface IButton {
    customClass: string,
    handleClick: () => void,
}

const Button:FC<IButton> = ({handleClick,customClass}) => {
  return (
    <button type='button' className={customClass} onClick={handleClick}>
      
    </button>
  )
}

export default Button

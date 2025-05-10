import React from 'react'
import { DropdownArrowIcon } from '../icons'

function Avatar(props) {
    const { imgSrc, menu, ...restProps } = props

  return (

     <div className="avatar justify-center items-center">
        <div {...restProps} className='w-10 rounded-full !flex bg-gray-200 hover:bg-gray-300 items-center justify-center'>
            <img src={imgSrc} alt='avatar' /> 
        </div> 
        { menu && <span><DropdownArrowIcon className='w-3 absolute -bottom-1 -right-1 '/></span> }
    </div>
  )
}

export default Avatar
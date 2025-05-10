import React from 'react'

function MenuItem(props) {
    const { icon: Icon, text, ...restProps } = props

  return (
    <button className='btn bg-gray-50 gap-2 hover:opacity-80 w-full justify-start shadow-none border-gray-50'>
        <Icon  {...restProps}  />
        { text }
    </button>
  )
}

export default MenuItem
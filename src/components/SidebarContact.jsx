import React from 'react'
import { SearchIcon } from '../icons'
import MenuItem from './MenuItem'
import Avatar from './Avatar'

function SidebarContact() {
  return (
    <div className='fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 right-0 bg-gray-50 max-xl:hidden' >
     
      <div className='flex gap-2'>
      <span>Contact</span> <SearchIcon className='w-6' />
      </div>
      <MenuItem icon={Avatar} text="Puma Codecamp" className='w-11 h-11' imgSrc='https://www.svgrepo.com/show/504470/human-resources.svg' />
      <MenuItem icon={Avatar} text="Nhan Codecamp" className='w-11 h-11' imgSrc='https://www.svgrepo.com/show/504470/human-resources.svg' />
      <MenuItem icon={Avatar} text="Aor Codecamp" className='w-11 h-11' imgSrc='https://www.svgrepo.com/show/504470/human-resources.svg' />
    </div>
  )
}

export default SidebarContact
import React from 'react'
import MenuItem from './MenuItem'
import { FriendIcon, HomeIcon, MarketIcon, MenuIcon, MsgIcon, NotiIcon, PlayIcon, SearchIcon } from '../icons'
import useUserStore from '../stores/userStores'
import Avatar from './Avatar'
import { Link } from 'react-router'

function SidebarMenu() {
  const user = useUserStore(state => state.user)


  return (
    <div className='fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w-[220px] bg-gray-50 
      max-xl:w-[220px] max-lg:hidden'>
      <Link to='/profile'>
          <MenuItem icon={Avatar}  className='w-[35px]' imgSrc={user.profileImage} text={`${user.firstName} ${user.lastName} `} />
      </Link>

      <Link to='/'>
        <MenuItem icon={HomeIcon} text="Home" className='w-[35px]' />
      </Link>

      <Link to='/friends'>
        <MenuItem icon={FriendIcon} text="Friends" className='w-[35px]' />
      </Link>
      
      <MenuItem icon={MenuIcon} text="Memories" className='w-[35px]' />
      <MenuItem icon={MsgIcon} text="Save" className='w-[35px]' />
      <MenuItem icon={NotiIcon} text="Group" className='w-[35px]' />
      <MenuItem icon={PlayIcon} text="Video" className='w-[35px]' />
      <MenuItem icon={MarketIcon} text="Market Place" className='w-[35px]' />
      <MenuItem icon={SearchIcon} text="More" className='w-[35px]' />
    </div>
  )
}

export default SidebarMenu
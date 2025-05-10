import React from 'react'
import { FacebookLogo, FriendIcon, HomeIcon, MarketIcon, MenuIcon, MsgIcon, NotiIcon, PlayIcon, SearchIcon } from '../icons'
import useUserStore from '../stores/userStores'
import Avatar from './Avatar'
import { Link } from 'react-router'

function Header() {
    const logout = useUserStore(state => state.logout)
    const user = useUserStore(state => state.user)

  return (
    <header className='flex justify-between bg-white px-3 h-14 shadow-lg items-center fixed top-0 z-10 w-full'>
        <div className='flex gap-2 items-center'>
            {/* facebook logo */}
            <FacebookLogo className='w-12' />
            {/* search input */}
            <label class="input input-bordered input-sm flex items-center gap-2">
            <input type="text" class="grow" placeholder="Search" />
            <SearchIcon className='w-5 opacity-80'/>
            </label>
        </div>
        <div className='flex-1 flex justify-center gap-5'>
            <Link to='/' className="flex justify-center w-10 hover:border-b-2 hover:border-blue-900 hover:cursor-pointer"><HomeIcon className='w-8' /></Link>
            <Link to='/' className="flex justify-center w-10 hover:border-b-2 hover:border-blue-900 hover:cursor-pointer"><PlayIcon className='w-8' /></Link>
            <Link to='/' className="flex justify-center w-10 hover:border-b-2 hover:border-blue-900  hover:cursor-pointer"><MarketIcon className='w-8' /></Link>
            <Link to='/friends' className="flex justify-center w-10 hover:border-b-2 hover:border-blue-900 hover:cursor-pointer"><FriendIcon className='w-8' /></Link>
        </div>
        <div className='flex-1 flex gap-3 justify-end'>
            <div className="avatar justify-center items-center">
                <div className='w-10 rounded-full !flex bg-gray-200 hover:bg-gray-300 items-center justify-center'>
                    <MenuIcon className='w-5' />    
                </div>
            </div>
            <div className="avatar justify-center items-center">
                <div className='w-10 rounded-full !flex bg-gray-200 hover:bg-gray-300 items-center justify-center'>
                    <MsgIcon className='w-5' />    
                </div>
            </div>
            <div className="avatar justify-center items-center">
                <div className='w-10 rounded-full !flex bg-gray-200 hover:bg-gray-300 items-center justify-center'>
                    <NotiIcon className='w-5' />    
                </div>
            </div>
            <div className='dropdown dropdown-end'>
            <div tabindex="0" role="button" >
                {/* avatar */}
                
                    <Avatar imgSrc={user.profileImage} 
                    menu={true} />
                
            </div>
                {/* dropdown */}
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link to='/profile'>Profile</Link></li>
                    <li onClick={logout}><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
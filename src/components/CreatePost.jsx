import React, { useState } from 'react'
import Avatar from './Avatar'
import useUserStore from '../stores/userStores'
import { MenuIcon, MsgIcon, PlayIcon } from '../icons'
import PostForm from './PostForm'

function CreatePost() {

    const user = useUserStore(state => state.user)
    const [isOpen, setIsOpen] = useState(false)
    const closePostForm = () => {
      setIsOpen(false)
      document.getElementById('postform-modal').close()
    }

  return (
    <>
    
    <div className='card bg-rose-100 shadow-lg'>
        <div className='card-body'>
            <div className='flex gap-2'>
                <Avatar className='w-11 rounded-full' imgSrc={user.profileImage} />
                <button className='btn flex-1 rounded-full justify-start bg-rose-200 border-collapse'
                onClick={() => {
                    setIsOpen(true)
                    document.getElementById('postform-modal').showModal()
                }}
                >
                    <p className='text-gray-900 items-start justify-start text-left'>
                        What do you think?
                        </p> 
                </button>
            </div>
            <div className='flex gap-3 justify-between'>
                <div className='flex-1 flex gap-3 justify-center hover:bg-rose-200 h-[50px] rounded-lg items-center'>
                    <PlayIcon className='w-[35px]' />Video
                </div>
                <div className='flex-1 flex gap-3 justify-center hover:bg-rose-200 h-[50px] rounded-lg items-center'>
                    <MsgIcon className='w-[35px]' />Live
                </div>
                <div className='flex-1 flex gap-3 justify-center hover:bg-rose-200 h-[50px] rounded-lg items-center'>
                    <MenuIcon className='w-[25px]' />Stream
                </div>
            </div>
        </div>
    </div>
        <dialog id="postform-modal" className="modal">
        <div className="modal-box">
          <button // close model box
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closePostForm}
            >✕</button>
          {isOpen && <PostForm closePostForm={closePostForm} />}
        </div>
      </dialog>
    </>
  )
}

export default CreatePost
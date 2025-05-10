import React from 'react'
import Avatar from './Avatar'
import { FriendIcon, LikeIcon, MenuIcon, NotiIcon } from '../icons'
import CommentContainer from './CommentContainer'
import useUserStore from '../stores/userStores'
import usePostStore from '../stores/postStore'
import { toast } from 'react-toastify'


function PostItem(props) {

    const { post } = props
    const user = useUserStore(state => state.user)
    const token = useUserStore(state => state.token)
    const deletePosts = usePostStore(state => state.deletePosts)
    const getAllPosts = usePostStore(state => state.getAllPosts)
    const setCurrentPost = usePostStore(state => state.setCurrentPost)
    // console.log(post)

    const hdlDelete = async () => {
        try {
            console.log(post.id)
            await deletePosts(post.id, token)
            // getAllPosts(token)

        } catch (error) {
            const errMsg = error.response?.data?.error || error.message
            toast.error(errMsg)
            console.log(error)
        }
    }

    const hdlShowEditModal = () => {
        setCurrentPost(post)
        document.getElementById('editform-modal').showModal()
        
    }

  return (
    <div className='bg-white rounded-2xl mt-[30px] p-[24px]'>
        {/* profile */}
        <div className='flex  justify-between'>
            <div className='flex justify-between'>
                <div className='overflow-hidden rounded-full'>
                    <Avatar imgSrc={post.user.profileImage} className='w-11 h-11' />
                </div>
                <div className='flex flex-col items-start ml-3 justify-center'>
                    <p className='text-md font-bold opacity-85'>{post.user.firstName} {post.user.lastName}</p>
                    <p className='text-xs text-gray-500 opacity-70'>{new Date(post.createdAt).toDateString()}, {new Date(post.createdAt).toLocaleTimeString()}</p>
                </div> 
            </div>
           
            <div className='flex '>
                { user.id === post.userId &&
                    (
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn m-1 btn-xs bg-white shadow-none border-white">...</div>
                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={hdlShowEditModal}><a>edit</a></li>
                            <li onClick={hdlDelete}><a>delete</a></li>
                        </ul>
                    </div>
                    )    
            }
                <button className='btn btn-ghost btn-xs'>x</button>
            </div>
        </div>

        {/* post */}
        <div className='mt-[12px] mb-[12px]'>
            <div className=''>
                <div>
                    <p>{post.message}</p>
                    <img src={post.image} alt="" className='object-contain w-full' />
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center pe-4'>
            <div className='avatar items-end cursor-pointer gap-1'>
                <div className="!flex w-7 h-7 rounded-full justify-center items-center bg-blue-200">
                    <LikeIcon className='w-5' /> 
                </div>
                <p>{post.likes.length} likes</p>
            </div>
            <div className='flex'>
                <p>{post.comments.length} Comments</p>
            </div>
        </div>
        <div className='divider h-0 my-0'></div>
        <div className='flex gap-3 justify-between'>
                <div className='flex gap-3 items-center  justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1'>
                    <LikeIcon className='w-5' /> Like
                </div>
                <div className='flex gap-3 items-center  justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1'>
                <NotiIcon className='w-5' /> Comment
                </div>
                <div className='flex gap-3 items-center  justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1'>
                <FriendIcon className='w-5' />  Share
                </div>
        </div>
        <div className='divider h-0 my-0'></div>
        <CommentContainer />

    </div>
  )
}

export default PostItem
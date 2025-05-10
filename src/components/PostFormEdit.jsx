import React, { useState } from 'react'
import Avatar from '../components/Avatar'
import useUserStore from '../stores/userStores'
import { PhotosIcon } from '../icons'
import { toast } from 'react-toastify'
import AddPicture from './AddPicture'
import usePostStore from '../stores/postStore'

function PostFormEdit(props) {
	const {closePostForm} = props
	const user = useUserStore(state=>state.user)
	const token = useUserStore(state=>state.token)

	// updatePost < createPost
	const updatePost = usePostStore(state => state.updatePost)
	const currentPost = usePostStore(state => state.currentPost)

	const [message, setMessage] = useState(currentPost.message)
	const [addPic, setAddPic] = useState(false)
	const [file, setFile] = useState(null)
	const getAllPosts = usePostStore(state => state.getAllPosts)
	const [removePic, setRemovePic] = useState(false)

	console.log(currentPost)

	const hdlUpdatePost = async () => {
		try {
			body.append('message', message)
			if (file) {
				body.append('image', file)
			}
			if (removePic) {
				body.append('removePic', true)
			}
			await updatePost(currentPost.id, token, body)
			getAllPosts()
			document.getElementById('editform-modal').close()
			
		}catch(err) {
			const errMsg = err.response?.data?.error || err.message
			console.log(err)
			toast.error(errMsg)
		}
	}

	return (
		<div className='flex flex-col gap-2'>
			<h3 className="text-xl text-center">Update post</h3>
			<div className="divider mt-1 mb-0"></div>
			<div className="flex gap-2">
				<Avatar className='w-11 h-11 rounded-full'
					imgSrc={user.profileImage}
				/>
				<div className="flex flex-col">
					<div className="text-sm">{user.firstName} {user.lastName}</div>
					<select className='select bg-slate-200 select-xs w-full max-w-xs'>
						<option disabled>who can see?</option>
						<option>public</option>
						<option>friends</option>
					</select>
				</div>
			</div>
			<textarea className='textarea textarea-ghost'
				placeholder={`what do you think? ${user.firstName}`}
				value={message}
				onChange={e=>setMessage(e.target.value)}
				rows={message.split('\n').length}
			></textarea>

			{
				currentPost.image && !removePic && (
				<div className='border flex justify-evenly items-center'>
					<p><img src={currentPost.image} className='h-[100px] object-contain' alt="" /></p>
					<button className='btn btn-primary'>Remove</button>
				</div>
				)
			}

			{ addPic && 
				<AddPicture file={file} setFile={setFile}  />
			}
			<div className="flex border rounded-lg p-2 justify-between items-center">
				<p>add with your post</p>
				<div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 
					hover:bg-slate-200 active:scale-110"
					onClick={()=>setAddPic(prv=>!prv)}
				>
					<PhotosIcon className='w-7'/>
				</div>
			</div>
			<button className='btn btn-sm btn-primary'
				onClick={hdlUpdatePost}	
				disabled={message.trim().length === 0 && !file}
			>Create Post</button>
		</div>
	)
}

export default PostFormEdit
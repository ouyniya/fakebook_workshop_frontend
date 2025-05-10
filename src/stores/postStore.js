import axios from 'axios'
import {create} from 'zustand'

const usePostStore = create( (set, get)=> ({
	posts : [],
	currentPost : null,
	loading : false,
	createPost : async (body, token, user) => {
		const rs = await axios.post('http://localhost:8899/post',body,{
			headers : { Authorization : `Bearer ${token}` }
		})
		// console.log(rs.data)
		set(state => ({
			posts: [ {...rs.data, user, likes :[], comments:[]}, ...state.posts ]
		}))
	},
	getAllPosts : async (token) => {
		set({loading: true})// object all deleted except for 
		// loading
		const rs = await axios.get('http://localhost:8899/post', {
			headers : { Authorization: `Bearer ${token}` }
		})
		set({posts : rs.data.posts, loading: false} )
	},
	deletePosts: async (postId, token) => {
		const rs = axios.delete(`http://localhost:8899/post/${postId}`, {
			headers : { Authorization: `Bearer ${token}` }
		})
		set( state => ({
			posts: [ ...state.posts ].filter((post) => post.id !== postId )
		}))
	},
	setCurrentPost: (post) => set({ currentPost: post }),
	updatePost: async (postId, token, body) => {
		const rs = await axios.put(`http://localhost:8899/${postId}`, body, { headers : { Authorization: `Bearer ${token}` } }
	)
	} 
}) )

export default usePostStore

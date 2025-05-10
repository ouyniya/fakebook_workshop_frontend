import React, { useState } from 'react'
import { FacebookTitle } from '../icons'
import Register from './Register'
import { toast } from 'react-toastify'
import axios from 'axios'
import useUserStore from '../stores/userStores'

function Login() {
  const login = useUserStore(state => state.login)
  // const token = useUserStore(state => state.token)
  // const user = useUserStore(state => state.user)

  // console.log(user.firstName)

  const [input, setInput] = useState({
    identity: '',
    password: ''
  })

  const hdlChange = (e) => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const hdlLogin = async (e) => {
    try {
      e.preventDefault()
      const { identity, password } = input

      // validation
      if (!identity.trim() || !password.trim()) {
        return toast("Please fill all inputs")
      }

      // send api
      let data = await login(input)
      // toast.success(`Login successfully`)

      // send api old

      // const rs = await axios.post('http://localhost:8899/auth/login', input)
      // toast.success(`Login successfully, Welcome!!, ${rs.data.user.firstName}`)
      // console.log(rs.data)
      // localStorage.setItem('token', rs.data.token)
      // localStorage.setItem('user', JSON.stringify(rs.data.user))



    } catch (error) {
      const errMsg = error.response?.data?.error || error.message
      toast.error(errMsg)
    }
  }

  return (
    <>
      <div className="pt-20 h-[700px] pb-28 bg-gray-200 items-center">
        <div className='p-5 m-auto max-w-screen-lg min-h-[540px] flex justify-between border h-12 w-34 bg-gradient-to-r rounded-2xl from-[#9f8189] via-[#f3abb6] to-[#ffcad4]'>
          <div className="flex flex-col gap-4 mt-20 basis-3/5  items-start justify-start text-white pt-10 pl-12">
            {/* <h1 className='text-5xl'>Facebook Title</h1> */}
            <div className='text-2xl'>
              <FacebookTitle className='ms-6' hidden={false} />
              {/* <h1 className='ms-8'>::Welcome...<strong>{user.firstName}::</strong></h1> */}
              <h2 className='ms-8 mt-5 pr-10'>FakeBook helps you connect and share with the people.</h2>
              <p className='ms-8 mt-5 pr-10 text-[#fff] text-[16px]'>*** this is not real facebook site</p>
            </div>
          </div>
          <div className='flex flex-1 items-center justify-center'>
          <div className="card glass w-full">
            
            <div className="card-body flex justify-center">
              <h2 className="card-title flex justify-center">Login Form</h2>
              <form onSubmit={hdlLogin} >
                <div className='card-body flex flex-col gap-5 p-5'>
                  <input type="text" 
                  placeholder='Email or phone number'
                  className='input input-bordered w-full'
                  name='identity'
                  onChange={hdlChange}
                  value={input.identity}
                  />
                  <input type="password"
                  placeholder='password'
                  className='input input-bordered w-full' 
                  name='password'
                  onChange={hdlChange}
                  value={input.password}
                  />
                  
                  <div className="card-actions justify-center">
                    <button className="btn btn-active btn-neutral w-full">Login</button>
                    <a className='text-center link link-hover flex-grow-0'>Forgot password?</a>
                    <hr />

                    <button type='button' className="btn bg-[#9f8189] border-[#9f8189] text-white w-full hover:bg-[#9f8189]" onClick={()=>document.getElementById('register-form').showModal()}>Create new account</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      <dialog id="register-form" className="modal">
        <div className="modal-box">
          <button // close model box
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={e => document.getElementById('register-form').close()}
            >✕</button>
          <Register />
        </div>
      </dialog>
    </>
  )
}

export default Login
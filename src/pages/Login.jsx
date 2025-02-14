import React from 'react'
import { FacebookTitle } from '../icons'

function Login() {
  return (
    <>
      {/* <div data-theme="dark">
        Header
        <button className='btn btn-active btn-primary'>click</button>
      </div> */}
      <div className="pt-20 h-[700px] pb-28 bg-gray-200 items-center">
        <div className='p-5 m-auto max-w-screen-lg min-h-[540px] flex justify-between border h-12 w-34 bg-gradient-to-r rounded-2xl from-[#614385] via-[#516395] to-[#516395]'>
          <div className="flex flex-col gap-4 mt-20 basis-3/5  items-start justify-start text-white pt-10 pl-12">
            {/* <h1 className='text-5xl'>Facebook Title</h1> */}
            <div className='text-2xl'>
              <FacebookTitle className='ms-6' hidden={false} />
              <h2 className='ms-8 mt-5 pr-10'>Fackbook helps you connect and share with the people.</h2>
              <p className='ms-8 mt-5 pr-10 text-lime-300 text-[16px]'>*** this is not real facebook site</p>
            </div>
          </div>
          <div className='flex flex-1 items-center justify-center'>
          <div class="card glass w-full">
            
            <div class="card-body flex justify-center">
              <h2 class="card-title flex justify-center">Login Form</h2>
              <form>
                <div className='card-body flex flex-col gap-5 p-5'>
                  <input type="text" 
                  placeholder='Email or phone number'
                  className='input input-bordered w-full'/>
                  <input type="password"
                  placeholder='password'
                  className='input input-bordered w-full' />
                  
                  <div class="card-actions justify-center">
                    <button class="btn btn-active btn-neutral w-full">Login</button>
                    <a className='text-center link link-hover flex-grow-0'>Forgot password?</a>
                    <hr />
                    <button class="btn btn-active bg-lime-500 border-lime-500 w-full">Create new account</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
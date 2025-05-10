import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'


// not re render 
const initInput = {
    firstName: '',
    lastName: '',
    identity: '',
    password: '',
    confirmPassword: ''
}

function Register() {
    
    const [input, setInput] = useState(initInput)

    const hdlChange = (e) => {
        setInput(prev => ({ 
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const hdlClearInput = () => {
        setInput(initInput)
    }

    const hdlRegister = async (e) => {
        try {
            e.preventDefault()
            const { firstName, lastName, identity, password, confirmPassword } = input

            // validation
            if (!firstName.trim() || !lastName.trim() || !identity.trim() || !password.trim() || !confirmPassword.trim()) {
                return toast("Please fill all inputs")
            }

            if (password !== confirmPassword) {
                return toast("Password and Confirm password unmatched!!")
            }

            // toast.success(JSON.stringify(input), {position: 'top-right'})

            // ** send request to api (backend)
            const rs = await axios.post('http://localhost:8899/auth/register', input)
            // toast(JSON.stringify(rs.data))

            hdlClearInput()
            document.getElementById('register-form').close()
            toast("Register successfully")

        } catch (err) {
            // console.log(err)
            const errMsg = err.response?.data?.error || err.message ;
            toast.error(errMsg)
        }
    }
    
  return (
    <div>
    <form method="dialog" onSubmit={hdlRegister}>
          <h3 className="text-2xl font-bold mb-5">Create new account</h3>
          <div className='flex gap-2 mb-3'>
            <input type="text" placeholder='First Name' name='firstName'
                className='input input-bordered w-full'
                onChange={hdlChange}
                value={input.firstName}
            />
            <input type="text" placeholder='Last Name' name='lastName'
                className='input input-bordered w-full'
                onChange={hdlChange}
                value={input.lastName}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <input type="text" placeholder='Email or Phone Number' name='identity'
                className='input input-bordered w-full'
                onChange={hdlChange}
                value={input.identity}
            />
            <input type="password" placeholder='New Password' name='password'
                className='input input-bordered w-full'
                onChange={hdlChange}
                value={input.password}
            />
            <input type="password" placeholder='Confirm Password' name='confirmPassword'
                className='input input-bordered w-full'
                onChange={hdlChange}
                value={input.confirmPassword}
            />
          </div>
          <button 
            className='btn bg-rose-300 w-full mt-5'
            >Sign up</button>
          <button // reset data 
            className='btn btn-active w-full mt-5'
            type='button'
            onClick={hdlClearInput}
          >Reset</button>
    </form>
    </div>
  )
}

export default Register;
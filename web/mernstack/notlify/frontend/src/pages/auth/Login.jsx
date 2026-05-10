import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import TextInput from '../../components/TextInput'
import ActionButton from '../../components/ActionButton'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { LOGIN_URL } from '../../utils/api.js'
import { toast } from 'react-hot-toast'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(LOGIN_URL, data)
      console.log(response.data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        localStorage.setItem('usertoken', response.data.token)
        navigate('/')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error("Network error occurred")
      console.log("ERR:", error)
    }
  }

  return (
    <AuthLayout>
      <h1 className='text-3xl font-bold mb-2'>Welcome to Notlify</h1>
      <h1 className='text-xl mb-4'>Sign in to continue</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Email
          </label>
          <TextInput
            id='email'
            type='email'
            hint="Enter your email"
            { ...register('email') }
            className="py-2 px-4 rounded-lg w-full border border-gray-300 bg-gray-100"
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Password
          </label>
          <TextInput
            id='password'
            type='password'
            hint="Enter your password"
            { ...register('password') }
            className="py-2 px-4 rounded-lg w-full border border-gray-300 bg-gray-100"
          />
        </div>

        <div className='flex items-center gap-4'>
          <ActionButton text="Login" />
          <Link to={'/register'} className='hover:text-blue-500'>Don't have an account? Signup</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login
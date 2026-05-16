import React from 'react'
import AuthLayout from '../../layouts/AuthLayout.jsx'
import TextInput from '../../components/TextInput.jsx'
import ActionButton from '../../components/ActionButton.jsx'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { FORGOT_PASSWORD_URL } from '../../utils/api.js'
import { toast } from 'react-hot-toast'

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleForgotPassword = async (data) => {
    try {
      const response = await axios.post(FORGOT_PASSWORD_URL, data)
      console.log(response.data)
      // if (response.data.status == true) {
        toast.success(response.data.message)
        localStorage.setItem('usertoken', response.data.token)
        // navigate('/reset-password')
      // } else {
      //   toast.error(response.data.message)
      // }

    } catch (error) {
      toast.error("Network error occurred")
      console.log("ERR:", error)
    }
  }

  return (
    <AuthLayout>
      <h1 className='text-3xl font-bold mb-2'>Forgot Your Password?</h1>
      <h1 className='text-xl mb-4'>Enter your email to reset your password</h1>
      <form onSubmit={handleSubmit(handleForgotPassword)}>
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

        <div className='flex items-center gap-4'>
          <ActionButton text="Send OTP" />
          {/* <Link to={'/register'} className='hover:text-blue-500'>Don't have an account? Signup</Link> */}
        </div>
      </form>
    </AuthLayout>
  )
}

export default ForgotPassword
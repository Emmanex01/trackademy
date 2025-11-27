'use client'
import { login } from '@/app/actions/auth'
import { FormState } from '@/lib/definitions'
import { init } from 'next/dist/compiled/webpack/webpack'
import { useRouter } from 'next/navigation';
import React, { useActionState, useEffect } from 'react'


const initialState: FormState = { errors: {} };
const Login = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(login, initialState);

  useEffect(() => {
    if (state?.success) {
      router.push('/teacher');
    }
  }, [state, router]);

  return (
    <div>
      <div className='container border-2 border-green-500 mx-auto'>
        <div className='container border-2 border-red-500 bg-black h-70'>

        </div>

        <div className='my-5'>
          <h1 className='text-center text-4xl font-semibold'>Welcome to EduFlow</h1>
          <p className='text-center my-2'>Sign in to continue your learning Journey</p>

          <form action={action} className='w-lg mx-auto my-8'>
            <div className='mb-5'>
              <label className='mb-2 block font-semibold'>I am a</label>
              <select className='block w-full px-4 py-2 bg-gray-300 rounded'
                name="usertype">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>

              {state.errors?.usertype && (
                <p className="text-red-500 text-sm">{state.errors.usertype[0]}</p>
              )}
            </div>


            <div className='mb-5'>
              <label className='block mb-2 font-semibold'>Email/Phone</label>
              <input
                className='block w-full px-4 py-2 bg-gray-300 rounded'
                name='email'
                type="text"
              />

              {state.errors?.email && (
                <p className="text-red-500 text-sm">
                  {state.errors.email[0]}
                </p>
              )}
            </div>


            <div>
              <label className='block mb-2 font-semibold'>Password</label>
              <div className='flex gap-3 w-full px-4 py-2 bg-gray-300 rounded'>
                <i className='bx bx-lock'></i>
                <input name='password' type="password" placeholder='Password' />
              </div>

              {state.errors?.password && (
                <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
              )}
            </div>


            <div className='text-sm my-4 flex justify-between'>
              <label htmlFor=""><input type="checkbox" /> Remember me</label>

              <a href="">Forgot Password?</a>
            </div>

            <div className='my-8'>
              <button disabled={pending} className='block w-full text-center text-white bg-black p-2 rounded-lg mb-5'>
                Sign in
              </button>

              <button className='flex justify-center w-full gap-3 border p-2 rounded-lg'>
                <i className='bx bx-lock border-2 w-5'></i>
                <span>Login with Google</span>
              </button>
            </div>


            <div className='flex justify-center gap-3'>
              <p>Don't have an account?</p>

              <a className='font-semibold' href="">Sign up here</a>
            </div>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Login

import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='container border-2 border-green-500 mx-auto'>
        <div className='container border-2 border-red-500 bg-black h-70'>

        </div>

        <div className='my-5'>
          <h1 className='text-center text-4xl font-semibold'>Welcome to EduFlow</h1>
          <p className='text-center my-2'>Sign in to continue your learning Journey</p>

          <form className='w-lg mx-auto my-8'>
            <div className='mb-5'>
              <label className='mb-2 block font-semibold' htmlFor="usertype">I am a</label>
              <select className='block w-full px-4 py-2 bg-gray-300 rounded outline-0' name="usertype" id="usertype">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <div className='mb-5'>
              <label className='block mb-2 font-semibold' htmlFor="email-phone">Email/Phone number</label>
              <input className='block w-full px-4 py-2 bg-gray-300 rounded outline-0' type="text" placeholder='' />
            </div>

            <div>
              <label className='block mb-2 font-semibold' htmlFor="password">Password</label>
              <div className='flex gap-3 w-full px-4 py-2 bg-gray-300 rounded outline-0'>
                <i className='bx bx-lock border-2 w-5'></i>
                <input type="password" placeholder='Password' />
              </div>
            </div>

            <div className='text-sm my-4 flex justify-between'>
              <label htmlFor=""><input type="checkbox" /> Remember me</label>

              <a href="">Forgot Password?</a>
            </div>

            <div className='my-8'>
              <button className='block w-full text-center text-white bg-black p-2 rounded-lg mb-5'>
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

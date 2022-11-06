import React from 'react';
import backgrounddImg from '../img/backgroundd.jpg'
import{FcGoogle} from 'react-icons/fc'
import{AiFillApple} from 'react-icons/ai'


function Login() {
    return(
        <div className='relative w-full h-screen bg-zinc-900/90' >
             <img  className='absolute w-full h-screen object-cover mix-blend-overlay'  src={backgrounddImg}alt='/' />
    
        

             
             
          <div className='flex justify-center items-center h-full'>
          <form className='max-w-[400px] mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>Login</h2>
            <div className='flex justify-between py-8 pl-3'>
                <p className='font- bold border hover:shadow-xl px-6 py-2 relative flex items-center '><AiFillApple className='mr-2'/> Apple</p>
                <p className='font- bold border hover:shadow-xl px-6 py-2 relative flex items-center '><FcGoogle className='mr-2'/>Google</p>
            </div>
            <div>
                <label className='font-bold flex flex-col mb-4'>Username</label>
                <input className='border relative bg-gray-100 p-2 w-[95%]' type='text'></input>
            </div>
            <div>
                <label className='font-bold flex flex-col'>Password</label>
                <input className='border relative bg-gray-100 p-2 w-[95%]' type='Password'></input>
            </div>
            <button className=' w-full py-3 mt-8 bg-sky-300 hover:bg-sky-200 relative'>Login</button>
            <p className='font-bold  flex items-center mt-2'> <input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='font-bold text-center  mt-8'>Not a member signup now</p>
           </form>
          </div>
        </div>
    )
  
}

export default Login

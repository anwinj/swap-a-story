import React from 'react'
import Logo from '../assets/Images/logo.png'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/Images/home_image.png'

function Home({insideRegister}) {
  return (
    <>
        <div className='w-full h-screen grid lg:grid-cols-2 sm:grid-cols-1 bg-slate-900 p-7'>
            <div className=' bg-slate-200 rounded-lg'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='flex items-center'>
                        <img src={Logo} alt="Logo" width={'50px'} />
                        <h2 className='ps-3 text-2xl font-medium'>Swap a Story</h2>
                    </div>
                    <div className='mt-8'>
                        {
                            insideRegister?<h3 className='text-5xl font-light text-slate-800'>Sign Up</h3>:
                            <h3 className='text-5xl font-light text-slate-800'>Welcome Back</h3>
                        }
        
                    </div>

                    <form className='mt-7 flex flex-col justify-between '>
                        {
                            insideRegister&& <div className='flex flex-col'><label placeholder className='text-xl font-medium mb-2' htmlFor="">Username : </label>
                            <input type="text" placeholder='Enter username' className='rounded-md border-2 border-gray-300 px-8 py-1 mb-4' /></div>
                        }
                        <label className='text-xl font-medium mb-2' htmlFor="">Email : </label>
                        <input type="email" placeholder='Enter email' className='rounded-md border-2 border-gray-300 px-8 py-1 mb-4' />
                        <label className='text-xl font-medium mb-2' htmlFor="">Password : </label>
                        <input type="password" placeholder='*********' className='rounded-md border-2 border-gray-300 px-8 py-1' />
                    
                    </form>

                    {
                        insideRegister?<div className='w-25 flex flex-col justify-center items-center' >
                            <button className='bg-slate-900 rounded mt-8 px-6 py-2 text-slate-200 ' type='submit'>Register</button>
                            <p className='mt-6'>Already have an Account? Click here to <span className='underline underline-offset-4'><Link  to={'/'}>Login</Link></span> </p>
                        </div>:
                        
                        <div className='w-25 flex flex-col justify-center items-center' >
                            <button className='bg-slate-900 rounded mt-8 px-6 py-2 text-slate-200 ' type='submit'>Login</button>
                            <p className='mt-6'>Not a User? Click here to <span className='underline underline-offset-4'><Link  to={'/register'}>Register</Link></span> </p>
                        </div>
                    }
                </div>
                
            </div>

            <div className='flex flex-col justify-center items-center'>
                <img src={Logo} width={'100px'} alt="" />
                <h2 className='text-slate-400 text-5xl mt-2 font-thin'>SWAP A STORY</h2>
                <h4 className='text-slate-200 mt-4 text-xl'>Trade Your Favorites, Discover New Narratives.</h4>
                <div className='flex'>
                    <img className='m-8' src={LandingImg} width={'350px'} alt="" />
                    <p className='m-5 p-8 text-md text-slate-300 text-justify'>"Swap a Story" is an innovative book exchange platform designed for avid readers and book enthusiasts. The project facilitates the joy of discovering new narratives by connecting individuals through the art of book swapping. Users can list their collection of books, explore a diverse array of titles, and engage in an enriching exchange experience.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
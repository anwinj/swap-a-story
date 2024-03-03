import React, { useState } from 'react'
import Logo from '../assets/Images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import LandingImg from '../assets/Images/home_image.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';

function Home({insideRegister}) {

    const navigate = useNavigate()
    const [userData,setUserData]= useState({
        username:"",email:"",password:""
    })
    const [loginStatus,setLoginStatus] = useState(false)

    const handleRegister = async (e) =>{
        e.preventDefault()
        // console.log(userData);
        const {username,email,password} = userData
        if(!username||!email||!password){
            toast.info("Please fill the form completely!!!...")
        }
        else{
            try{
                const result = await registerAPI(userData)
                // console.log(result);
                if(result.status===200){
                    toast.success(`${result.data.username} has been registered successfully!!!`)
                    setUserData({username:"",email:"",password:""})
                    setTimeout(()=>{
                        navigate('/')
                    },2500)
                }
                else{
                    toast.warning(result.response.data)
                }    
            }catch(err){
                console.log(err);
            }
        }
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        const {email,password} = userData
        if(!email||!password){
            toast.info("Please fill the form completely!!!")
        }
        else{
            try{
                const result = await loginAPI({email,password})
                // console.log(result);
                if(result.status===200){
                sessionStorage.setItem("userDetails",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                setLoginStatus(true)
                setTimeout(() => {
                    navigate('/dashboard')
                    setLoginStatus(false)
                    setUserData({email:"",password:""})
                }, 1500);
            }
            else{
                toast.warning(result.response.data)
            }
            }catch(err){
                console.log(err);
            }
        }
    }

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
                            insideRegister&& <div className='flex flex-col'><label placeholder className='text-xl font-medium mb-2'>Username : </label>
                            <input onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} type="text" placeholder='Enter username' className='rounded-md border-2 border-gray-300 px-8 py-1 mb-4' /></div>
                        }
                        <label className='text-xl font-medium mb-2'>Email : </label>
                        <input onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} type="email" placeholder='Enter email' className='rounded-md border-2 border-gray-300 px-8 py-1 mb-4' />
                        <label className='text-xl font-medium mb-2' >Password : </label>
                        <input onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} type="password" placeholder='*********' className='rounded-md border-2 border-gray-300 px-8 py-1' />
                    
                    </form>

                    {
                        insideRegister?<div className='w-25 flex flex-col justify-center items-center' >
                            <button className='bg-slate-900 rounded mt-8 px-6 py-2 text-slate-200 ' type='submit' onClick={handleRegister}>Register</button>
                            <p className='mt-6'>Already have an Account? Click here to <span className='underline underline-offset-4'><Link  to={'/'}>Login</Link></span> </p>
                        </div>:
                        
                        <div className='w-25 flex flex-col justify-center items-center' >
                            <button onClick={handleLogin} className='bg-slate-900 rounded mt-8 px-6 py-2 text-slate-200 ' type='submit'>
                                {
                                    loginStatus?
                                    <div class="flex text-light">Logging In...<svg class="ms-2 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24">
                                    <path
                                      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
                                    </path>
                                    </svg></div>
                                   :<p>Login</p>
                                }
                            </button>
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

        <ToastContainer autoClose={2500} theme='colored' />
    </>
  )
}

export default Home
import React from 'react'
import Logo from '../assets/Images/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function SideBar({insideDashboard, insideExplore, insideViewRequests, insideProfile}) {

  const navigate = useNavigate()

  const handleLogout = ()=>{
    sessionStorage.removeItem("userDetails")
    sessionStorage.removeItem("token")
    navigate('/')
  }

  return (
    <>
      <div className='w-48 h-screen text-slate-200 flex flex-col justify-between'>
        <div className='mt-3 p-2'>

        <div className='flex flex-col items-center mb-6 mt-4'>
          <img className='mb-2' src={Logo} alt="Logo" width={'50px'} />
          <h2 className='ps-3 text-xl font-light'>Swap a Story</h2>
        </div>

          <Link to={'/dashboard'}  className={ `${insideDashboard&&"bg-slate-200 text-slate-900"} mb-4 ml-1 w-full mt-6 p-3 flex item-center hover:bg-slate-200 hover:text-slate-900 rounded` }  >
            <h4 className='text-lg'><i className="fa-solid fa-inbox me-2"></i>Dashboard</h4>
          </Link>
  
          <Link to={'/explore'} className={ `${insideExplore&&"bg-slate-200 text-slate-900"} mb-4 ml-1 w-full p-3 flex item-center hover:bg-slate-200 hover:text-slate-900 rounded` }>
            <h4 className='text-lg'><i className="fa-solid fa-magnifying-glass me-2"></i>Explore</h4>
          </Link>
  
          <Link to={'/viewRequests'} className={ `${insideViewRequests&&"bg-slate-200 text-slate-900"} mb-4 ml-1 w-full p-3 flex item-center hover:bg-slate-200 hover:text-slate-900 rounded` }>
            <h4 className='text-lg'><i className="fa-solid fa-arrow-right-arrow-left me-2"></i>Requests</h4>
          </Link>
  
          <Link to={'/profile'} className={ `${insideProfile&&"bg-slate-200 text-slate-900"} mb-4 ml-1 w-full p-3 flex item-center hover:bg-slate-200 hover:text-slate-900 rounded` }>
            <h4 className='text-lg'><i className="fa-solid fa-user me-2"></i>Profile</h4>
          </Link>
        </div>

        <button onClick={handleLogout} className='mt-3 ml-1 mb-3 p-3 w-full flex item-center hover:bg-slate-200 hover:text-slate-900 rounded'>
          <h4 className='text-lg'><i className="fa-solid fa-right-from-bracket me-2"></i>Logout</h4>
        </button>
      </div>
    </>
  )
}

export default SideBar
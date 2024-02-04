import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({insideDashboard}) {
  return (
    <>
      <div className='w-48 h-screen static text-slate-200 flex flex-col justify-between'>
        <div>
          <Link to={'/dashboard'} className='mt-8 ml-1 w-full p-3 flex item-center hover:bg-slate-200 hover:text-slate-900 rounded'>
            <h4 className='text-lg'><i class="fa-solid fa-inbox me-2"></i>Dashboard</h4>
          </Link>
  
          <Link to={'/explore'} className='mt-3 ml-1 w-full p-3 flex item-center hover:bg-slate-200 hover:text-slate-900 rounded'>
            <h4 className='text-lg'><i class="fa-solid fa-magnifying-glass me-2"></i>Explore</h4>
          </Link>
  
          <Link to={'/swapRequests'} className='mt-3 ml-1 p-3 w-full flex item-center hover:bg-slate-200 hover:text-slate-900 rounded'>
            <h4 className='text-lg'><i class="fa-solid fa-arrow-right-arrow-left me-2"></i>Requests</h4>
          </Link>
  
          <Link to={'/profile'} className='mt-3 ml-1 p-3 w-full flex item-center hover:bg-slate-200 hover:text-slate-900 rounded'>
            <h4 className='text-lg'><i class="fa-solid fa-user me-2"></i>Profile</h4>
          </Link>
        </div>

        <Link to={'/home'} className='mt-3 ml-1 mb-3 p-3 w-full flex item-center hover:bg-slate-200 hover:text-slate-900 rounded'>
          <h4 className='text-lg'><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</h4>
        </Link>
      </div>
    </>
  )
}

export default SideBar
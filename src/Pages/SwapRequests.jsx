import React from 'react'
import SideBar from '../Components/SideBar'

function SwapRequests() {
  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar />

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div className=''>
              <div className='m-6'>
                <h3 className='text-3xl text-blue-900'>Swap Requests</h3>
              </div>

              <div className='flex flex-col p-4 mt-6'>
                <div className='bg-slate-100 w-full h-66 rounded-lg shadow p-4 flex justify-evenly items-center'>
                  <img width={'140px'} src="https://m.media-amazon.com/images/I/41I-jKuRMCL._SY445_SX342_.jpg" alt="" />
                  <div>
                    <h5 className='text-2xl font-bold'>Book Name</h5>
                    <h6 className='text-2xl font-thin'>Author</h6>
                  </div>
                  <i class="fa-solid fa-arrow-right-arrow-left fa-2xl"></i>
                  <div>
                    <h5 className='text-2xl font-bold'>Book Name</h5>
                    <h6 className='text-2xl font-thin'>Author</h6>
                  </div>
                  <img width={'140px'} src="https://m.media-amazon.com/images/I/81J6APjwxlL._SL1500_.jpg" alt="" />
                  <button className='bg-green-600 p-3 text-slate-200 rounded'>Approve<i class="fa-solid fa-check ms-2"></i></button>
                  <button className='bg-red-600 p-3 text-slate-200 rounded'>Deny<i class="fa-solid fa-xmark ms-2"></i></button>
                </div>
              </div>
              
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default SwapRequests
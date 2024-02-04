import React from 'react'
import SideBar from '../Components/SideBar'

function BookDetails() {
  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar />

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div className=''>
              <h1>Book Details</h1>
              
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetails
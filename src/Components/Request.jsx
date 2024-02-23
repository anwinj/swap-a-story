import React from 'react'
import { SERVER_URL } from '../Services/serverURL'

function Request({request}) {
  return (
    <>
        <div className='flex flex-col p-4 mt-6'>
                <div className='bg-slate-100 w-full h-66 rounded-lg shadow p-4 flex justify-evenly items-center'>
                  <img width={'140px'} src={`${SERVER_URL}/uploads/${request.bookImage1}`} alt="" />
                  <div>
                    <h5 className='text-2xl font-bold'>{request.bookName1}</h5>
                    <h6 className='text-xl font-light'>{request.bookAuthor1}</h6>
                  </div>
                  <i className="fa-solid fa-arrow-right-arrow-left fa-2xl"></i>
                  <div>
                    <h5 className='text-2xl font-bold'>{request.bookName2}</h5>
                    <h6 className='text-xl font-light '>{request.bookAuthor2}</h6>
                  </div>
                  <img width={'140px'} src={`${SERVER_URL}/uploads/${request.bookImage2}`} alt="" />
                  {/* <button className='bg-green-600 p-3 text-slate-200 rounded'>Approve<i class="fa-solid fa-check ms-2"></i></button>
                  <button className='bg-red-600 p-3 text-slate-200 rounded'>Deny<i class="fa-solid fa-xmark ms-2"></i></button> */}
                </div>
        </div>
    </>
  )
}

export default Request
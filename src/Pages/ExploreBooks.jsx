import React from 'react'
import SideBar from '../Components/SideBar'

function ExploreBooks() {
  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar />

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div>
              <div className='m-6'>
                <h3 className='text-3xl text-blue-900'>Explore Books</h3>
              </div>

              <div className='m-6 grid grid-cols-5 gap-5'>
                <div className='w-60 flex flex-col bg-slate-100 rounded-lg p-4 shadow'>
                  <img className='rounded' src="https://m.media-amazon.com/images/I/A1Mts6kJf9L._UF1000,1000_QL80_.jpg" alt="" />
                  <div className='flex flex-col justify-center items-center mt-3'>
                    <h3 className='text-xl mb-1 font-bold'>Book Name</h3>
                    <h4 className='text-lg font-thin'>Author</h4>
                  </div>
                </div>

                <div className='w-60 flex flex-col bg-slate-100 rounded-lg p-4 shadow'>
                  <img className='rounded' src="https://m.media-amazon.com/images/I/A1Mts6kJf9L._UF1000,1000_QL80_.jpg" alt="" />
                  <div className='flex flex-col justify-center items-center mt-3'>
                    <h3 className='text-xl mb-1 font-bold'>Book Name</h3>
                    <h4 className='text-lg font-thin'>Author</h4>
                  </div>
                </div>
                <div className='w-60 flex flex-col bg-slate-100 rounded-lg p-4 shadow'>
                  <img className='rounded' src="https://m.media-amazon.com/images/I/A1Mts6kJf9L._UF1000,1000_QL80_.jpg" alt="" />
                  <div className='flex flex-col justify-center items-center mt-3'>
                    <h3 className='text-xl mb-1 font-bold'>Book Name</h3>
                    <h4 className='text-lg font-thin'>Author</h4>
                  </div>
                </div>
                <div className='w-60 flex flex-col bg-slate-100 rounded-lg p-4 shadow'>
                  <img className='rounded' src="https://m.media-amazon.com/images/I/A1Mts6kJf9L._UF1000,1000_QL80_.jpg" alt="" />
                  <div className='flex flex-col justify-center items-center mt-3'>
                    <h3 className='text-xl mb-1 font-bold'>Book Name</h3>
                    <h4 className='text-lg font-thin'>Author</h4>
                  </div>
                </div>
                <div className='w-60 flex flex-col bg-slate-100 rounded-lg p-4 shadow'>
                  <img className='rounded' src="https://m.media-amazon.com/images/I/A1Mts6kJf9L._UF1000,1000_QL80_.jpg" alt="" />
                  <div className='flex flex-col justify-center items-center mt-3'>
                    <h3 className='text-xl mb-1 font-bold'>Book Name</h3>
                    <h4 className='text-lg font-thin'>Author</h4>
                  </div>
                </div>
                <div className='w-60 flex flex-col bg-slate-100 rounded-lg p-4 shadow'>
                  <img className='rounded' src="https://m.media-amazon.com/images/I/A1Mts6kJf9L._UF1000,1000_QL80_.jpg" alt="" />
                  <div className='flex flex-col justify-center items-center mt-3'>
                    <h3 className='text-xl mb-1 font-bold'>Book Name</h3>
                    <h4 className='text-lg font-thin'>Author</h4>
                  </div>
                </div>
                
              </div>
              
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default ExploreBooks
import React, { useState } from 'react'
import uploadImage from '../assets/Images/upload_image.jpg'

function AddBooks() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='bg-slate-800 p-3 text-slate-200 rounded-md hover:shadow-lg'>Add Books</button>

      {/* Modal */}
      {showModal ? (
        <>
          <div
            className="flex justify-center items-center fixed inset-0 z-50"
          >
            <div className="my-6">
              {/*content*/}
              <div className="border-0 rounded-lg flex flex-col w-full bg-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Book
                  </h3>
                </div>
                {/*body*/}
                  <div className='flex '>
                    <label>
                      <input type="file" className='hidden' />
                      <img src={uploadImage} alt="" />
                    </label>
                    <div className="p-6 flex flex-col">
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Book Name: </label>
                        <input type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Author Name: </label>
                        <input type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Genre: </label>
                        <input type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Condition: </label>
                        <input type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                    </div>
                  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 " onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default AddBooks
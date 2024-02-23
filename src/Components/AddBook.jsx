import React, { useContext, useEffect, useState } from 'react'
import uploadImage from '../assets/Images/upload_image.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBookAPI } from '../Services/allAPI';
import { addBookResponseContext } from '../../Context API/ContextShare';



function AddBook() {

  // get context
  const {addBookResponse,setAddBookResponse} = useContext(addBookResponseContext)

  const [showModal, setShowModal] = useState(false);
  const [bookData,setBookData] = useState({
    title:"",author:"",genre:"",description:"",bookImage:""
  })
  const [fileStatus,setFileStatus] = useState(true)
  const [preview,setPreview] = useState("")


  useEffect(()=>{
    generatePreviewImage()
  },[bookData.bookImage])

  const handleClose = ()=>{
    setShowModal(false)
    setBookData({
      title:"",author:"",genre:"",description:"",bookImage:""
    })
    setPreview("")
  }

  const generatePreviewImage =()=>{
    if(bookData.bookImage.type==="image/png"||bookData.bookImage.type==="image/jpg"||bookData.bookImage.type==="image/jpeg"){
      setPreview(URL.createObjectURL(bookData.bookImage))
      setFileStatus(false)
    }
    else{
      setFileStatus(true)
      setBookData({...bookData,bookImage:""})
      setPreview("")
    }
  }

  const handleAddBook = async ()=>{
    const {title,author,genre,description,bookImage} = bookData
    console.log(bookData);
    if(!title||!author||!genre||!description||!bookImage){
      toast.info("Please fill the form completely!!!")
    }
    else{
      // api call - reqBody
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("author",author)
      reqBody.append("genre",genre)
      reqBody.append("description",description)
      reqBody.append("bookImage",bookImage)

      // api call - reqHeader
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }

        // api call
        try{
          const result = await addBookAPI(reqBody,reqHeader)
          if(result.status==200){
            setAddBookResponse(result.data)
            // toast.success(`${result.data.title} has been added successfully`)
            handleClose()
          }
          else{
            toast.warning(result.response.data)
          }
        }catch(err){
          console.log(err);
        }
      }
    }
  }


  return (
    <>
      <div>
        <ToastContainer autoClose={2500} theme='colored' />
        <button onClick={() => setShowModal(true)} className='bg-slate-800 p-3 text-slate-200 rounded-md hover:shadow-lg'>Add Book</button>
      </div>

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
                  <div className='flex mt-2 p-4'>
                    <label>
                      <input onChange={e=>setBookData({...bookData,bookImage:e.target.files[0]})} type="file" className='hidden' />
                      <img src={preview?preview:uploadImage} width={'225px'} height={'300px'} alt="" />
                      {
                        fileStatus&&<div className='text-red-600 ms-12'>*Please upload files with following <p>extensions: png, jpg, jpeg*</p></div>
                      }
                    </label>
                    <div className="p-6 flex flex-col">
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Book Name: </label>
                        <input value={bookData.title} onChange={e=>setBookData({...bookData,title:e.target.value})} type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Author Name: </label>
                        <input value={bookData.author} onChange={e=>setBookData({...bookData,author:e.target.value})} type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Genre: </label>
                        <input value={bookData.genre} onChange={e=>setBookData({...bookData,genre:e.target.value})} type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                      <div className="flex mb-5">
                        <label className='w-40' htmlFor="">Description: </label>
                        <textarea value={bookData.description} onChange={e=>setBookData({...bookData,description:e.target.value})} type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>

                    </div>
                  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 " onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1"
                    type="button"
                    onClick={handleAddBook}
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

export default AddBook
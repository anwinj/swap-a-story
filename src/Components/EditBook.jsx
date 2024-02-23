import React, { useContext, useEffect, useState } from 'react'
import { SERVER_URL } from '../Services/serverURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editBookAPI } from '../Services/allAPI';
import { addEditResponseContext } from '../../Context API/ContextShare';

function EditBook({book}) {

    const {editBookResponse,setEditBookResponse} = useContext(addEditResponseContext)

    const [showModal, setShowModal] = useState(false);

    const [bookData,setBookData] = useState({
      id:book._id,title:book.title,author:book.author,genre:book.genre,description:book.description,bookImage:book.bookImage
    })
    const [fileStatus,setFileStatus] = useState(true)
    const [preview,setPreview] = useState("")

    useEffect(()=>{
        generatePreviewImage()
    },[bookData.bookImage])

    const handleClose = ()=>{
        setShowModal(false)
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

      const handleEditProject = async ()=>{
        const {id,title,author,genre,description,bookImage} = bookData
        if(!title||!author||!genre||!description){
            toast.info("fill the form completely..!!!")
        }
        else{
            const reqBody = new FormData()
            reqBody.append("title",title)
            reqBody.append("author",author)
            reqBody.append("genre",genre)
            reqBody.append("description",description)
            preview?reqBody.append("bookImage",bookImage):reqBody.append("bookImage",book.bookImage)

            // reqHeader
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Content-Type":preview?"multipart/form-data":"application/json",
                    "Authorization":`Bearer ${token}`
                }
                // api call   
                try{
                    const result = await editBookAPI(id,reqBody,reqHeader)
                    if(result.status==200){
                        toast.success(`Book ${result.data.title} updated successfully...`)
                        handleClose()
                        setEditBookResponse(result.data)
                    }
                    else{
                        console.log(result.response.data);
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
        <div className='flex'>
            <ToastContainer autoClose={2500} theme='colored' />
            <button onClick={() => setShowModal(true)} className='bg-slate-800 p-2 text-slate-200 rounded-md hover:shadow-lg'>Edit Book</button>
        </div>
       

        {/* Modal */}
        {showModal ? (
            <>
                <div className="flex justify-center items-center fixed inset-0 z-50">
                    <div className="my-6">
                        {/*content*/}
                        <div className="border-0 rounded-lg flex flex-col w-full bg-white">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">Edit Book</h3>
                            </div>
                            {/*body*/}
                            <div className='flex mt-2 p-4'>
                                <label>
                                    <input onChange={e=>setBookData({...bookData,bookImage:e.target.files[0]})} type="file" className='hidden' />
                                    <img src={preview?preview:`${SERVER_URL}/uploads/${book.bookImage}`} width={'225px'} height={'300px'} alt="" />
                                </label>
                                <div className="p-6 flex flex-col">
                                    <div className="flex mb-5">
                                        <label className='w-40' htmlFor="">Book Name: </label>
                                        <input value={bookData.title} onChange={e=>setBookData({...bookData,title:e.target.value})} type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                                    </div>
                                    <div className="flex mb-5">
                                        <label className='w-40' htmlFor="">Author Name: </label>
                                        <input  value={bookData.author} onChange={e=>setBookData({...bookData,author:e.target.value})}  type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                                    </div>
                                    <div className="flex mb-5">
                                        <label className='w-40' htmlFor="">Genre: </label>
                                        <input  value={bookData.genre} onChange={e=>setBookData({...bookData,genre:e.target.value})}  type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                                    </div>
                                    <div className="flex mb-5">
                                        <label className='w-40' htmlFor="">Description: </label>
                                        <textarea  value={bookData.description} onChange={e=>setBookData({...bookData,description:e.target.value})} type="text" className="px-2 py-1 text-blueGray-600  bg-slate-200 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                                    </div>
                                    
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 " onClick={handleClose} >Close</button>
                                <button className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1" type="button" onClick={handleEditProject}>Edit</button>
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

export default EditBook
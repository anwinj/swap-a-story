import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import AddBook from '../Components/AddBook'
import EditBook from '../Components/EditBook'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteBookAPI, getUserBooksAPI } from '../Services/allAPI'
import { addBookResponseContext, addEditResponseContext } from '../../Context API/ContextShare'

function Dashboard() {

  // get context
  const {addBookResponse,setAddBookResponse} = useContext(addBookResponseContext)
  const {editBookResponse,setEditBookResponse} = useContext(addEditResponseContext)

  const [username,setUsername] = useState("")
  const [allBooks,setAllBooks] = useState([])

  useEffect(()=>{
    viewUsername()
  },[])

  const viewUsername = ()=>{
    if(sessionStorage.getItem("userDetails")){
      setUsername(JSON.parse(sessionStorage.getItem("userDetails")).username)
    }
    else{
      setUsername("")
    }
  }

  const getUserBooks = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await getUserBooksAPI(reqHeader)
      if(result.status==200){
        setAllBooks(result.data)
      }
      else{
        console.log(result);
      }
    }  
  }
  
  const handleDeleteBook = async (bid)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      try{
        const result = await deleteBookAPI(bid,reqHeader)
        if(result.status==200){
          getUserBooks()
          console.log(result);
        }
        else{
          toast.warning(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }

  useEffect(()=>{
    getUserBooks()
  },[addBookResponse,editBookResponse])
  
  

  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar insideDashboard/>

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div className='m-7'>
              <h1 className='text-3xl'>Welcome <span className='text-blue-900'>{username.split(" ")[0]}</span> ,</h1>
              <div className='flex justify-between items-center mt-5'>
                <h3 className='text-2xl text-blue-900'>Your Books</h3>
                <AddBook/>
              </div>

              {
                allBooks?.length>0?allBooks.map((book,index)=>(
                  <div className='mt-6'>
                    <div className='w-10/12 h-16 bg-slate-100 rounded-lg flex justify-between p-4 items-center'>
                      <div className='flex justify-center items-center '>
                        <h2 className='text-xl font-bold ms-3 me-5'>{book.title}  -</h2>
                        <h3 className='text md font-light me-4'>{book.author}</h3>
                        <h3 className='text md font-medium text-red-400'> {book.genre}</h3>
                      </div>
                      <div className='flex'>
                        <EditBook book={book} />
                        <button onClick={()=>handleDeleteBook(book?._id)}><i className="fa-solid fa-trash fa-lg ms-8"></i></button>
                      </div>
                    </div>
                  </div>
                )):
                <div className='text-red-600 text-2xl mt-3'>
                  No Books to display
                </div>
              }
              
            </div>            
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2500} theme='colored' />
    </>
  )
}

export default Dashboard
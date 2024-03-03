import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../Services/serverURL';
import { createRequestAPI, getUserBooksAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateSwapRequest({bookDetails}) {

  const [showModal, setShowModal] = useState(false);
  const [allBooks,setAllBooks] = useState([])
  const [bookIndex,setBookIndex] = useState("0")

  const getUserBooks = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
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
  // console.log(bookDetails);
  
  const createRequest = async ()=>{
    const bookName1 = bookDetails.title
    const bookName2 = allBooks[bookIndex].title
    const bookAuthor1 = bookDetails.author
    const bookAuthor2 = allBooks[bookIndex].author
    const bookImage1 = bookDetails.bookImage
    const bookImage2 = allBooks[bookIndex].bookImage
    const userId1 = bookDetails.userId
    const userId2 = allBooks[bookIndex].userId
    const bookId1 = bookDetails._id
    const bookId2 = allBooks[bookIndex]._id
    console.log(bookName1,bookName2,bookAuthor1,bookAuthor2,bookImage1,bookImage2,userId1,userId2);

    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await createRequestAPI({bookName1,bookName2,bookAuthor1,bookAuthor2,bookImage1,bookImage2,userId1,userId2,bookId1,bookId2},reqHeader)
      if(result.status==200){
        console.log(result.data);
        toast.success("Swap Request Send..")
        setShowModal(false)
      }
      else{
        console.log(result.data);
      }
    }
    else{
      console.log("Please Login");
    }

  }

  // console.log(allBooks);
  // console.log(bookIndex);
  // console.log(requestData);

  useEffect(()=>{
    getUserBooks()
  },[])

  return (
    <>
      <button onClick={() => setShowModal(true)} className='bg-slate-800 w-60 p-3 text-slate-200 rounded-md hover:shadow-lg'>Swap for this Book</button>

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
                    Create Swap Request
                  </h3>
                </div>
                {/*body*/}
                  
                  <div className='flex justify-evenly items-center mt-2 p-6'>
                    {
                      <div style={{marginTop:'65px'}} className='flex justify-center items-center'>
                        <img style={{width:'150px',height:'200px'}} src={`${SERVER_URL}/uploads/${bookDetails.bookImage}`} alt="" />
                        <div className='ms-4 flex flex-col items-center'>
                          <h3 className=' text-2xl'>{bookDetails.title}</h3>
                          <h4 className='text-lg font-light mt-2'>{bookDetails.author}</h4>
                          <h4 className='text-lg font-light mt-2 text-red-500'>{bookDetails.genre}</h4>
                        </div> 
                    </div>
                    }
                    
                    <i className="fa-solid fa-arrow-right-arrow-left fa-2xl m-6"></i>
                    <div className='flex flex-col justify-center items-center'>
                      <div className='mt-3 me-4 mb-4'>
                        <select onChange={e=>setBookIndex(e.target.value)} className='p-2 border border-slate-400 px-10 float-end'>
                          {
                            allBooks?.length>0?allBooks.map((book,index)=>(
                              <option key={index}  value={index}>{book.title}</option>
                            )):null
                          }
                        </select>
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className='me-4 flex flex-col items-center'>
                          <h3 className=' text-2xl'>{allBooks[bookIndex].title}</h3>
                          <h4 className='text-lg font-light mt-2'>{allBooks[bookIndex].author}</h4>
                          <h4 className='text-lg font-light mt-2 text-red-500'>{allBooks[bookIndex].genre}</h4>
                        </div> 
                        <img style={{width:'150px',height:'200px'}} src={`${SERVER_URL}/uploads/${allBooks[bookIndex].bookImage}`} alt="" />
                      </div>
                    
                    </div>
                    
                    
                    
                  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button onClick={()=>setShowModal(false)} className='p-2 bg-red-200 rounded me-9'>Close</button>
                  <button onClick={createRequest} className='p-2 bg-green-200 me-5'>Swap</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    <ToastContainer autoClose={2500} theme='colored' />
    </>
  )
}

export default CreateSwapRequest
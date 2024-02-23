import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../Services/allAPI'
import { SERVER_URL } from '../Services/serverURL'

function ExploreBooks() {

  const [allBooks,setAllBooks] = useState([])

  const getAllBooks = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await getAllBooksAPI(reqHeader)
      if(result.status==200){
        setAllBooks(result.data)
      }
      else{
        console.log(result);
      }
    }  
  }

  // console.log(allBooks);

  useEffect(()=>{
    getAllBooks()
  },[])

  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar insideExplore/>

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div>
              <div className='m-6'>
                <h3 className='text-3xl text-blue-900'>Explore Books</h3>
              </div>

             
              <div className='m-6 grid grid-cols-5 gap-5'>
              {
                allBooks?.length>0?allBooks.map((book,index)=>(
                  <Link to={`/details/${book._id}`} key={index} className='w-60 flex flex-col bg-slate-100 rounded-lg p-4 shadow-xl'>
                      <img style={{width:'210px',height:'250px'}} className='shadow rounded-lg' src={`${SERVER_URL}/uploads/${book.bookImage}`} alt="" />
                      <div className='flex flex-col justify-center items-center mt-3'>
                        <h3 className='text-xl mb-1 font-bold'>{book?.title}</h3>
                        <h4 className='text-lg font-light'>{book?.author}</h4>
                      </div>
                    </Link>
                ))
                :null
              }
                    

              </div>

              
              
              
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default ExploreBooks
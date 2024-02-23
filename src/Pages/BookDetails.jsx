import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import CreateSwapRequest from '../Components/CreateSwapRequest'
import { useParams } from 'react-router-dom'
import { getBookDetailsAPI } from '../Services/allAPI'
import { SERVER_URL } from '../Services/serverURL'

function BookDetails() {

  const {_id} = useParams()
  const [bookDetails,setBookDetails] = useState([])

  const getBookDetails = async ()=>{
    const bid = _id
    const result = await getBookDetailsAPI(bid)
    // console.log(result);
    setBookDetails(result.data[0])
  }
  
  useEffect(()=>{
    getBookDetails()
  },[])
  

  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar insideExplore />

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            {
              <div className='flex p-12 flex-wrap'>
              <div className='ms-8 mt-4'>
                <img className='rounded-lg' style={{width:'400px',height:'625px'}} src={`${SERVER_URL}/uploads/${bookDetails.bookImage}`} alt="" />
              </div>
              <div className='w-3/6 ms-12 mt-6 flex flex-col'>
                <h2 className='uppercase text-6xl font-light'>{bookDetails.title}</h2>
                <h3 className='text-3xl font-light mt-7'> <span className='font-bold'>Author: </span>{bookDetails.author}</h3>
                <h4 className='text-2xl mt-5 font-bold'>Genre: <span className='text-red-500 font-light'>{bookDetails.genre}</span></h4>
                <p className='text-xl mt-5 mb-8 font-light'><span className='font-bold'>Book Desciption: </span>{bookDetails.description}</p>

                <CreateSwapRequest bookDetails={bookDetails}/>

              </div>

            </div> 
            }
                       
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetails
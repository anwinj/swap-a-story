import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import { getUserBooksAPI, viewRecievedRequestAPI } from '../Services/allAPI'

function Profile() {

  const [userDetails,setUserDetails] = useState({})
  const [allBooks,setAllBooks] = useState([])
  const [allRequests,setAllRequests] = useState([])

  const getUserDetails = async() =>{
    setUserDetails(JSON.parse(sessionStorage.getItem("userDetails")))
    console.log(userDetails);
    getUserBooks()
    getUserRequests()
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
  const getUserRequests = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await viewRecievedRequestAPI(reqHeader)
      if(result.status==200){
        console.log(result.data);
        setAllRequests(result.data)
      }
      else{
        console.log(result.data);
      }
    }
  }

  useEffect(()=>{
    getUserDetails()
  },[])

  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar insideProfile/>

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div className='m-6'>
              <h3 className='text-3xl text-blue-900'>Profile</h3>
            </div>   
            <div className='grid grid-cols-2 m-5'>
              <div className='bg-slate-100 w-full shadow p-5 rounded-lg flex flex-col justify-center items-center'>
                <label>
                  <input type="file" className='hidden' />
                  <img src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg" alt="" className='rounded-full' width={'200px'} />
                </label>
               
                <div className="flex justify-center items-center mt-5">
                  <label className='w-20 text-lg mr-5' htmlFor="">Username: </label>
                  <input type="text" value={userDetails.username} className="px-2 py-2 text-blueGray-600  bg-slate-200 rounded-lg text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <label className='w-20 text-lg mr-5' htmlFor="">Email: </label>
                  <input type="text" value={userDetails.email} className="px-2 py-2 text-blueGray-600  bg-slate-200 rounded-lg text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <label className='w-20 text-lg mr-5' htmlFor="">Password: </label>
                  <input type="text" value={userDetails.password} className="px-2 py-2 text-blueGray-600  bg-slate-200 rounded-lg text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                {/* <div className="flex justify-center items-center mt-5">
                  <label className='w-20 text-lg mr-5' htmlFor="">Phone: </label>
                  <input type="text" value='+917585599330085' className="px-2 py-2 text-blueGray-600  bg-slate-200 rounded-lg text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <label className='w-20 text-lg mr-5' htmlFor="">Address: </label>
                  <textarea type="text" value='address' className="px-2 py-2 text-blueGray-600  bg-slate-200 rounded-lg text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <button className='mt-6 text-slate-200 bg-slate-700 p-2 rounded-md'>Update Info</button> */}
              </div>
              <div className='grid grid-rows-2 ml-3'>
                <div className='bg-slate-100 w-full shadow p-3 mb-3 rounded-lg flex flex-col justify-center items-center'>
                  <h2 className='text-8xl text-blue-800'>{allBooks?.length}</h2>
                  <p className='text-2xl mt-4'>No of books uploaded for swapping</p>
                </div>
                <div className='bg-slate-100 w-full shadow p-3 mb-3 rounded-lg flex flex-col justify-center items-center'>
                  <h2 className='text-8xl text-blue-800'>{allRequests.length}</h2>
                  <p className='text-2xl mt-4'>No of Recieved swap requests</p>
                </div>
              </div>
            </div>         
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import { approveRequestAPI, deleteRequestAPI, viewRecievedRequestAPI, viewSendRequestAPI } from '../Services/allAPI'
import { SERVER_URL } from '../Services/serverURL'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ViewSwapRequests() {
  
  const [allRecievedRequests,setAllRecievedRequests] = useState([])
  const [allSendRequests,setAllSendRequests] = useState([])

  const getRecievedUserRequests = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await viewRecievedRequestAPI(reqHeader)
      if(result.status==200){
        // console.log(result.data);
        setAllRecievedRequests(result.data)
      }
      else{
        console.log(result.data);
      } 
    }
  }

  const getSendUserRequests = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await viewSendRequestAPI(reqHeader)
      if(result.status==200){
        // console.log(result.  data);
        setAllSendRequests(result.data)
      }
      else{
        console.log(result.data);
      } 
    }
  }

  const approveRequest = async(request)=>{
    // console.log(request);
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await approveRequestAPI(request,reqHeader)
      console.log(result);
      if(result.status==200){
        getRecievedUserRequests()
        toast.success("Request Approved")
      }
      else{
        toast.warning(result.message)
        console.log(result.message);
      }
    }  
  }

  const deleteRequest = async(reqId)=>{
    console.log(reqId);
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await deleteRequestAPI(reqId,reqHeader)
      console.log(result);
      if(result.status==200){
        toast.warning("Request deleted")
        getRecievedUserRequests()
      }
      else{
        toast.warning(result.message)
      }
    }  
  }

  useEffect(()=>{
    getRecievedUserRequests()
    getSendUserRequests()
  },[])


  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar insideViewRequests/>

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div className=''>
              <div className='m-6'>
                <h3 className='text-3xl text-blue-900'>Pending Requests</h3>
              </div>

              <div className='grid grid-cols-2 mt-4 gap-4 p-3'>

                {/* Recieved Requests */}
                <div className='bg-slate-100 rounded-lg w-full p-2 ms-2'>
                  <div className='text-2xl text-blue-800 ms-4 mt-2'>Recieved Requests</div>
                  <div className='mt-3 p-2'>
                  {
                    allRecievedRequests?.length>0?allRecievedRequests.map((request,index)=>(
                      <div key={index} className='flex flex-col p-1 mb-3'>
                        <div className='bg-slate-200 w-full h-66 rounded-lg shadow p-4 flex justify-evenly items-center'>
                          <img width={'80px'} src={`${SERVER_URL}/uploads/${request.bookImage1}`} alt="" />
                          <div className='max-w-24'>
                            <h5 className='text-base font-bold'>{request.bookName1}</h5>
                            <h6 className='text-sm font-light'>{request.bookAuthor1}</h6>
                          </div>
                          <i className="fa-solid fa-arrow-right-arrow-left fa-md"></i>
                          <div className='max-w-24'>
                            <h5 className='text-base font-bold'>{request.bookName2}</h5>
                            <h6 className='text-sm font-light '>{request.bookAuthor2}</h6>
                          </div>
                          <img width={'80px'} src={`${SERVER_URL}/uploads/${request.bookImage2}`} alt="" />
                          {
                            request.approved?<button className='bg-green-600 p-2 text-slate-200 rounded'>Approved</button>:
                            <div>
                              <button onClick={()=>approveRequest(request)} className='bg-green-600 p-2 text-slate-200 rounded me-4'><i className="fa-solid fa-check"></i></button>
                              <button onClick={()=>deleteRequest(request?._id)} className='bg-red-600 p-2 text-slate-200 rounded'><i className="fa-solid fa-xmark"></i></button>
                            </div>
                          }
                          
                        </div>
                      </div>
                    )):
                    <div className='text-lg ms-3 mt-2 text-red-600'>No Recieved Request...</div>
                  }
                  </div>
                </div>
                
                {/* Send Requests */}
                <div className='bg-slate-100 rounded-lg w-full p-2 me-2'>
                  <div className='text-2xl text-blue-800 ms-4 mt-2'>Send Requests</div>
                  <div className='mt-3 p-2'>
                  {
                    allSendRequests?.length>0?allSendRequests.map((request,index)=>(
                      <div key={index} className='flex flex-col p-1 mb-3'>
                        <div className='bg-slate-200 w-full h-66 rounded-lg shadow p-4 flex justify-evenly items-center'>
                          <img width={'80px'} src={`${SERVER_URL}/uploads/${request.bookImage1}`} alt="" />
                          <div className='max-w-24'>
                            <h5 className='text-base font-bold'>{request.bookName1}</h5>
                            <h6 className='text-sm font-light'>{request.bookAuthor1}</h6>
                          </div>
                          <i className="fa-solid fa-arrow-right-arrow-left fa-md"></i>
                          <div className='max-w-24'>
                            <h5 className='text-base font-bold'>{request.bookName2}</h5>
                            <h6 className='text-sm font-light '>{request.bookAuthor2}</h6>
                          </div>
                          <img width={'80px'} src={`${SERVER_URL}/uploads/${request.bookImage2}`} alt="" />
                          {
                            request.approved?
                            <p className='text-slate-100 p-1 bg-green-500 rounded'>Approved</p>:
                            <p className='text-slate-100 p-1 bg-red-500 rounded'>Pending...</p>
                          }
                        </div>
                      </div>
                    )):
                    <div className='text-lg ms-3 mt-2 text-red-600'>No Send Request...</div>
                  }
                  </div>
                </div>
              </div>

              

              
              
            </div>            
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2500} theme='colored' />
    </>
  )
}

export default ViewSwapRequests
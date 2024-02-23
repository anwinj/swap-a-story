import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import Request from '../Components/Request'
import { viewRequestAPI } from '../Services/allAPI'

function ViewSwapRequests() {
  
  const [allRequests,setAllRequests] = useState([])

  const getUserRequests = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await viewRequestAPI(reqHeader)
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
    getUserRequests()
  },[])

  return (
    <>
      <div className='w-full h-full bg-slate-900' >
        <div className="flex">
          <SideBar insideViewRequests/>

          <div className='w-full m-3 bg-slate-200 rounded-lg'>
            <div className=''>
              <div className='m-6'>
                <h3 className='text-3xl text-blue-900'>Pending Swap Requests</h3>
              </div>

              {
                allRequests?.length>0?allRequests.map((request,index)=>(
                  <div key={index}><Request request={request}/></div>
                )):
                <div className='text-2xl ms-6 mt-8 text-red-600'>No Pending Request</div>
              }

              
              
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewSwapRequests
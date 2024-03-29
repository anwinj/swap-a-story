import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// register API
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

// login API
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

// addbook API
export const addBookAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-book`,reqBody,reqHeader)
}

// getAllBooks API
export const getAllBooksAPI = async(reqHeader)=>{
return await commonAPI("GET",`${SERVER_URL}/all-books`,"",reqHeader)
}

// getUserBooks API
export const getUserBooksAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-books`,"",reqHeader)
}

// getBookDetails API
export const getBookDetailsAPI = async(bid)=>{
    return await commonAPI("GET",`${SERVER_URL}/details/${bid}`,"","")
}

// createRequest API
export const createRequestAPI = async(request,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/create-request`,request,reqHeader)
}

// viewRecievedRequest API
export const viewRecievedRequestAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/view-recieved-requests`,"",reqHeader)
}

// viewSendRequest API
export const viewSendRequestAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/view-send-requests`,"",reqHeader)
}


// editBook API
export const editBookAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/book/edit/${id}`,reqBody,reqHeader)
}

// deleteBook API
export const deleteBookAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/book/delete/${id}`,{},reqHeader)
}

// approveRequest API
export const approveRequestAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/approve-request`,reqBody,reqHeader)
}

// deleteRequest API
export const deleteRequestAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/request/delete/${id}`,{},reqHeader)
}
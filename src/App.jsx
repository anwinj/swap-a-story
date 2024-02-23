import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import ViewSwapRequests from './Pages/ViewSwapRequests'
import ExploreBooks from './Pages/ExploreBooks'
import Dashboard from './Pages/Dashboard'
import BookDetails from './Pages/BookDetails'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Home insideRegister />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/explore' element={<ExploreBooks/>} />
        <Route path='/details/:_id' element={<BookDetails/>} />
        <Route path='/viewRequests' element={<ViewSwapRequests/>} />
        <Route path='/*' element={<Navigate to={'/'}/>} />
      </Routes>
    </>
  )
}

export default App

import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import History from './component/History'
import Layout from './component/Layout'
function App() {
  const [userid, setuserid] = useState(null)
  const [SearchTag, setSearchTag] = useState('')
  return (
    <BrowserRouter>
    <Layout setuserid={setuserid} setSearchTag={setSearchTag}>
    <Routes>
      <Route path='/' element={<Home SearchTag='SearchTag'/>}/>
      <Route path='/history' element={<History/>}/>
    </Routes>
    </Layout>
    
    </BrowserRouter>
    
  )
}

export default App

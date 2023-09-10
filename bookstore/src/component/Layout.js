import React,{useState}from 'react'
import SignUp from '../component/SignUp'
import FooterContainer from '../component/FooterContainer'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
export default function Layout({children,setuserid,setSearchTag}) {
    const [ShowSignin, setShowSignin] = useState(false)
    
  return (
    <div className={`${ShowSignin ? 'overflow-y-hidden': null}`}>    <Navbar setShowSiinin={setShowSignin} setSearchTag={setSearchTag}/>
        
          {ShowSignin && 
          <SignUp setSignin={setShowSignin} setuserid={setuserid}/>
          }
    {children}
    <FooterContainer/>
    <Outlet/>
    </div>

  )
}

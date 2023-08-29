import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import ProfilePic from './Components/ProfilePic'
import Introduction from './Components/Introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <SideBar/>
     <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 p-5 mt-[90px]'>
          <Introduction/>   
        </div>
        <div className='hidden md:block'>
          <ProfilePic/>
        </div>
     </div>
     
    </>
  );
}

export default App

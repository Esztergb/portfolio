import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Home from './Components/Pages/Home'
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <SideBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer/>
      </div>
    </>
  );
}

export default App;
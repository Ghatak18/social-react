import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar" 
import Person3Icon from '@mui/icons-material/Person3';
import "./home.css"

const Home = () => {
  return (
    <div>
       <Topbar/>
       <div className='bodycomponents'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
       </div>
    
    </div>
  )
}

export default Home


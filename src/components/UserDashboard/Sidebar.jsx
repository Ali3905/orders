import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';


const Sidebar = () => {

  const [opened, setOpened] = useState(false)

  const handleClick = () =>{
    setOpened(prev => !prev)
  }
  return (
<>
   {opened !== false ? <div className='sidebar'>
        <CancelIcon className='cancel' onClick={handleClick}/>      
        <h1>LOGO</h1>
      <ul>
        <li><HomeIcon className='icon'/>Home</li>
        <li><EqualizerIcon className='icon' />Analytics</li>
        <li><ShoppingCartIcon className='icon' />Orders</li>
        <li><DashboardIcon className='icon' />Dashboard</li>
      </ul>
    </div>:
    <MenuIcon onClick={handleClick} className='menu'/>
  }
    </>

  )
}

export default Sidebar

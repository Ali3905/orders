import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><SearchIcon/></li>
        <li><NotificationsNoneIcon/></li>
        <li><img src='/img/img1.png' className='frame_icon' alt='profile picture'/>Muhammad Ali<ExpandMoreIcon/></li>
      </ul>
    </div>
  )
}

export default Navbar

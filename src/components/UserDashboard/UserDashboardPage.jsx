import React from 'react';
import '../../App.css';
import Card from './Card';
import Navbar from './Navbar';
import Orders from './Orders';
import Sidebar from './Sidebar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const UserDashboardPage = () => {
    return (
        <>
          <Navbar/>
          <div className='container'>
          <Sidebar/>
          <div className='left_container'>
                <div className='card_container'>
                <Card  sx={{backgroundColor: "##acffac"}} total={"Total Deposit"} total_deposit={1000} img={<img src="/img/img2.png" alt="" />}/>
                <Card  sx={{backgroundColor: "##acffac"}} total={"Spent"} total_deposit={500} img={<LocalAtmIcon sx={{backgroundColor: "##acffac", color: "green"}} className='card_icon'/>}/>
                <Card  sx={{backgroundColor: "##acffac"}} total={"Remaining"} total_deposit={500} img={<AccountBalanceWalletIcon sx={{backgroundColor: "#a6a6ff" , color: "blue"}} className='card_icon'/>}/>
                </div>   
                <div className="orders">
                <Orders/>
                </div>
          </div>
    
          </div>
        </>
      );
}

export default UserDashboardPage

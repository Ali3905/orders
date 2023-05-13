import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        {/* <img src="/img/img2.png" alt="" /> */}
        {/* <AccountBalanceWalletIcon/> */}
        {props.img}
      </div>
      <div className='text'>
        <p>${props.total_deposit}</p>
        <h2>{props.total}</h2>
      </div>
    </div>
  )
}

export default Card

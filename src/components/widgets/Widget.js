import React from 'react'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import "./widget.scss"

function Widget({ type }) {
    
    let data;
    let amount = 1000;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                fee: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className='icon' />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                fee: false,
                link: "See all users",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' />
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                fee: false,
                link: "See all users",
                icon: <ShoppingCartOutlinedIcon className='icon' />
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                fee: false,
                link: "See all users",
                icon: <MonetizationOnOutlinedIcon className='icon' />
            };
            break;
        default:
            break;
    }

  return (
      <div className='widget'>
          <div className="left">
              <span className="title">
                  {data.title}
              </span>
              <span className="counter">
                  {data.fee && '$'} {amount}
              </span>
              <span className="link">
                  <a href=" ">{data.link}</a>
              </span>
          </div>
          <div className="right">
              <div className="percentage positive">
                <ArrowDropUpOutlinedIcon/>
                  20%
              </div>
              {data.icon}
          </div>
    </div>
  )
}

export default Widget
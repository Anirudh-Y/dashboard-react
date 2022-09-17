import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeContext from '../../context';
import { useContext } from 'react';
import './sidebar.scss'

function Sidebar() {

  let {darkmode} = useContext(ModeContext)

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{
          textDecoration
            : "none"
        }}>
          <span className="logo">Dreadnought</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span >Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Users</span>
            </Link>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Products</span>
            </Link>
          </li>
          <li>
            <FilterFramesIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Orders</span>
            </Link>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <NotificationsActiveIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Notifications</span>
            </Link>
          </li>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Systme Health</span>
            </Link>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Settings</span>
            </Link>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Profile</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <Link to="/login" style={{
              textDecoration
                : "none"
            }}>
              <span >Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={(e) => {
          darkmode(false);
        }}></div>
        <div className="colorOptions" onClick={(e) => {
          darkmode(true)
        }}></div>
      </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import profileImg from '../assets/profile.jpeg';
import './leftside.css';
import instagramlogo from '../assets/Instagram-Logo-2016-present.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';


function LeftSide() {
  return (
    <div className='leftSidePart'>
      <div className='logoPart'>
        <img className='logoImg' src={instagramlogo} alt="Instagram" />
      </div>
      <div className="navLinkPart">
        <div className="navLink">
          <HomeIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Home</div>
         </div>

         <div className="navLink">
          <SearchIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Search</div>
         </div>

         <div className="navLink">
          <ExploreIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Explore</div>
         </div>

         <div className="navLink">
          <MusicVideoIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Reels</div>
         </div>

         <div className="navLink">
          <EmailOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Messages</div>
         </div>

         <div className="navLink">
          <FavoriteBorderOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Notification</div>
         </div>

         <div className="navLink">
          <AddBoxOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Create</div>
         </div>

         <div className="navLink">
          <img className='profileImg' src={profileImg} alt="profile Image" />
          <div className="navName">Profile</div>
         </div>

         <div className="belowPart">
         <div className="navLink">
          <GestureIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">Thread</div>
         </div>

         <div className="navLink">
          <MenuIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
          <div className="navName">More</div>
         </div>

         </div>

      </div>

    </div>
  )
}

export default LeftSide
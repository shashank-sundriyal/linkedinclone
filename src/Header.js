import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SuperviserAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";


function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
 
    };

    return (
        <div className="header">
            <div className="header_left">

                <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="logo" />

                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>


            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SuperviserAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Message" />
                <HeaderOption Icon={NotificationIcon} title="Notification" />
                <HeaderOption 
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDY2HlUO3833B4x3GJ2zs1tZgpTAiIHUH7BA&usqp=CAU"  title="Me" 
                    onClick={logoutOfApp}
/>
                
             </div>
        
        </div>
    );
}


export default Header;

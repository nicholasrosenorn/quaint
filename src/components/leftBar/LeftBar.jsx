//import React, { useContext } from "react";
import "./leftbar.scss"
//import User from "../../assets/user_icon_img.png"
//import { AuthContext } from "../../context/authContext";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChairIcon from '@mui/icons-material/Chair';
import DevicesIcon from '@mui/icons-material/Devices';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import KeyIcon from '@mui/icons-material/Key';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GroupsIcon from '@mui/icons-material/Groups';



const LeftBar = () => {

    //const { currentUser } = useContext(AuthContext);

    return (
        <div className="leftbar">
            <div className="container">
                <div className="categories">
                    <span>Categories</span>
                    <div className="item">
                        <DirectionsRunIcon style={{ color: "#A2DED0" }} />
                        <span>Minimalist Lifestyle</span>
                    </div>
                    <div className="item">
                        <ChecklistIcon style={{ color: "#A2DED0" }} />
                        <span>Decluttering and Organization</span>
                    </div>
                    <div className="item">
                        <ArchitectureIcon style={{ color: "#A2DED0" }} />
                        <span>Minimalist Design</span>
                    </div>
                    <div className="item">
                        <PsychologyIcon style={{ color: "#A2DED0" }} />
                        <span>Mindfulness and Simplicity</span>
                    </div>
                    <div className="item">
                        <RecyclingIcon style={{ color: "#A2DED0" }}/>
                        <span>Sustainable Living</span>
                    </div>
                </div>
                <hr />
                <div className="tags">
                    <span>Tags</span>
                    <div className="item">
                        <CheckroomIcon style={{ color: "#FDFDFD", fontSize:"10px" }}/>
                        <span>Minimalist Fashion</span>
                    </div>
                    <div className="item">
                        <ChairIcon style={{ color: "#FDFDFD", fontSize:"10px" }} />
                        <span>Minimalist Decor</span>
                    </div>
                    <div className="item">
                        <DevicesIcon style={{ color: "#FDFDFD", fontSize:"10px" }}/>
                        <span>Digital Minimalism</span>
                    </div>
                    <div className="item">
                        <LocalAirportIcon style={{ color: "#FDFDFD", fontSize:"10px" }} />
                        <span>Minimalist Travel</span>
                    </div>
                    <div className="item">
                        <KeyIcon style={{ color: "#FDFDFD", fontSize:"10px" }} />
                        <span>Essentialism</span>
                    </div>
                    <div className="item">
                        <ChildFriendlyIcon style={{ color: "#FDFDFD", fontSize:"10px" }} />
                        <span>Minimalist Parenting</span>
                    </div>
                    <div className="item">
                        <ColorLensIcon style={{ color: "#FDFDFD", fontSize:"10px" }} />
                        <span>Minimalist Art</span>
                    </div>
                </div>
                <hr />
                <div className="menu-other">
                    <span>Others</span>
                    <div className="item">
                        <CalendarMonthIcon style={{ color: "#A2DED0" }}/>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <SchoolIcon style={{ color: "#A2DED0" }} />
                        <span>Courses</span>
                    </div>
                    <div className="item">
                        <GroupsIcon style={{ color: "#A2DED0" }} />
                        <span>Groups</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LeftBar
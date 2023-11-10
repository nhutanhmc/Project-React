import { Typography } from "@mui/material";
import React from "react";
import '../css/Footer.css';
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="row1">
                <Typography sx={{fontSize:'30px'}}>Self Driving © 2023 | Privacy Policy</Typography><br/>
                <Typography>Website designed by FER201m/Team1</Typography>
            </div>
            <div className="row2">
                <BsFacebook style={{fontSize:'50px', color:'yellow', marginBottom:'3px', marginRight:'10px'}}/>
                <AiFillTwitterCircle style={{fontSize:'55px', color:'yellow'}}/>
                <AiFillGooglePlusCircle style={{fontSize:'55px', color:'yellow', marginLeft:'6px'}}/>
            </div>
            <div className="row3">
                <Typography sx={{fontSize:'30px'}}>Call Us: 0123-456-789</Typography>
            </div>
        </div>
    )
}
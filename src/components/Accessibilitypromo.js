import React from 'react'
import offering from '../images/blob.png';
import '../css/style.css';
function Section3() {
    return (
        <div class ="container section3">
            <div class ="row">
            <div class ="col-md-1"></div>
                <div class ="col-md-5">
                    <br/><br/>
                    <img id="mobileimg"src ={offering} style={{ width: 1000, height: 400 }}alt =""/>
                </div>
                <div class ="col-md-5 col-sm-12">
                    <div class ="section3-con-box" style ={{marginTop:"20%"}}>
                    <p style ={{color:"grey"}}><b>ACCESSIBLE</b></p>
                    <p style ={{fontSize:"25px"}}>Find flexible, affordable options</p>
                    <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                    <p style ={{fontSize:"20px"}}>With a wide variety of instructors, courses, specializations, and teachers, you're sure to find an option that suits you. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3

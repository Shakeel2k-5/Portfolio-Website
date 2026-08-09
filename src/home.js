import React from "react";
import "./home.css"

export default function Home(){
    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1An1QS99hZPaDaWdmrhNGgfRHcHgYdtuG';
        window.location.href = fileUrl;
    };
    

    return(
        <div className="greetingdiv">
            <div className="intro">
                <div className="intro-1">
                    <div className="greetingtext">Hi, I am </div>
                    <div className="name">Shakeel Abdullah Ahamed Batcha</div> 
                </div>
            </div>

            <div>
                <span className="role">Web developer / UI UX Designer </span>
            </div>

            <div className="buttondiv">
                <button className="download-btn" onClick={handleDownload}>Download Resume</button>
            </div>
        </div>
    )
}
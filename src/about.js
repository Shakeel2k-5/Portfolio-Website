import "./about.css";
import React from "react";


export default function About (){
    return(
            
            <div className="aboutdiv">
                <div><h1>About</h1></div>

                <div>
                    <p>I am a dedicated computer science student with a strong passion for software development and problem-solving. </p>
                    <p>I have a solid foundation in various programming languages and a deep understanding of software engineering principles.</p>
                    <p>Through various academic projects and personal initiatives, I have developed keen interest in creating innovative solutions 
                    and working collaboratively in team settings.</p>
                    <p>My goal is to apply my skills in a dynamic and challenging environment, contributing to impactful projects while furthering my professional growth.</p>
                </div>

                <div className="skillsdiv">
                    <div> <h2>Skills</h2></div>
                    <div className="skills">
                        
                            <div className="skill"> <ul><li>C </li> </ul></div>
                            <div className="skill"> <ul><li>Python </li></ul> </div>
                            <div className="skill"> <ul><li>Java </li></ul> </div>
                            <div className="skill"> <ul><li>HTML </li></ul> </div>
                            <div className="skill"> <ul><li>CSS </li></ul> </div>
                            <div className="skill"> <ul><li>JavaScript </li></ul> </div>
                            <div className="skill"> <ul><li>ReactJS </li></ul> </div>
                            <div className="skill"> <ul><li>MySQL </li></ul> </div>
                            <div className="skill"> <ul><li>MongoDB </li></ul> </div>
                        
                    </div>
                </div>
            </div>
        )
}
import React, { Component } from "react";
import Slider from "react-slick";
import './Projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


var projects = [
    {
        // url : '../../assets/Projects/Personal-Finance-Manager.png',
        url : 'https://c8.alamy.com/comp/PY96BK/finance-manager-working-with-business-graphics-on-a-laptop-PY96BK.jpg',
        title : "Personal Finance Manager",
        description : "A Personal Finance Manager helps individuals track and manage their finances, including budgeting, expense tracking, and financial planning.",
        link : "https://github.com/dakshkanaujia/personal-finance-manager",
        className : "psm"
    },
    {
        url : "../../assets/Projects/QuizApp.png",
        title : "Quiz App",
        description : "A Quiz App allows users to take quizzes on various topics, track scores, and improve their knowledge through interactive questions and answers       ",
        link : "https://github.com/dakshkanaujia/development-quizApp/tree/master",
        className : "quiz"
    },
    {
        url : "../../assets/Projects/React-Portfolio.png",
        title : "React Portfolio",
        description : "A React Portfolio showcases personal projects, skills, and achievements using the React framework for a dynamic and interactive web presence.",
        link : "https://github.com/dakshkanaujia/portfolio",
        className : "react"
    },
    {
        url : "../../assets/Projects/SDEportfolio.png",
        title : "SDE Portfolio",
        description : "An SDE Portfolio highlights a software development engineer's projects, skills, and accomplishments, demonstrating their technical expertise and experience.",
        link : "https://github.com/dakshkanaujia/hackathon-project-4-final",
        className : "sde"
    }
]
function Projects() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
      return (
        <>
        <div className="sliderContainer ProjectsContainer">
        {/* <Slider {...settings}> */}
            {
                projects.map((element)=>{
                    return(
                        <div className="projectCard">
                            <div className={`projectImage ${element.className}`}>
                            </div>
                            <div className="projectDetails">
                                <div className="projectTitle bebas-neue-regular">{element.title}</div>
                                <div className="projectDescription poppins">{element.description}</div>
                                <a href={element.link} target="/blank" className="projectLink bebas-neue-regular">
                                    <button className="buttonLink">View Project</button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        {/* </Slider> */}
        </div>
        </>
      )
    }
    
    

export default Projects;
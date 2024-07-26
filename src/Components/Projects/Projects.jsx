import React from "react";
import './Projects.css';

const projects = [
    {
        title: "GenAI - Hotel Booking Chatbot",
        description: "Chatbot made using React and OpenAI api, to book hotels(dummy). It uses OpenAI's model to generate human-like responses.",
        link: "https://github.com/dakshkanaujia/hotel-booking-chatbot",
        className: "chatbot"
    },
    {
        title: "Full-Stack Chat Application",
        description: "A Full-Stack Chat Application allows users to communicate and send messages in real-time using Firebase Realtime Datebase and frontend using React and Redux.",
        link: "https://github.com/dakshkanaujia/ChatApplication",
        className: "chatapp"
    },
    {
        url: 'https://c8.alamy.com/comp/PY96BK/finance-manager-working-with-business-graphics-on-a-laptop-PY96BK.jpg',
        title: "Personal Finance Manager",
        description: "A Personal Finance Manager helps individuals track and manage their finances, including budgeting, expense tracking, and financial planning.",
        link: "https://github.com/dakshkanaujia/personal-finance-manager",
        className: "psm"
    },
    {
        url: "../../assets/Projects/QuizApp.png",
        title: "Quiz App",
        description: "A Quiz App allows users to take quizzes on various topics, track scores, and improve their knowledge through interactive questions and answers.",
        link: "https://github.com/dakshkanaujia/development-quizApp/tree/master",
        className: "quiz"
    },
    {
        url: "../../assets/Projects/React-Portfolio.png",
        title: "React Portfolio",
        description: "A React Portfolio showcases personal projects, skills, and achievements using the React framework for a dynamic and interactive web presence.",
        link: "https://github.com/dakshkanaujia/portfolio",
        className: "react"
    },
    {
        url: "../../assets/Projects/SDEportfolio.png",
        title: "SDE Portfolio",
        description: "An SDE Portfolio highlights a software development engineer's projects, skills, and accomplishments, demonstrating their technical expertise and experience.",
        link: "https://github.com/dakshkanaujia/hackathon-project-4-final",
        className: "sde"
    }
];

function Projects() {
    return (
        <div className="ProjectsContainer">
            {projects.map((project, index) => (
                <div className="projectCard border-2 border-slate-600 rounded-xl shadow-gray-500 shadow-md" key={index}>
                    <div className={`projectImage ${project.className}`} />
                    <div className="projectDetails">
                        <div className="projectTitle bebas-neue-regular">{project.title}</div>
                        <div className="projectDescription poppins">{project.description}</div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLink bebas-neue-regular">
                            <button className="buttonLink rounded-3xl shadow-sm shadow-gray-600">View Project</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;

import React, { useState, Component } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import TextLoop from 'react-text-loop'
import { FaReact, FaSass, FaPython, FaJava } from 'react-icons/fa'
import { GrGatsbyjs } from 'react-icons/gr'
import { DiJavascript1, DiMongodb } from 'react-icons/di'

import '../styles/index.scss'

const Skills = () => {

    const frameworks = [
        { framework: "React", icon: <FaReact /> },
        { framework: "React Native", icon: <FaReact /> },
        { framework: "GatsbyJS", icon: <GrGatsbyjs /> },
        { framework: "SASS", icon: <FaSass /> },
    ]

    const languages = [
        { language: "Python", icon: <FaPython /> },
        { language: "Java", icon: <FaJava /> },
        { language: "JavaScript", icon: <DiJavascript1 /> },
        { language: "R", icon: null },
        { language: "MongoDB", icon: <DiMongodb /> },
        { language: "SQL", icon: null }
    ]

    const backend_services = [
        { service: "Firebase", icon: null }
    ]

    const interests = [
        { interest: "Mobile App Development (Native/Hybrid)"},
        { interest: "Data Analytics" },
        { interest: "Machine Learning"}
    ]

    return (
        <div>
            <h1>Skills</h1>
            <h1>Frameworks that I familiar: {' '} 
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                    {frameworks.map((value) => {
                        return (
                            <div>
                                <span>{value.framework}</span>
                                {value.icon}
                            </div>
                        );
                    })}
                </TextLoop>
            </h1>
            <h1>Programming Languages that I used: {' '}
                <TextLoop springConfig={{ stiffness: 180, damping: 8}}>
                    {languages.map((value) => {
                        return (
                            <div>
                                <span>{value.language}</span>
                                {value.icon}
                            </div>
                        );
                    })}
                </TextLoop>
            </h1>
            <h1>Backend Services/Web Services I used: {' '}
                <TextLoop>
                    {backend_services.map((value) => {
                        return (
                            <div>
                                <span>{value.service}</span>
                                {value.icon}
                            </div>
                        );
                    })}
                </TextLoop>
            </h1>
            <h1>Interest in: {' '}
                <TextLoop>
                    {interests.map((value) => {
                        return (
                            <div>
                                <span>{value.interest}</span>
                            </div>
                        );
                    })}
                </TextLoop>
            </h1>
        </div>
    );
}

export default Skills


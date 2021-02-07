import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import Img from 'gatsby-image'
import FadeIn from 'react-fade-in'

import '../styles/index.scss'
import styles from './project.module.scss'

const Projects = () => {

    const image_data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "snapsolved.png" }) {
                childImageSharp {
                    fixed(width: 300, height: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    
    return (
        
        <div>
            <h1>Personal Projects</h1>
            <div className={styles.div_container}>

                
                {/* can be used as reference for incoming projects */}


                {/* <Card className={styles.cardContainer}>
                    <div className={styles.container}>
                        <Img fixed={image_data.placeholderImage.childImageSharp.fixed}/>
                        <CardBody className={styles.CardBody}>
                            <CardTitle className={styles.cardTitle}>SnapSolved</CardTitle>
                            <CardText className={styles.cardText}>Snap Solved is a question-and-answer, educational platform developed by students for students. 
                                It aims to connect homework-bogged students and experienced tutors to facilitate learning in various subjects from primary to secondary school. 
                                In this app, students who are facing homework troubles can ask for help from experienced tutors with 3 simple steps</CardText>
                            <Button>
                                <div className={styles.buttonContainer}>
                                    <a className={styles.link}href="https://play.google.com/store/apps/details?id=com.snapsolved">Download via Google Play Store</a>
                                </div>
                            </Button>
                        </CardBody>
                    </div>
                </Card> */}
            </div>
        </div>
        
    )
}

export default Projects
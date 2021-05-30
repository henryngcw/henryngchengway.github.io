import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import { StaticImage } from 'gatsby-plugin-image'
import FadeIn from 'react-fade-in'

import '../styles/index.scss'
import styles from './project.module.scss'

const Projects = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: { frontmatter : { type: { eq: "project" }}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            starting_date
                            ending_date
                            own
                            picture
        
                        }
                        internal {
                            content
                        }
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

                {data.allMarkdownRemark.edges.map((edge) => {
                    const image_location = "../images/" + `${edge.node.frontmatter.picture}`
                    return(
                        <Card className={styles.cardContainer}>
                            <div className={styles.container}>
                                <StaticImage src={image_location} />
                                <CardBody className={styles.CardBody}>
                                    <CardTitle className={styles.cardTitle}>{edge.node.frontmatter.title}</CardTitle>
                                    <CardText className={styles.cardText}>{edge.node.frontmatter.description}</CardText>
                                    {/* <Button>
                                        <div className={styles.buttonContainer}>
                                            <a className={styles.link}href="https://play.google.com/store/apps/details?id=com.snapsolved">Download via Google Play Store</a>
                                        </div>
                                    </Button> */}
                                    <CardText className={styles.contributionPeriod}>Contribution Period: {edge.node.frontmatter.starting_date} - {edge.node.frontmatter.ending_date}</CardText>
                                </CardBody>
                            </div>
                        </Card>
                    );
                })}
               
            </div>
        </div>
        
    )
}

export default Projects
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import '../styles/index.scss'
import * as styles from './project.module.scss'

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
                            Picture {
                                childImageSharp {
                                    gatsbyImageData(
                                        width: 300
                                       
                                    )
                                }
                            }
        
                        }
                        internal {
                            content
                        }
                    }
                }
            }
            
        }
    `);

	return (
		<div>
			<h1>Personal Projects</h1>
			<div className={styles.div_container}>
				{/* can be used as reference for incoming projects */}
				{data.allMarkdownRemark.edges.map((edge) => {
					return (
						<Card className={styles.cardContainer}>
							<GatsbyImage image={getImage(edge.node.frontmatter.Picture)} alt="logo" className={styles.img} />
							<div className={styles.container}>
								<CardBody className={styles.cardBody}>
									<CardTitle className={styles.cardTitle}>{edge.node.frontmatter.title}</CardTitle>
									<CardText className={styles.cardText}>{edge.node.frontmatter.description}</CardText>
									{/* <Button>
										<div className={styles.buttonContainer}>
											<a className={styles.link} href="https://play.google.com/store/apps/details?id=com.snapsolved">Download via Google Play Store</a>
										</div>
									</Button> */}
									<CardText className={styles.cardText}>{edge.node.internal.content}</CardText>
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
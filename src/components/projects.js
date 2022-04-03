import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle,
} from 'reactstrap';
import { IconButton, Chip } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaReact } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io';

import '../styles/index.scss';
import * as styles from './project.module.scss';

const Projects = () => {

	const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: { frontmatter : { type: { eq: "project" }}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            label
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
							<GatsbyImage image={getImage(edge.node.frontmatter.Picture)} alt="logo" layout="constrained" className={styles.img} />
							<div className={styles.container}>
								<CardBody className={styles.cardBody}>
									<CardTitle className={styles.cardTitle}>{edge.node.frontmatter.title}</CardTitle>
									<Chip color='info' label={edge.node.frontmatter.label} />
									<CardText className={styles.cardText}>{edge.node.internal.content}</CardText>
									{/* <IconButton>
										<IoLogoGooglePlaystore />
									</IconButton> */}
									<div className={styles.date_container}>
										<Chip color="success" label={`${edge.node.frontmatter.starting_date} - ${edge.node.frontmatter.ending_date}`} />
									</div>
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
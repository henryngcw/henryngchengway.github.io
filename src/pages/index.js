import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import TextLoop from 'react-text-loop'

import Layout from '../components/layout'
import * as styles from './index.module.scss'

import About from '../components/about'
import Timeline from '../components/timeline'
import Projects from '../components/projects'
import Skills from '../components/skills'

const Home = (props) => {

	return (
		<Layout>
			{/* <BackgroundImage
				className={styles.backgroundImage}
				fluid={props.data.indexImage.childImageSharp.fluid}>
				<div className={styles.quotes_container}>
					<h1 className={styles.quotes_style}>
						<TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
							<span>Turning ideas into Reality!</span>
							<span>Prolific and Productive</span>
						</TextLoop>
					</h1>
					<h3 className={styles.paragraph_style}>Hi there! Welcome to my portfolio website</h3>
				</div>
			</BackgroundImage> */}
			<About />
			<Timeline />
			<Projects />
			<Skills />
		</Layout>
	);
}

export default Home

export const image_data = graphql`
    query {
        indexImage: file(relativePath: { eq: "laptop-wallpaper.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
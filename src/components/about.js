import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
	Button
} from 'reactstrap';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Stack, Chip } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './about.module.scss'

import '../styles/index.scss'

const About = () => {

	const my_image = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "myself.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

	return (
		<div>
			<div className={styles.center_image}>
				<StaticImage className={styles.my_image_container} src="../images/myself.jpg" width={300} height={300} transformOptions={{ fit: 'cover', cropFocus: 'center' }} layout="fixed" />
			</div>

			<div className={styles.msg_container}>
				<div className={styles.nameContainer}>
					<h1 className={styles.nameTypeAnimation}>Hey there, My name is <mark className>Henry Ng Cheng Way</mark>.</h1>
				</div>
				<div className={styles.icon_center_align}>
					<Button className={styles.iconButton}>
						<IconContext.Provider value={{ size: "3em", color: "#0077b5" }}>
							<a href="https://www.linkedin.com/in/ngchengway/">
								<AiFillLinkedin />
							</a>
						</IconContext.Provider>
					</Button>
					<Button className={styles.iconButton}>
						<IconContext.Provider value={{ size: "3em", color: "black" }}>
							<a href="https://github.com/henryngchengway">
								<AiFillGithub />
							</a>
						</IconContext.Provider>
					</Button>
				</div>
			</div>

			<div className={styles.tagContainer}>
				<Stack direction='column' spacing={1}>
					<Chip color='primary' label='Monash University' />
					<Chip color='primary' label='Sunway College' />
					<Chip color='success' label='Monash University Foundation Year' />
					<Chip color='success' label='C2001 - Bachelor of Computer Science' />
				</Stack>
			</div>


		</div>

	);
}

export default About
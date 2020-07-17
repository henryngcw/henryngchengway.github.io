import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
     Button
  } from 'reactstrap';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import Img from 'gatsby-image'
import styles from './about.module.scss'

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
        <div className={styles.container}>
            <div className={styles.center_image}>
                <div className={styles.my_image_container}>
                    <Img 
                        fluid={my_image.placeholderImage.childImageSharp.fluid}
                        className={styles.my_image} />
                </div>
            </div>

                <div className={styles.msg_container}>
                    <p>My name is Henry Ng Cheng Way</p>
                        <div className={styles.icon_center_align}>
                            <Button className={styles.iconButton}>
                                <IconContext.Provider value={{ size: "3em", color: "#0077b5" }}>
                                    <a href="https://www.linkedin.com/in/ngchengway/">
                                        <AiFillLinkedin/>
                                    </a>
                                </IconContext.Provider>
                            </Button>
                            <Button className={styles.iconButton}>
                                <IconContext.Provider value={{ size: "3em", color: "black" }}>
                                    <a href="https://github.com/henryngchengway">
                                        <AiFillGithub/>
                                    </a>
                                </IconContext.Provider>
                            </Button>
                        </div>
                </div>
            

            <div className={styles.about_container}>
                <h1>About</h1>
                <p>Bachelor of Advanced Computer Science and minor in Data Science from Monash University Malaysia. Currently as a final year student striving hard on working my final year project with my teammates. How best to describe myself? Very passionate in tech and programming. Developed interest since small because of the approach of games and always wondered how it works. How did people develop games and technologies. As a computer science student now, I have always been passion in discovering & learning new programming languages, improving myself in problem solving skills. My goal is to become a successful software engineer in the future</p>
            </div>

        </div>

    );
}

export default About
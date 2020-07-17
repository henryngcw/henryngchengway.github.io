import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/index.scss'
import { useStaticQuery, graphql } from 'gatsby'
import { FaReact } from 'react-icons/fa'

const Timeline_Experience = () => {

    const experience_regex_md = "/posts/experience/.*\\.md$/"


    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: { frontmatter : { type: { eq: "experience" }}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            position
                            starting_date
                            ending_date
                            company
                            months
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
            <h1>Experiences</h1>
            <VerticalTimeline>
                {data.allMarkdownRemark.edges.map((edge) => {
                    const color = "#98ff98";
                    return (
                        <VerticalTimelineElement
                            className = "vertical-timeline-element--work"
                            contentStyle={{ background: color, color: "black" }}
                            contentArrowStyle={{ borderRight: `7px solid ${color}` }}
                            date={`${edge.node.frontmatter.starting_date} - ${edge.node.frontmatter.ending_date} \n (${edge.node.frontmatter.months})`}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FaReact />}
                        >
                            <h3 className="vertical-timeline-element-title">{edge.node.frontmatter.title}, {edge.node.frontmatter.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{edge.node.frontmatter.company}</h4>
                            <p>{edge.node.internal.content}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline_Experience



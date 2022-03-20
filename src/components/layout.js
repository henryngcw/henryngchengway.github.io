/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"

import Header from "./header"
import Footer from './footer'

import * as styles from './layout.module.scss';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<div className={styles.container}>
				{props.children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout;

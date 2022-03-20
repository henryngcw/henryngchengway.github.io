import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
	Container
} from 'reactstrap';
import '../styles/index.scss'

const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const author_data = useStaticQuery(graphql`
	query {
	  site {
		siteMetadata {
		  title
		}
	  }
	}
  `)

	return (
		<Navbar fixed="top" expand="sm">
			<NavbarBrand href="/">{author_data.site.siteMetadata.title}</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					{/* <NavItem>
						<NavLink href="/">About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/blog">Blog</NavLink>
					</NavItem> */}
				</Nav>
			</Collapse>
		</Navbar>
	);
}


export default Header

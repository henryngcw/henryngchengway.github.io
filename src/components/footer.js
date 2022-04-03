import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as styles from './footer.module.scss'

const Footer = () => {
	const author_data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

	return (
		<div className={styles.footer_container}>
			<footer>
				Created By
				{` `}
				<a>{author_data.site.siteMetadata.author}</a>
				{` `}
				© 2020
			</footer>
		</div>
	);
}

export default Footer
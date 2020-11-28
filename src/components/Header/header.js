
import React from "react"
import Img from "gatsby-image";
import {graphql, useStaticQuery, Link} from "gatsby";

import styles from "./header.module.css"

const Header = () => {
const data = useStaticQuery(
    graphql`            
            query {
                file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 400) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            `
    )
    return (
  <header className={styles.container}>
      <Link to='/'>
        <Img className={styles.image} fluid={data.file.childImageSharp.fluid}/>
      </Link>

  </header>
    )
}

export default Header

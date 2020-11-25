import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image"
import styles from "./Hero.module.css"

const Hero = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "hero.png" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return (
            <BackgroundImage className={styles.container} fluid={data.file.childImageSharp.fluid}>
                <h1 className={styles.subject}>Od oddłużania do normalności</h1>
            </BackgroundImage>

    )
}
export default Hero;
import React, {useState} from "react";
import styles from "./About.module.css"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image"

import Modal from "../Modal/Modal"

const About = () => {
    const data = useStaticQuery(
        graphql`
            query {
                image1: file(relativePath: { eq: "image1.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 400) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image2: file(relativePath: { eq: "image2.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 400, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )


    const [isVisible, setIsVisible] = useState({
        initial: false,
        clicked: null,
    })

    const handleVisibility = () => {
        if(isVisible.initial === false) {
            setIsVisible({
                initial: null,
                clicked: true,
            })
        } else if(isVisible.clicked === true) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        } else if(isVisible.clicked === false) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        }
    };
    return(
        <section className={styles.container}>
                <Modal visibility={isVisible} unActive={handleVisibility}/>
                <Img className={styles.img} fluid={data.image2.childImageSharp.fluid}/>
            <div className={styles.text__container}>
                <h2 className={styles.subject}>Kim jesteśmy?</h2>
                <p>
                    Experci finansowi mający swoją centralę w Katowicach ,
                    w województwie śląskim, od lat zajmuje się sektorem
                    usług finansowych w zakresie kompleksowych oddłużeń
                    osób prywatnych, firm jednoosobowych oraz wolnych zawodów.
                </p>
                <button onClick={handleVisibility} className={styles.button}>czytaj więcej</button>
            </div>
            <Img className={styles.img2} fluid={data.image1.childImageSharp.fluid}/>
            <p className={styles.short__text}>
                Od wielu lat z powodzeniem funkcjonujemy na tym rynku
            </p>
        </section>
    )
}
export default About
import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import styles from "./services.module.css"
import ServicesList from "../ServicesList/ServicesList";
import Img from "gatsby-image";


const services = [
    {
        id: 0, name: 'Wsparcie w oddłużaniu'
    },
    {
        id: 1, name: 'Kredyt na spłatę parrabanków'
    },
    {
        id: 2, name: 'Pomoc przy problemach spłacie aktualnych zobowiązań'
    },
    {
        id: 3, name: 'Bez opłat wstępnych, wraz z szybką decyzją i wysoką skutecznością'
    },
    {
        id: 4, name: 'Nawet do 200 tysięcy na 120 mięsięcy dla Ciebie'
    },
    {
        id: 5, name: 'Akceptujemy zaległości powyżej 90 dni'
    },
]

const Services = () => {
    const data = useStaticQuery(
        graphql`
            query {
                image1: file(relativePath: { eq: "services/image1.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 400) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image2: file(relativePath: { eq: "services/image2.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 400, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return (
        <section className={styles.container}>
            <div className={styles.text__container}>
                <h2 className={styles.subject}>W czym Ci pomożemy?</h2>

                <ServicesList items={services}/>
            </div>
            <Img className={styles.img2} fluid={data.image2.childImageSharp.fluid}/>
            <p className={styles.short__text}>
                Naszym celem było i jest, aby Klient nie tylko miał jedną ratę, ale żeby wrócił na normalne tory, aby był postrzegany przez inne Banki czy Skoki jak pełnoprawny obywatel.
            </p>
        </section>
    )
}
export default Services
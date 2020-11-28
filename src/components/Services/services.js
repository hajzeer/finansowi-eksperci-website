import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import styles from "./services.module.css"
import ServicesList from "../ServicesList/ServicesList";


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
                file(relativePath: { eq: "image1.jpg" }) {
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
        <section className={styles.container}>
            <div className={styles.text__container}>
                <h2 className={styles.subject}>W czym Ci pomożemy?</h2>
                <ServicesList items={services} image={data.file}/>
            </div>
        </section>
    )
}
export default Services
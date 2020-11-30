import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import styles from "./services.module.css"
import ServicesList from "../ServicesList/ServicesList";
import Img from "gatsby-image";


const services = [
    {
        id: 0, name: 'Pożyczka oddłużeniowa SKOK pod zastaw nieruchomości (dom, mieszkanie, działka) do kwoty 200.000 zł'
    },
    {
        id: 1, name: 'Akceptujemy wpisy w bazach BIK, BIG, KRD'
    },
    {
        id: 2, name: 'Komornik i bieżące zaległości w BIK nie stanowią problemu'
    },
    {
        id: 3, name: 'Spłacimy kredyty bankowe, chwilówki, pożyczki prywatne, pozabankowe, nawet jeśli są już wypowiedziane i sprawa jest u komornika'
    },
    {
        id: 4, name: 'Nie pobieramy opłat wstępnych'
    },
    {
        id: 5, name: 'Oprocentowanie pożyczki Skok: 7,5% w skali roku, maksymalny okres kredytowania: 120 miesięcy'
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
                <h2 className={styles.subject}>
                    Oferujemy pożyczki oddłużeniowe we współpracy z
                    naszym partnerem czyli Kasą SKOK:
                </h2>

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
import React from "react"
import styles from "./services.module.css"
import ServicesList from "../ServicesList/ServicesList";

const services = [
    {
        id: 0, name: 'oddłużanie'
    },
    {
        id: 1, name: 'oddłużanie'
    },
    {
        id: 2, name: 'oddłużanie'
    },
    {
        id: 3, name: 'oddłużanie'
    },
]

const Services = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text__container}>
                <h2 className={styles.subject}>W czym Ci pomożemy?</h2>
                <ServicesList items={services}/>
            </div>
        </section>
    )
}
export default Services
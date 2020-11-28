import React from "react";
import PropTypes from "prop-types";

import styles from "./ServicesList.module.css"
import Img from "gatsby-image"

const ServicesList = ({items, image}) => (

    items.map(({name, id}) => {
        if (id % 2 === 0) {
            return (
            <section className={styles.section__outer} key={id}>
                <Img className={styles.img} fluid={image.childImageSharp.fluid}/>
                <h3 className={styles.text__style}>{name}</h3>
            </section>
            )
        } else {
            return (
                <section className={`${styles.section__outer} ${styles.section__outerMedia}`} key={id}>
                <Img className={styles.img2} fluid={image.childImageSharp.fluid}/>
                <h3 className={styles.text__style2}>{name}</h3>
            </section>
            )
        }}))

ServicesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })).isRequired
};

ServicesList.defaultProps = {
    items: []
}

export default ServicesList
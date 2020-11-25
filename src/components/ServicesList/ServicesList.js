import React from "react";
import PropTypes from "prop-types";

import styles from "./ServicesList.module.css"

const ServicesList = ({items}) => (

    items.map(({name, id}) => {
        if (id % 2 === 0) {
            return (
            <section className={styles.section__outer} key={id}>
                <h3 className={styles.text__style}>{name}</h3>
                <img className={styles.img}/>
            </section>
            )
        } else {
            return (
                <section className={styles.section__outer} key={id}>
                <h3 className={styles.text__style2}>{name}</h3>
                <img className={styles.img2}/>
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
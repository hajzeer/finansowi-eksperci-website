import React from "react";
import styles from "./footer.module.css";

const footer = () => {
    const website = "https://hitherestudio.netlify.app/pl/"
    return (
        <section className={styles.footer}>
            <p className={styles.paragraph}>Wszelkie prawa zastrzeżone</p>
            <p className={styles.paragraph}>© 2020 Designed and created by <br/>
                <a className={styles.anchor} href={website}> hiThere Studio</a>
            </p>
        </section>
    )
}
export default footer
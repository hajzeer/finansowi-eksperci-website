import React from 'react';
import styles from "./Contact.module.css"

const Contact = () => {

    return (
        <section>
        <form className={styles.container__inner}>
            <input className={styles.input} type="hidden" name="contact__number"/>
            <label>Imię Nazwisko</label>
            <input className={styles.input} type="text" name="user__name"/>
            <label>Email</label>
            <input className={styles.input} type="email" name="user__email"/>
            <label>Temat</label>
            <input className={styles.input} type="subject" name="subject"/>
            <label>Treść</label>
            <textarea className={styles.textarea} type="text" name="message"/>
            <button className={styles.button}>Wyślij</button>
            <label>Lub zadzwoń do nas</label>
            <label>Damian</label>
            <a>123 - 456 -789</a>
            <label>Anna</label>
            <a>123 - 456 -789</a>
        </form>
        </section>

    )
}
export default Contact;
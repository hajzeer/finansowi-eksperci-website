import React from 'react';
import styles from "./Contact.module.css"

const Contact = () => {

    const facebookUrl = "https://www.facebook.com/Eksperci-finansowi-100237108468912/?ref=page_internal"
    const handleFBSubmit = e => {
        e.preventDefault();
        window.open(facebookUrl,'_blank')
    }

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
            <p>Damian</p>
            <a className={styles.anchor} href="tel:883-344-149">883-344-149</a>
            <p>Anna</p>
            <a className={styles.anchor} href="tel:666-682-661">666-682-661</a>
            <button onClick={handleFBSubmit} className={styles.media__button}>
                <i className="gg-facebook"></i>
            </button>
        </form>
        </section>

    )
}
export default Contact;
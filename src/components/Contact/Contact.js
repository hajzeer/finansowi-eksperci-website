import React, {useRef} from 'react';
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";


const Contact = () => {

    const facebookUrl = "https://www.facebook.com/Eksperci-finansowi-100237108468912/?ref=page_internal"
    const handleFBSubmit = e => {
        e.preventDefault();
        window.open(facebookUrl,'_blank')
    }


    let name = useRef(null)
    let email = useRef(null)
    let subject = useRef(null)
    let message = useRef(null)



    const sendEmail = (e) => {
        e.preventDefault()

        const service_id = process.env.GATSBY_SERVICE_ID;
        const template_id = process.env.GATSBY_TEMPLATE_ID;
        const user_id = process.env.GATSBY_USER_ID;
        if(
            name.value === '' ||
            email.value === '' ||
            subject.value === '' ||
            message.value === ''
        ) {
            if(name.value === '') {
                name.value = 'UZUPEŁNIJ POLE';
            } if (email.value === '') {
                email.value = 'UZUPEŁNIJ POLE';
            } if (message.value === '') {
                message.value = 'UZUPEŁNIJ POLE';
            } if (subject.value === '') {
                subject.value = 'UZUPEŁNIJ POLEgit';
            }
        } else {
            emailjs.send(service_id,template_id,{
                subject: subject.value,
                name: name.value,
                email: email.value,
                message: message.value,
            },user_id)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });

            name.value = ''
            email.value = ''
            subject.value = ''
            message.value = ''
        }

    }

    return (
        <section>
        <form className={styles.container__inner} onSubmit={sendEmail}>
            <input className={styles.input} type="hidden" name="contact__number"/>
            <label>Imię Nazwisko</label>
            <input className={styles.input} ref={el => {name = el}} type="text" name="user__name"/>
            <label>Email</label>
            <input className={styles.input} ref={el => {email = el}} type="email" name="user__email"/>
            <label>Temat</label>
            <input className={styles.input} ref={el => {subject = el}} type="subject" name="subject"/>
            <label>Treść</label>
            <textarea className={styles.textarea} ref={el => {message = el}} type="text" name="message"/>
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
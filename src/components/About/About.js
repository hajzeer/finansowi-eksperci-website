import React, {useState} from "react";
import styles from "./About.module.css"

import Modal from "../Modal/Modal"

const About = () => {


    const [isVisible, setIsVisible] = useState({
        initial: false,
        clicked: null,
    })

    const handleVisibility = () => {
        if(isVisible.initial === false) {
            setIsVisible({
                initial: null,
                clicked: true,
            })
        } else if(isVisible.clicked === true) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        } else if(isVisible.clicked === false) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        }
    };
    return(
        <section className={styles.container}>
                <Modal visibility={isVisible} unActive={handleVisibility}/>
                <img className={styles.img}/>
            <div className={styles.text__container}>
                <h2 className={styles.subject}>Kim jesteśmy?</h2>
                <p>
                    Experci finansowi mający swoją centralę w Katowicach ,
                    w województwie śląskim, od lat zajmuje się sektorem
                    usług finansowych w zakresie kompleksowych oddłużeń
                    osób prywatnych, firm jednoosobowych oraz wolnych zawodów.
                </p>
                <button onClick={handleVisibility} className={styles.button}>czytaj więcej</button>
            </div>
            <img className={styles.img2}/>
        </section>
    )
}
export default About
import React, {useEffect, useRef} from "react";
import styles from "./Modal.module.css"
import gsap from "gsap"

const Modal = ({visibility, unActive}) => {
    const StaggerReveal = (node1, node2) => {
        gsap.from([node1, node2],
            {
                duration: 1.5,
                height: 0,
                transformOrigin: 'top',
                ease: 'Power4.easeOut',
                stagger: {
                    amount: .3
                }
            })
    }

    let outerSection = useRef(null)
    let innerSection = useRef(null)


    useEffect(() => {
        if(visibility.clicked === false) {

            gsap.fromTo(innerSection,
                {opacity: 1, y: 0},
                {
                    opacity: 0, duration: .2, y:'+=10px', ease: 'power4.easeOut'
                })

            gsap.to(outerSection, {duration: 1, delay: .5, height: 0, ease: 'Power4.easeOut', stagger: {amount: 0.7}})
            gsap.to(outerSection, {duration: 1, css:{display:'none'} })

        } else if(visibility.clicked === true ||
            (visibility.clicked === true && visibility.initial === null)) {


            gsap.to(outerSection, {duration: 0, css:{display:'block'}})
            gsap.to(outerSection,{duration: 0, opacity: 1, height: '100%'})

            StaggerReveal(outerSection)
            gsap.fromTo(innerSection,
                {opacity: 0, y: '+=10px'},
                {
                    opacity: 1, delay: 1, duration: .2, y:0, ease: 'power4.easeOut'
                })
        }
    }, [visibility])


    return(
        <section ref={el => (outerSection = el)} className={`modal__container ${styles.container}`}>
            <div ref={el => {innerSection = el}} className={styles.container__inner}>
                <p className={styles.text}>
                    Od ponad dekady reprezentujemy jedną ze Spółdzielczych Kas Oszczędnościowo Kredytowych, dla której jesteśmy partnerem strategicznym.
                    Jako jedna z pierwszych firm wprowadziliśmy zasadę: „od oddłużenia do normalności”. Udzielenie kredytu oddłużeniowego to jest dopiero początek pracy. Naszym celem było i jest, aby Klient nie tylko miał jedną ratę, ale żeby wrócił na normalne tory, aby był postrzegany przez inne Banki czy Skoki jak pełnoprawny obywatel. A żeby to osiągnąć trzeba nie tylko udzielić kredytu ale zadbać także o bazy m.in. Biuro Informacji Kredytowej, Bankowy Rejestr, Biuro Informacji Gospodarczej – Infomonitor, Krajowy Rejestr Długów itd. Podniesienie punktacji w Biurze Informacji Kredytowej to bardzo ważny cel. Cel, który „otwiera furtkę” Klientowi na najbliższą przyszłość.
                    I tak też od wielu lat z powodzeniem funkcjonujemy na tym rynku. A to dlatego, że nasza firma odpowiedzialnie dobiera Klientów. Nie każdego oddłużymy, nie jesteśmy cudotwórcami. Klient, musi  spełnieniać dwa wymogi (zabezpieczenie, zdolność kredytowa), musi także chcieć się oddłużyć żeby funkcjonować już normalnie i spłacać raty zaciągniętego kredytu . Bo jeśli nie zrozumie naszego mechanizmu, to nie ma sensu pracować dalej z taką osobą. Szkoda czasu.
                </p>
                <button className={styles.button} onClick={unActive}>
                    <span className={styles.span}/>
                </button>
            </div>
        </section>
    )
}
export default Modal;
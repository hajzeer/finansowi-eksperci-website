/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Header from "../Header/header"
import Footer from "../Footer/footer"
import "./layout.module.css"

const Layout = ({ children }) => {

    useEffect(() => {

        const sections = document.querySelectorAll('section');
        gsap.registerPlugin(ScrollTrigger)

        sections.forEach(section => {
            gsap.fromTo(section,
                {opacity: 0},
                {opacity: 1, stagger: 0.4, duration: 1, ease: 'power4.Out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                    }});
        });

    })

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

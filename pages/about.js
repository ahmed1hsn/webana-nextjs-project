/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Head from "next/head"
import Navbar from "../components/navbar"
import BusinessGrowthAgency from "../components/about-us/business-growth-agency"
import AboutUs from "../components/about-us/about-us"
import OurMission from "../components/about-us/our-mission"
import OurCoreValues from "../components/about-us/our-core-values"
import BuildTheBestExperience from "../components/about-us/build-the-best-experience"
import LetsWorkTogether from "../components/about-us/lets-work-together"

const About = () => (
    <>
        <Head>
            <title>About Us</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/webanah-logo.png" type="image/png"></link>
        </Head>
        <Navbar>
            <BusinessGrowthAgency />
            <AboutUs />
            <OurMission />
            <OurCoreValues />
            <div
            css={css`
              padding: 1rem;`}></div>
            <BuildTheBestExperience />
            <LetsWorkTogether />
        </Navbar>
    </>
)

export default About
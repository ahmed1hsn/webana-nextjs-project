/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Head from "next/head"
import Navbar from "../src/components/Sub-Components/navbar"
import BusinessGrowthAgency from "../src/components/Main-Components/about-us/business-growth-agency"
import AboutUs from "../src/components/Main-Components/about-us/about-us"
import OurMission from "../src/components/Main-Components/about-us/our-mission"
import OurCoreValues from "../src/components/Main-Components/about-us/our-core-values"
import BuildTheBestExperience from "../src/components/Main-Components/about-us/build-the-best-experience"
import LetsWorkTogether from "../src/components/Main-Components/about-us/lets-work-together"

const About = () => (
    <>
        <Head>
            <title>About Us</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/webanah-logo.png" type="image/png"></link>
        </Head>
        <Navbar background='/images/background2.png'>
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
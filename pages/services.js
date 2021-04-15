/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Head from "next/head"
import Navbar from "../components/navbar"
import BrandingAndDesign from "../components/services/branding-and-design"
import ContentProduction from "../components/services/content-production"
import AppDevelopment from "../components/services/app-development"
import WebDevelopment from "../components/services/web-development"
import SearchEngineOptimization from "../components/services/search-engine-optimization"
import SocialMediaManagement from "../components/services/social-media-management"
import Consulting from "../components/services/consulting"


const Services = () => (
    <>
        <Head>
            <title>Services</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/webanah-logo.png" type="image/png"></link>
        </Head>
        <Navbar>
            <BrandingAndDesign />
            <ContentProduction />
            <AppDevelopment />
            <WebDevelopment />
            <SearchEngineOptimization />
            <SocialMediaManagement />
            <Consulting />
        </Navbar>
    </>
)

export default Services
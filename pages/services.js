/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import Head from "next/head"
import Navbar from "../src/components/Sub-Components/navbar"
import BrandingAndDesign from "../src/components/Main-Components/services/branding-and-design"
import ContentProduction from "../src/components/Main-Components/services/content-production"
import AppDevelopment from "../src/components/Main-Components/services/app-development"
import WebDevelopment from "../src/components/Main-Components/services/web-development"
import SearchEngineOptimization from "../src/components/Main-Components/services/search-engine-optimization"
import SocialMediaManagement from "../src/components/Main-Components/services/social-media-management"
import Consulting from "../src/components/Main-Components/services/consulting"

const Space = styled.div`
  padding: 5% 0;
`

const Services = () => (
    <>
        <Head>
            <title>Services</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/webanah-logo.png" type="image/png"></link>
        </Head>
        <Navbar>
            <BrandingAndDesign />
            <Space />
            <ContentProduction />
            <Space />
            <AppDevelopment />
            <Space />
            <WebDevelopment />
            <Space />
            <SearchEngineOptimization />
            <Space />
            <SocialMediaManagement />
            <Space />
            <Consulting />
            <Space />
        </Navbar>
    </>
)

export default Services
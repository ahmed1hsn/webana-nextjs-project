/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Layout from "../components/layout"
import BrandingAndDesign from "../components/services/branding-and-design"
import ContentProduction from "../components/services/content-production"
import AppDevelopment from "../components/services/app-development"
import WebDevelopment from "../components/services/web-development"
import SearchEngineOptimization from "../components/services/search-engine-optimization"
import SocialMediaManagement from "../components/services/social-media-management"
import Consulting from "../components/services/consulting"


const Services = () => (
    <Layout>
        <BrandingAndDesign />
        <ContentProduction />
        <AppDevelopment />
        <WebDevelopment />
        <SearchEngineOptimization />
        <SocialMediaManagement />
        <Consulting />
    </Layout>
)

export default Services
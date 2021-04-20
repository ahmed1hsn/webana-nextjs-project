/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Navbar from "../src/components/Sub-Components/navbar"
import PortfolioCard from "../src/components/Main-Components/portfolio/portfolio-card"

const Portfolio = () => (
    <Navbar background='/images/background2.png'>
        <PortfolioCard />
    </Navbar>
)

export default Portfolio
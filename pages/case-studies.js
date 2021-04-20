/** @jsx jsx */

import Navbar from "../src/components/Sub-Components/navbar"
import { css, jsx } from "@emotion/react"
import CaseStudyCard from "../src/components/Main-Components/case-studies/case-study-card"

const CaseStudy = () => (
    <Navbar background='/images/background2.png'>
        <CaseStudyCard />
    </Navbar>
)

export default CaseStudy
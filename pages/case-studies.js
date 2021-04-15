/** @jsx jsx */

import Navbar from "../src/components/navbar"
import { css, jsx } from "@emotion/react"

const CaseStudy = () => (
    <Navbar>
        <h1
            css={css`
              color: white;
              `}
        >
            Case Studies</h1>
    </Navbar>
)

export default CaseStudy
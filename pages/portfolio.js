/** @jsx jsx */

import Navbar from "../components/navbar"
import { css, jsx } from "@emotion/react"

const Portfolio = () => (
    <Navbar>
        <h1
            css={css`
              color: white;
              `}
        >
            Portfolio</h1>
    </Navbar>
)

export default Portfolio
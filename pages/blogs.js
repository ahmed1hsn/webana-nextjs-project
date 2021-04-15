/** @jsx jsx */

import Navbar from "../src/components/Sub-Components/navbar"
import { css, jsx } from "@emotion/react"

const Blogs = () => (
    <Navbar>
        <h1
            css={css`
              color: white;
              `}
        >
            Blogs</h1>
    </Navbar>
)

export default Blogs
/** @jsx jsx */

import * as line from "../shared/line";
import { Sidebar } from "../shared/sidebar"
import { Button } from "../shared/button"
import * as faSolid from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Link from "next/link"
import MyParticles from "./particles";

export default function Layout({ children }) {
    return (
        <div>
            <div
                css={css`
                  position: fixed;
                  /* z-index: 0; */
                  `}
            >
                <MyParticles />
            </div>
            <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  padding: 1rem;
                  position: relative;
                  `}
            >
                <faSolid.Search
                    css={css`
                    margin-left: auto;
                    padding-top: 0.125rem;
                    padding-right: 1rem;
                    ${base};
                    `} size="24" />
                <Link href="/contact"><Button primary>Contact Us</Button></Link>
            </div>

            <div
                css={css`
                  position: relative;`}>{children}</div>

            <Sidebar />

        </div>
    )
}

const base = css`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
`
/** @jsx jsx */

import { Sidebar } from "./sidebar"
import { Button } from "./button"
import * as faSolid from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Link from "next/link"

export default function Navbar({ background, children }) {
    return (
        <div
            css={css`
              background: center / cover no-repeat url(${background}) fixed;
              `}>
            <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  padding: 1rem;
                  `}
            >
                <faSolid.Search
                    css={css`
                    margin-left: auto;
                    padding-top: 0.125rem;
                    padding-right: 1rem;
                    ${base};
                    `}
                    size="24"
                />
                <Link href="/contact"><Button primary>Contact Us</Button></Link>
            </div>
            <div
                css={css`
                  `}
            >
                {children}</div>

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
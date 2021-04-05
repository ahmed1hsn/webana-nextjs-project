/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import { Button } from "../../shared/button"

const base = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  padding: 1rem;
  margin-bottom: 5rem;
`

const Post = () => (
    <div
        css={base}
    >
        <div
            css={css`
              padding: 6rem;
              `}
        >
            <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: 2rem;
                  `}
            >
                CREATIVITY REALM</div>
            <div
                css={css`
                  padding: 1rem 0;`}>
                Webanah is your ultimate fantasy that has come alive. Your dream of having an established and attractive website design for your business with commendable online performance and abundant revenue is Webanah’s food for soul. Webanah use your dream to energize its webanarians who make your brand rule the online universe with engaging design, unparallel digital marketing strategies and position it to the throne of search engines' highest rank.
            </div>
            <Button>Contact Us</Button>
        </div>
        <div
            css={css`
              width: 500px;
              height: 500px;
              position: relative;
              `}
        >
            <Image
                src="/webana-assets/webanah-character3.png"
                layout="responsive"
                width={930}
                height={872}
            />
        </div>

    </div>
)

export { Post }
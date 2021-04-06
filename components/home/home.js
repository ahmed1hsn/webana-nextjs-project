/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import { Button } from "../../shared/button"

const Home = () => (
    <div
        css={css`
          padding: 0.5rem;
          @media (min-width: 1200px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          `}
    >
        <div
            css={css`
              /* padding: 0.5rem; */
              align-self: center;
              @media (min-width: 1200px) {
                  margin-left: 1rem;
              }
              `}
        >

            <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: 2rem;
                  `}
            >
                CREATIVITY REALM
            </div>

            <div
                css={css`
                  padding-bottom: 0.5rem;
                  `}
            >
                Webanah is your ultimate fantasy that has come alive. Your dream of having an established and attractive website design for your business with commendable online performance and abundant revenue is Webanah’s food for soul. Webanah use your dream to energize its webanarians who make your brand rule the online universe with engaging design, unparallel digital marketing strategies and position it to the throne of search engines' highest rank.
            </div>
            <div
                css={css`
                  text-align: center;`}>
            </div>
        </div>
        <div
            css={css`
              padding: 1rem;
              justify-self: center;`}>
            <Image
                css={css``}
                src="/webana-assets/webanah-character3.png"
                layout="intrinsic"
                width={930}
                height={872}
            />
        </div>

    </div>
)

export default Home

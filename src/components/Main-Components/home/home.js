/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import { Button } from "../../Sub-Components/button"
import Link from "next/link";

const Home = () => (
    <div
        css={css`
          display: grid;
          padding: 0.5rem;
          @media (min-width: 1200px) {
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
            {/* <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1rem, -0.875rem + 8.333vw, 3.75rem);
                  letter-spacing: 0.1rem;
                  `}
            >
                CREATIVITY REALM
            </div> */}
            <div>
                <Image
                    src="/images/Title.png"
                    layout="intrinsic"
                    width={736}
                    height={305}
                />
            </div>


            <div
                css={css`
                  letter-spacing: 0.1rem;
                  line-height: 1.4rem;
                  padding: 1rem 0;
                  `}
            >
                Webanah is your ultimate fantasy that has come alive. Your dream of having an established and attractive website design for your business with commendable online performance and abundant revenue is Webanah’s food for soul. Webanah use your dream to energize its webanarians who make your brand rule the online universe with engaging design, unparallel digital marketing strategies and position it to the throne of search engines' highest rank.
            </div>
            <div
                css={css`
                  text-align: center;
                  `}
            >
            </div>
            <Link href="/contact"><Button>Contact Us</Button></Link>
        </div>
        <div
            css={css`
              padding: 0 10%;
              align-self: center;
              justify-self: center;
              @keyframes move {
                  0% {
                      transform: translate(100%);
                      opacity: 0;
                  }
                  100% {
                      transform: translate(0%);
                      opacity: 1;
                  }
              }
              animation: move 0.5s linear;
              `}
        >
            <Image
                css={css``}
                src="/images/webanah-character3.png"
                layout="intrinsic"
                width={930}
                height={872}
            />
        </div>

    </div>
)

export default Home

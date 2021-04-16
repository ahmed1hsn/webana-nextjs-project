/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import Link from "next/link"
import { Button } from "../../Sub-Components/button"

const WhatWeDo = () => (
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
            <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1rem, -0.875rem + 8.333vw, 3.75rem);
                  letter-spacing: 0.1rem;
                  `}
            >
                WHAT WE DO</div>
            <div
                css={css`
                  letter-spacing: 0.1rem;
                  line-height: 1.4rem;
                  padding: 1rem 0;
                  `}
            >
                Webanah is a digital superhero at your rescue for all the digital needs of your brand. With a professional and highly experienced team on board, Webanah provides you with ultimate marketing strategies for your website. Webanah takes your brand to the new heights of success by increasing the audience towards the website through specific promotional strategies like successful SEO, attractive branding, impeccable UI/UX designing, engaging content creation, responsive app development, and ideas-driven consultancy. Our team works untiringly until your website reaches desired results.
            </div>
            <div
                css={css`
                  text-align: center;
                  `}
            >
            </div>
            <Link href="/contact"><Button>Learn More</Button></Link>
        </div>
        <div
            css={css`
              justify-self: center;
              `}
        >
            <Image
                src="/images/webanah-character2.png"
                layout="intrinsic"
                width={654}
                height={589}
            />
        </div>

    </div>
)

export default WhatWeDo

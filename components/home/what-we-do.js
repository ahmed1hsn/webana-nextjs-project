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
  margin-bottom: 3rem;
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
                WHAT WE DO</div>
            <div
                css={css`
                  padding: 1rem 0;
                  `}
            >
                Webanah is a digital superhero at your rescue for all the digital needs of your brand. With a professional and highly experienced team on board, Webanah provides you with ultimate marketing strategies for your website. Webanah takes your brand to the new heights of success by increasing the audience towards the website through specific promotional strategies like successful SEO, attractive branding, impeccable UI/UX designing, engaging content creation, responsive app development, and ideas-driven consultancy. Our team works untiringly until your website reaches desired results.
            </div>
            <Button>Learn More</Button>
        </div>
        <div
            css={css`
              width: 400px;
              height: 400px;
              position: relative;
              `}
        >
            <Image
                src="/webana-assets/webanah-character2.png"
                layout="responsive"
                width={654}
                height={589}
            />
        </div>

    </div>
)

export { Post }
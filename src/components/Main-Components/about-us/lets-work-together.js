/** @jsx jsx */

import { jsx, css } from "@emotion/react"
import Link from "next/link"
import { Button } from "../../Sub-Components/button"

const LetsWorkTogether = () => (
    <div
        css={css`
          text-align: center;
          padding: 2rem;
          margin-top: 8rem;
          margin-bottom: 15rem;
          `}
    >
        <div
            css={css`
              font-family: 'Green Lantern';
              color: #16f533;
              font-size: 3.75rem;
              `}
        >
            TRAPPED IN THE UNIVERSE OF COMPETITERS?
            </div>
        <div
            css={css`
              padding: 1rem 0 3rem;
              `}
        >
            Is your business not growing online? Are you worried about your business website's performance on search engines? Or your website is not generating any traffic? Well, you might need a bunch of updated strategies for your website to work well online. Webanah is your magical rescue that converts the audience to your website in a snap. With our exceptional digital marketing services like web development, content marketing, SEO, branding and design, social media marketing, app development, and consulting, we can increase the audience engagement on your website.
        </div>

        <Link href="/contact"><Button
            css={css`
              color: white;
              `}
        >
            Let's do this
            </Button>
        </Link>
    </div>
)

export default LetsWorkTogether
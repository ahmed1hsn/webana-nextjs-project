/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"


const WebDevelopment = () => (
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
                  font-size: 2rem;
                  `}
            >
                Web DEVELOPMENT
            </div>
            <div
                css={css`
                  padding-bottom: 0.5rem;
                  `}
            >
                Webanah is a full-stack developing company with extensive research in the field. With several services available like developing websites, web applications, web portals, APIs, and Ecommerce websites, we have had an outstanding reputation among its clients for impressive output and on-time delivery. Web development deals in scaling, designing, integrating, and maintaining software that works through the internet or intranet the team offers competency in the latest language versions, frameworks, innovative tech designs, and AI. Web applications constructed by us tend to serve complexity and increasing number of users due to their modular architectural designs, cloud resources, and messaging. With your apps being developed by experts in both front and back-end patterns, the website/app is also modifiable and can easily adapt to layered or modular architecture. Client recommendation is something Webanah takes pride in because of our several innovative web designs thriving on the internet for your esteemed clients. Trust us with our next project to know just how good our team is.
            </div>
        </div>
        <div
            css={css`
              padding: 20%;
              justify-self: center;
              `}
        >
            <Image
                src="/images/web-development.png"
                layout="intrinsic"
                width={1142}
                height={915}
            />
        </div>
    </div>
)

export default WebDevelopment

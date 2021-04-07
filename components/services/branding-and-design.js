/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"


const BrandingAndDesign = () => (
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
                BRANDING & DESIGN
            </div>
            <div
                css={css`
                  padding-bottom: 0.5rem;
                  `}
            >
                Having a unique identity that is positioned into audience’s mind be it an enticing logo, attractive color palette or catchy taglines and headlines, merchandise, ATL and BTL activities all fall under branding and design department. Webanah is a leading branding and design company with an exceptional design team that creates original, intriguing, and innovative designs that capture the essence of your brand. The team’s designs help our customers in maximizing their revenues and engagement. In the modern world, your designs are your first interaction with your potential clients, making your designs the most important part of your company’s overview.
                Reach out to us for the absolute best to work on your company’s needs. Our clients can count on total transparency from us, as our team appreciates our clients’ input in making the final product better than the initial drafts. Hundreds of clients choose to trust us with their everyday designing needs. Waste no time and reach out to get the best team of designers working for you in no time.
            </div>
        </div>
        <div
            css={css`
              padding: 20%;
              justify-self: center;
              `}
        >
            <Image
                src="/images/branding-and-design.png"
                layout="intrinsic"
                width={471}
                height={547}
            />
        </div>
    </div>
)

export default BrandingAndDesign

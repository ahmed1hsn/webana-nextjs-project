/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const OurMission = () => (
    <div
        css={css`
          display: grid;
          padding: 0.5rem;
          @media (min-width: 1200px) {
              grid-template-columns: 1fr 1fr;
          }`}
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
                  color: transparent;
                  font-size: 3.75rem;

                  -webkit-text-stroke: 0.05rem #16f533;
                  `}
            >
                Our Mission</div>
            <div
                css={css`
                  padding: 1rem 0;
                  `}
            >
                Webanah is your ultimate business savior. The sole mission of Webanah is to help small and large businesses to grow online with better marketing and ROI. Our professional team tracks every marketing activity that your business follows and eliminates needless strategies. We design effective promotional strategies that increase the traffic towards your business website through detailed research. We crawl deep into the statistics of your target market, niche, and opportunities to create effective strategies that would help your business to grow its online presence.
                And to gain that boost in your business we have a team of professional team of developers on board to design your website, apps and provide social media marketing. Our mission is to turn your business in to a brand and position it into customer’s mind through effective promotional strategies.
            </div>
            {/* <div
                css={css`
                  text-align: center;
                  `}
            >
                <Button>Contact Us</Button>
            </div> */}
        </div>
        <div
            css={css`
              padding: 1rem;
              justify-self: center;
              @media (min-width: 1200px) {
                  grid-row-start: -1;
              }
              `}
        >
            <Image
                src="/images/our-mission.png"
                layout="intrinsic"
                width={1091}
                height={727}
            />
        </div>
    </div>
)

export default OurMission

/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"


const OurMission = () => (
    <div
        css={css`
          padding: 0.5rem;`}
    >
        <div
            css={css`
              /* padding: 0.5rem; */
              `}
        >
            <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: 2rem;
                  `}
            >
                Our Misssion</div>
            <div
                css={css`
                  padding-bottom: 0.5rem`}
            >
                Webanah is your ultimate business savior. The sole mission of Webanah is to help small and large businesses to grow online with better marketing and ROI. Our professional team tracks every marketing activity that your business follows and eliminates needless strategies. We design effective promotional strategies that increase the traffic towards your business website through detailed research. We crawl deep into the statistics of your target market, niche, and opportunities to create effective strategies that would help your business to grow its online presence.
                And to gain that boost in your business we have a team of professional team of developers on board to design your website, apps and provide social media marketing. Our mission is to turn your business in to a brand and position it into customer’s mind through effective promotional strategies.
            </div>
            <div
                css={css`
                  text-align: center;`}>
                <Button>Contact Us</Button>
            </div>
        </div>
        <Image
            src="/webana-assets/our-mission.png"
            layout="intrinsic"
            width={1091}
            height={727}
        />
    </div>
)

export default OurMission

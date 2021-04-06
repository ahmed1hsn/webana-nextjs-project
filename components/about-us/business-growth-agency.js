/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"

const BusinessGrowthAgency = () => (
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
                CALIFORNIA’S PREMIER BUSINESS GROWTH AGENCY
            </div>

            <div
                css={css`
                  padding-bottom: 0.5rem;
                  `}
            >
                Welcome to Webanarium, a place where business growth ideas are transformed into reality with a potion of updated development strategies and a marketing magic spell of Webanah, to reach the universe of leading brands.
            </div>
            <div
                css={css`
                  text-align: center;`}>
                <Button>Contact Us</Button>
            </div>
        </div>

        <Image
            src="/webana-assets/webanah-character4.png"
            layout="intrinsic"
            width={1020}
            height={1471}
        />

    </div>
)

export default BusinessGrowthAgency


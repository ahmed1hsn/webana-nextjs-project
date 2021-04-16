/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import { Button } from "../../Sub-Components/button"

const BuildTheBestExperience = () => (
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
                  color: transparent;
                  font-size: clamp(1rem, -0.875rem + 8.333vw, 3.75rem);
                  -webkit-text-stroke: 0.05rem #16f533;

                  letter-spacing: 0.1rem;
                  `}
            >
                BUILD THE BEST EXPERIENCE
            </div>
            <div
                css={css`
                  letter-spacing: 0.1rem;
                  line-height: 1.4rem;
                  padding: 1rem 0;
                  `}
            >
                Webanah has built its galaxy of creativity and every member in the realm has been finely trained to deal with clients with an extremely creative and unique approach. Webanah treats every client separately with complete customization according to their business, needs, and strategies. It's our motto to work until the client gets complete satisfaction and sees the better performance of the website live. Webanah assures you complete personalization throughout the whole process and attention to every detail.
                We do not go for robotic approach to imply same strategies to every customer. We listen to every client with detail and dive deep into their business to extract all the needed information to customize extra ordinary strategies and gain best possible outcomes. Experience the customer-employee relation like never before only at this platform. You will surely feel being welcomed and listened to.
            </div>
        </div>

        <div
            css={css`
              padding: 1rem;
              justify-self: center;
              `}
        >
            <Image
                src="/images/webanah-character6.png"
                layout="intrinsic"
                width={576}
                height={925}
            />
        </div>

    </div>
)

export default BuildTheBestExperience
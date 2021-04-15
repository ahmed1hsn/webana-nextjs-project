/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../button"

const AboutUs = () => (
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
                About Us
            </div>

            <div
                css={css`
                  padding-bottom: 0.5rem;
                  `}
            >
                Webanah strives to turn your business into a digital revolution by crafting elite design for your website and marketing strategies that would drive traffic insanely towards your business and help you generate maximum revenue. Having a unique position in audiences mind is not an easy task. You need to hit the engaging factor to make a lasting impression. Webanah takes this task too serious and have experienced professionals on board who run research to extract the strong opportunities for your business to grow online and curate effective strategies to implement. Webanah takes pride in our track record of satisfied customers and on-time delivery of content. The output by our experts is genuine and our experts provide our clients with data points that can further help in making their engagement better. Reach out to our experts to know more about our services.
            </div>
            <div
                css={css`
                  text-align: center;`}>
                <Button>Contact Us</Button>
            </div>
        </div>
        <div
            css={css`
              padding: 1rem;
              justify-self: center;
              @media (min-width: 1200px) {
                  margin-top: 20rem;
              }`}>
            <Image
                src="/images/webanah-character1.png"
                layout="intrinsic"
                width={1359}
                height={1922}
            />
        </div>
    </div>
)

export default AboutUs


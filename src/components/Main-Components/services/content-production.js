/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const ContentProduction = () => (
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
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 3.75rem);
                  letter-spacing: 0.1rem;
                  `}
            >
                CONTENT PRODUCTION
            </div>
            <div
                css={css`
                  letter-spacing: 0.1rem;
                  line-height: 1.4rem;
                  padding: 1rem 0;
                  `}
            >
                Content decides whether your website will rank better on a search engine or not? Unique content marketing that entices customers as well as ranks high on google is something Webanah is proudly an expert in. Our team at Webanah wants to generate tangible changes for your business by creating the best possible content that may be required in your social media run.  The experts present here to ensure quality in their final products by keeping them one hundred percent unique. Engage with potential customers by using our special and on-brand social media content like custom images, thumbnails, social media posts, website content, and more.
                Webanah takes pride in our track record of satisfied customers and on-time delivery of content. The output by our experts is genuine and our experts provide our clients with data points that can further help in making their engagement better. So, if you are looking to revolutionize your brand with captivating content then reach out to use for immediate assistance and effectiveness.
            </div>
        </div>
        <div
            css={css`
              padding: 0 20%;
              align-self: center;
              justify-self: center;
            `}
        >
            <Image
                src="/images/content-production.png"
                layout="intrinsic"
                width={477}
                height={518}
            />
        </div>
    </div>
)

export default ContentProduction

/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"


const ContentProduction = () => (
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
                CONTENT PRODUCTION</div>
            <div
                css={css`
                  padding-bottom: 0.5rem`}
            >
                Content decides whether your website will rank better on a search engine or not? Unique content marketing that entices customers as well as ranks high on google is something Webanah is proudly an expert in. Our team at Webanah wants to generate tangible changes for your business by creating the best possible content that may be required in your social media run.  The experts present here to ensure quality in their final products by keeping them one hundred percent unique. Engage with potential customers by using our special and on-brand social media content like custom images, thumbnails, social media posts, website content, and more.
                Webanah takes pride in our track record of satisfied customers and on-time delivery of content. The output by our experts is genuine and our experts provide our clients with data points that can further help in making their engagement better. So, if you are looking to revolutionize your brand with captivating content then reach out to use for immediate assistance and effectiveness.
            </div>
        </div>
        <Image
            src="/images/content-production.png"
            layout="intrinsic"
            width={477}
            height={518}
        />
    </div>
)

export default ContentProduction

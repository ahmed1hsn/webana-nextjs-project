/** @jsx jsx */

import { Search } from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const Consulting = () => (
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
                  font-size: 3.75rem;
                  `}
            >
                Consulting
            </div>
            <div
                css={css`
                  padding: 1rem 0;
                  `}
            >
                There are several practical questions everyone needs to ask themselves in amidst redesigning their website and their digital marketing strategies. Does the new outlook match your brand? Does it need new content? Is the UI outdated? Is your website have enough web presence to increase the traffic, is your social media handle not performing well? Or you are looking for someone expert in rebranding, redesigning and edit the entire strategy your online base. Our expert consultants at Webanah know everything there is to know about web designing, app development, social media marketing, branding and content marketing. The foremost responsibility of our expert consultants is to find the loop holes in your business website and digital marketing strategies and provide you with effective ideas to develop your business into a brand.
                The suggestions are going to include strategies for marketing, engagement, investment, and much more. And everything our consultants suggests are based on detailed SWOT analysis and audience research. Save your precious time by reaching out to us about your web consultancy needs and our team will have you assisted according to your desired goals.
            </div>
        </div>
        <div
            css={css`
              padding: 20%;
              justify-self: center;
            `}
        >
            <Image
                src="/images/consulting.png"
                layout="intrinsic"
                width={668}
                height={653}
            />
        </div>
    </div>
)

export default Consulting

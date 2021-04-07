/** @jsx jsx */

import { Search } from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"


const SocialMediaManagement = () => (
    <div
        css={css`
          display: grid;
          padding: 0.5rem;
          @media (min-width: 1200px) {
              grid-template-columns: 1fr 1fr;
              margin-bottom: 10rem;
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
                SOCIAL MEDIA MANAGAMENT
            </div>
            <div
                css={css`
                  padding-bottom: 0.5rem;
                  `}
            >
                With an exceptional recommendation score by our trusted clients, Webanah is an extremely trustworthy choice for our clients to reach out for their social media management needs. Should you choose to avail of our services, we ensure that the company will help you improve your brand's awareness, revenue, customer loyalty, and more. More than 70% of customers resort to social media while purchasing through an online business. Whether you are familiar with your target audience and their demographics, our team of social media managers will take care of every aspect of your content and lead your strategy with an optimistic approach.
                You will be provided an expert social media accountant who would not only handle the posting but also research to find out and design attractive content for your account with our expert designers. And also design a customized social media strategy that would elevate your presence at the platforms. Reach out to us if you want Webanah churn your social media and extract out the best from it.
            </div>
        </div>
        <div
            css={css`
              /* padding: 20%; */
              justify-self: center;
            `}
        >
            <Image
                src="/images/social-media-management-bg.png"
                layout="intrinsic"
                width={782}
                height={613}
            />
        </div>
    </div>
)

export default SocialMediaManagement

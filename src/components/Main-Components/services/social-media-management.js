/** @jsx jsx */

import { Search } from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const SocialMediaManagement = () => (
    <div
        css={css`
          display: grid;
          padding: 0.5rem;
          @media (min-width: 1200px) {
              grid-template-columns: 1fr 1fr;
              /* margin-bottom: 10rem; */
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
                SOCIAL MEDIA MANAGAMENT
            </div>
            <div
                css={css`
                  letter-spacing: 0.1rem;
                  line-height: 1.4rem;
                  padding: 1rem 0;
                  `}
            >
                With an exceptional recommendation score by our trusted clients, Webanah is an extremely trustworthy choice for our clients to reach out for their social media management needs. Should you choose to avail of our services, we ensure that the company will help you improve your brand's awareness, revenue, customer loyalty, and more. More than 70% of customers resort to social media while purchasing through an online business. Whether you are familiar with your target audience and their demographics, our team of social media managers will take care of every aspect of your content and lead your strategy with an optimistic approach.
                You will be provided an expert social media accountant who would not only handle the posting but also research to find out and design attractive content for your account with our expert designers. And also design a customized social media strategy that would elevate your presence at the platforms. Reach out to us if you want Webanah churn your social media and extract out the best from it.
            </div>
        </div>
        <div
            css={css`
              justify-self: center;
              align-self: center;

              display: flex;
              flex-direction: column;
              align-items: center;

              `}>
            <div
                css={css`
                  padding: 0 15%;
                  /* padding: 0 1rem; */
                  justify-self: center;
                  display: flex;
                  /* flex-direction: column; */
                  align-items: center;
                  justify-items: center;
                  margin-bottom: -30%;
                  /* background: center/contain no-repeat url('/images/social-media-management-bg.png'); */
            `}
            >
                <div
                    css={css`
                      margin-bottom: -25%;
                      /* align-self: flex-end; */
                  `}>
                    <Image
                        src="/images/Skype.png"
                        layout="intrinsic"
                        width={192}
                        height={192}
                    />
                </div>
                <div
                    css={css`
                      /* align-self: flex-start; */
                      margin-bottom: 25%;
                      margin-left: -10%;
                      `}>
                    <Image
                        src="/images/Youtube.png"
                        layout="intrinsic"
                        width={185}
                        height={185}
                    />
                </div>
                <div
                    css={css`
                      margin-bottom: 35%;
                `}>
                    <Image
                        src="/images/Facebook.png"
                        layout="intrinsic"
                        width={86}
                        height={86}
                    />
                </div>
                <div
                    css={css`
                      margin-left: -10%;
                      `}>
                    <Image
                        src="/images/Snapchat.png"
                        layout="intrinsic"
                        width={181}
                        height={181}
                    />
                </div>
                <div
                    css={css`
                      margin-bottom: 20%;
                      `}>
                    <Image
                        src="/images/Whatsapp.png"
                        layout="intrinsic"
                        width={197}
                        height={197}
                    />
                </div>
                <div
                    css={css`
                      margin-bottom: -25%;
                      `}>
                    <Image
                        src="/images/Twitter.png"
                        layout="intrinsic"
                        width={186}
                        height={186}
                    />
                </div>
            </div>
            <div
                css={css`
                  /* padding: 0 20%; */
                  /* padding-bottom: 60%; */
                  `}>
                <Image
                    src="/images/social-media-management-bg.png"
                    layout="intrinsic"
                    width={782}
                    height={613}
                />
            </div>
        </div>

    </div>
)

export default SocialMediaManagement

/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import { Button } from "../../Sub-Components/button"

const BestSolution = () => (
    <div
        css={css`
          display: grid;
          padding: 0.5rem;
          @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
            grid-row-start: end;
          }
          `}
    >
        <div
            css={css`
              /* padding: 0.5rem; */
              align-self: center;
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
                FANTASIZED IDEAS TURN INTO REALITY</div>
            <div
                css={css`
                  letter-spacing: 0.1rem;
                  line-height: 1.4rem;
                  padding: 1rem 0;
                  `}
            >
                Online exposure is the best promotion for your business at present. And Webanah is your superpower to improve your online presence. We work as a part of your business team to understand your goals and market and provide a complete package of services that would work as a booster in whole to take your business to a higher rank on search engines. We provide detailed services of web development, content marketing, SEO, branding and design, social media marketing, app development, and consulting. So, if you are looking to boost your business and website, Webanah is the best resort for your business with experienced designers and marketers on board.
            </div>
        </div>
        <div
            css={css`
              padding: 0 20%;
              align-self: center;
              justify-self: center;
              @media (min-width: 1200px) {
                  grid-row-start: -1;
              }
              
              animation: move_bs 0.5s linear, move_bs2 1s linear infinite;
              animation-delay: 0s, 1s;
              animation-direction: normal, alternate;
              @keyframes move_bs {
                0% {
                    transform: translate(-100%);
                    opacity: 0;
                }
                100% {
                    transform: translate(0%);
                    opacity: 1;
                }
              }
              @keyframes move_bs2 {
                  0% {
                      transform: translate(0px, 0%);
                  }
                  100% {
                      transform: translate(0px, -3%);
                  }
              }
              /*  @keyframes move3 {
                  0% {
                      transform: translate(-100%);
                      opacity: 0;
                  }
                  100% {
                      transform: translate(0%);
                      opacity: 1;
                  }
              }
              animation: move3 0.5s linear;*/
              `}
        >
            <Image
                src="/images/fantasized-ideas-turn-into-reality.png"
                layout="intrinsic"
                width={554}
                height={634}
            />
        </div>
    </div>
)

export default BestSolution
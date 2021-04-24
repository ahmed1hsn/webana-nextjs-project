/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Scroll, Search } from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import styled from '@emotion/styled'
import Image from "next/image"
import { Button } from "../../Sub-Components/button"
import VisibilitySensor from 'react-visibility-sensor'
import ScrollTrigger from 'react-scroll-trigger';

const ImgDiv = styled.div`padding: 0 20%;
                        align-self: center;
                        justify-self: center;
                        animation: ${props => props.visible === true ? 
                                    'move_seo 2s linear' : 'none'};
                        @keyframes move_seo {
                            0% {
                                transform: translate(0, 400%);
                                opacity: 0;
                            }
                            100% {
                                transform: translate(0, 0%);
                                opacity: 1;
                            }
                        `

                 
function SearchEngineOptimization() {

    const [componentVisible, setComponentVisible] = useState(false);

return(

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
                SEARCH ENGINE OPTIMIZATION
            </div>
            <div
                css={css`
                  letter-spacing: 0.1rem;
                  line-height: 1.4rem;
                  padding: 1rem 0;

                  
                  `}
            >
                While the best SEO strategies are research-driven, SEO is still a long way from an accurate science. In any case, there are sure some specific strategies you can hope to get from any advanced organization. Because of the differing levels of performance, and ranges of abilities in the business, outcomes, and ROI will fluctuate from one organization to another. In addition, an effective SEO organization should truly comprehend your business and examine your industry to accumulate working information on your topic.
                Webanah has marketing professionals that perform detailed research and craft such promotional strategies that will take your business up a notch, based on the results of the research. SEO audit, competitor analysis, Link building, on-page SEO, off page SEO, technical SEO, keyword research everything your website needs, Webanah has the potential to deal with it efficiently and provides monthly report to the clients to keep them updated about the progress.
            </div>
        </div>
        <ScrollTrigger onEnter={()=> setComponentVisible(true)}  onExit={() => setComponentVisible(false)}>
            {console.log(componentVisible)}
            <ImgDiv visible={componentVisible}>  
                <Image
                    src="/images/SEO.png"
                    layout="intrinsic"
                    width={685}
                    height={738}
                />
           </ImgDiv>
        </ScrollTrigger>
    </div>
);
}

export default SearchEngineOptimization

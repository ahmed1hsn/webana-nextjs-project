/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"

const base = css`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
  }
  grid-gap: 0.5rem;
  padding: 0.5rem;
  color: lightgrey;
  margin-bottom: 4rem;
  > div {
      border: 0.01rem solid grey;
      text-align: center;
      border-radius: 1rem;
      &:hover {
        color: #f8f8ff;
        border: 0.01rem solid #16f533;
      }
      > div {
          padding: 0.5rem;
      }
  }
`

const WhyWeStandOut = () => (
    <div>
        <div
            css={css`
              text-align: center;
              font-family: 'Green Lantern';
              color: #16f533;
              font-size: 2rem;
              padding: 0.5rem;
              `}
        >
            WHY WE STAND OUT
        </div>

        <div css={base}>
            <div>
                <div>
                    <Image
                        src="/images/best-quality.png"
                        width={49}
                        height={56}
                    />
                </div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      color: #16f533;
                      font-size: 1rem;
                  `}
                >
                    BEST QUALITY
                </div>
                <div>Our team never rests until the clients are satisfied with the work. We stand by our work and provide best possible outcomes for client’s business with limitless edits and claims according to their needs.</div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/guaranteed-results.png"
                        width={42}
                        height={57}
                    />
                </div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      color: #16f533;
                      font-size: 1rem;
                  `}
                >
                    GUARANTEED RESULTS
                </div>
                <div>With our dynamic developing and marketing strategies that are curated keeping the brand image and target audience in mind, we strive to achieve successful outcomes.</div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/fast-response.png"
                        width={50}
                        height={50}
                    />
                </div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      color: #16f533;
                      font-size: 1rem;
                  `}
                >
                    FAST RESPONSE
                </div>
                <div>Webanah considers clients its utmost priority hence, our team is always available to cater to our clients right away. </div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/excellent-design.png"
                        width={53}
                        height={50}
                    />
                </div>
                <div

                    css={css`
                      font-family: 'Green Lantern';
                      color: #16f533;
                      font-size: 1rem;
                  `}
                >
                    EXCELLENT DESIGN
                </div>
                <div>User experience is the eminent feature of your website that would either make or break your audience. Our team of experienced web designers makes sure to deliver an excellent yet user-friendly web design. </div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/perfect-solutions.png"
                        width={46}
                        height={56}
                    />
                </div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      color: #16f533;
                      font-size: 1rem;
                  `}
                >
                    PERFECT SOLUTIONS
                </div>
                <div>Webanah is your savior of all your website design and its performance problems. Our skilled team provides efficient solutions and consultations to embark your brand on a unique identity journey. </div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/professional-consultancy.png"
                        width={44}
                        height={59}
                    />
                </div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      color: #16f533;
                      font-size: 1rem;
                  `}
                >
                    PROFESSIONAL CONSULTANCY
                </div>
                <div>Apart from commendable designing and digital marketing services Webanah is always here to answer all your queries. Our experienced team has proficiency in business consultancy and assist specifically according to your brand and target market. </div>
            </div>

        </div>
    </div>
)

export default WhyWeStandOut
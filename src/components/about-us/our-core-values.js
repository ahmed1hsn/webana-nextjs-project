/** @jsx jsx */

import { jsx, css } from "@emotion/react"
import Image from "next/image"

const base = css`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 2rem;
      gap: 2rem;
      & > div {
          padding: 2rem;
      }
  }
  grid-gap: 1rem;
  padding: 0.5rem;
  color: lightgrey;
  & > div {
      border: 0.01rem solid grey;
      border-radius: 0.5rem;
      background-image: url('/images/core-value-bg.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 2rem 0;
      &:hover {
        color: #f8f8ff;
        border-left: 0.1rem solid #16f533;
        border-right: 0.1rem solid #16f533;
      }
      & > div {
          padding: 0.5rem;
      }
  }
`

const OurCoreValues = () => (
    <div
        css={css`
          margin: 8rem 0;
        `}
        >
        <div
            css={css`
              font-family: 'Green Lantern';
              font-size: 2rem;
              text-align: center;
              color: #16f533;
              `}
        >
    Our Core Values
        </div>
        <div
            css={base}
        >
            <div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      font-size: 1rem;
                      text-align: center;
                      color: #16f533;
                      `}
                >
                Dedication
                </div>
                <div>Webanah’s team is under a spell of our core values and the first feature of these values is dedication. Every member of the team is highly trained to value every single detail and demand that customers have, curate strategies according to their demands, and consult with them with responsive and beneficial idea implementation. </div>
            </div>
            <div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      font-size: 1rem;
                      text-align: center;
                      color: #16f533;
                      `}
                >
                Transparency
                </div>
                <div>Each and every step of our work is kept completely transparent in terms of price, strategies, research process, and implementation. There are no hidden costs or invisible activities. Every source, performance, information used is legit and shared with our clients to have them connected to us with trust. </div>
            </div>
            <div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      font-size: 1rem;
                      text-align: center;
                      color: #16f533;`}>Loyality</div>
                <div>You build honest connections that gain our loyalty over time. The longer you stay connected with us, the more loyalty perks you enjoy. We believe in building strong relation with clients because loyalty doesn’t mean having a client for future business but also having an opportunity for growth for both the parties. </div>
            </div>
        </div>
    </div >
)

export default OurCoreValues
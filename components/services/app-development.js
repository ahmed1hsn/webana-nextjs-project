/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"


const AppDevelopment = () => (
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
                APP DEVELOPMENT</div>
            <div
                css={css`
                  padding-bottom: 0.5rem`}
            >
                Webanah has a proficient team of app developers who have experience with top product managers, software developers, designers, and project managers. Our experts are skilled to work with Android apps, iOS apps, iPad OS apps, and cross-platform apps. We have diverse and enough team members, expert in different fields.  Each client is assigned to a developer based on their area of expertise and their years of experience in the relevant field of client’s business. Throughout the app development phase, our experts will keep you looped in with the progress and make changes in the final draft according to your preferences.
                Companies work with Webanah to augment their app and web development needs because of our reputable team and trusted end product. Reach out to us if you are looking to design an app for your business or want to redesign your existing app into an updated one with effective framework and strategy. Webanah is always excited to have the back of its clients.
            </div>
        </div>
        <Image
            src="/images/app-development.png"
            layout="intrinsic"
            width={788}
            height={464}
        />
    </div>
)

export default AppDevelopment

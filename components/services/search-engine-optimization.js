/** @jsx jsx */

import { Search } from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../shared/button"


const SearchEngineOptimization = () => (
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
                SEARCH ENGINE OPTIMIZATION</div>
            <div
                css={css`
                  padding-bottom: 0.5rem`}
            >
                While the best SEO strategies are research-driven, SEO is still a long way from an accurate science. In any case, there are sure some specific strategies you can hope to get from any advanced organization. Because of the differing levels of performance, and ranges of abilities in the business, outcomes, and ROI will fluctuate from one organization to another. In addition, an effective SEO organization should truly comprehend your business and examine your industry to accumulate working information on your topic.
                Webanah has marketing professionals that perform detailed research and craft such promotional strategies that will take your business up a notch, based on the results of the research. SEO audit, competitor analysis, Link building, on-page SEO, off page SEO, technical SEO, keyword research everything your website needs, Webanah has the potential to deal with it efficiently and provides monthly report to the clients to keep them updated about the progress.
            </div>
        </div>
        <Image
            src="/images/SEO.png"
            layout="intrinsic"
            width={685}
            height={738}
        />
    </div>
)

export default SearchEngineOptimization

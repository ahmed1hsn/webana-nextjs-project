/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import * as line from "../shared/line";
import * as faSolid from '@emotion-icons/fa-solid'
import * as faBrands from '@emotion-icons/fa-brands'

export const Scrolls = () => (
    <>
        <line.LeftLine>
            <line.styledText>02</line.styledText>
            <line.LeftItem />
            <line.LeftItem />
            <line.LeftItem />
            <line.styledText
                css={css`margin-top: auto;`}
            >04</line.styledText>
        </line.LeftLine>

        <line.SocialLine>
            <faBrands.FacebookF css={base} size="16" />
            <faBrands.Twitter css={base} size="16" />
            <faBrands.LinkedinIn css={base} size="16" />
            <faBrands.Instagram css={base} size="16" />
        </line.SocialLine>

        <line.BottomLine>
            <faSolid.AngleLeft
                css={base} size="16" />
            <line.Circle />
            <line.Circle />
            <line.Circle />
            <faSolid.AngleRight css={base} size="16" />
            <line.Line />
        </line.BottomLine>


        <line.RightLine>
            <faSolid.AngleUp css={base} />
            <line.RightItem />
            <line.Square />
            <line.Square />
            <faSolid.AngleDown css={base} />
        </line.RightLine>
    </>
)

const base = css`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
  `
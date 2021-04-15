/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from '@emotion/styled'

export const Button = styled.button`
  background: transparent; 
  color: #16f533;
  /* text-transform: uppercase; */
  font-style: italic;
  font-weight: bolder;
  padding: 7px;
  border-radius: 15px 5px;
  border: 2px solid #16f533;
  /* filter: drop-shadow(0 0 0.2rem white); */
  &:hover {
    filter: drop-shadow(0 0 0.5rem white);
  }
  
  ${props => props.primary && css`
  background: #16f533;
  color: #000d23;
  border: 2px solid #16f533;
  `}
`
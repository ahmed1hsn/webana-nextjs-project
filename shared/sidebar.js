/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from '@emotion/styled'
import * as faBrands from '@emotion-icons/fa-brands'
import * as faRegular from '@emotion-icons/fa-regular'
import * as faSolid from '@emotion-icons/fa-solid'
import { useRef, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import useOnClickOutside from "../shared/use-onclickoutside"

// TODO Sidebar
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 0.1rem solid green; */
  max-width: max-content;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 90vh;
  background: #302d3d;
`
export const Item = styled.div`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
`

export const Sidebar = (props) => {

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our sidebar
  const [open, setOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setOpen(false))

  if (!open) {
    return (<faSolid.Bars onClick={() => setOpen(true)}
      css={css`
        position: absolute;
        padding: 1.125rem;
        top: 0px;
        ${base}
        `} size="24" />)
  } else {
    return (
      <Container onClick={() => console.log('Container')} ref={ref}>
        <Item onClick={() => setOpen(false)}><faSolid.Times css={base} size="24" /></Item>
        <Item>
          <Image
            src="/images/webanah-logo.png"
            width={63}
            height={65}
            layout="fixed"
          />
        </Item>
        <Item><Link href="/"><a>Home</a></Link></Item>
        <Item><Link href="/about"><a>About Us</a></Link></Item>
        <Item><Link href="/services"><a>Services</a></Link></Item>
        <Item><Link href="/portfolio"><a>Portfolio</a></Link></Item>
        <Item><Link href="/case-studies"><a>Case Studies</a></Link></Item>
        <Item><Link href="/blogs"><a>Blogs</a></Link></Item>
        <Item><Link href="/contact"><a>Contact Us</a></Link></Item>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            width: 6rem;
            `}
        >
          <faBrands.FacebookF css={base} size="16" />
          <faBrands.Twitter css={base} size="16" />
          <faBrands.LinkedinIn css={base} size="16" />
          <faBrands.Instagram css={base} size="16" />
        </div>
      </Container>
    )
  }
}

const base = css`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
  `
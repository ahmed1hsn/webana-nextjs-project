/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from '@emotion/styled'
import * as faBrands from '@emotion-icons/fa-brands'
import * as faRegular from '@emotion-icons/fa-regular'
import * as faSolid from '@emotion-icons/fa-solid'
import { useRef, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import useOnClickOutside from "../../utils/use-onclickoutside"

export const Sidebar = (props) => {

  // Create a ref that we add to the element for which we want to detect outside clicks
  const node = useRef();
  // State for our sidebar
  const [open, setOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}

const base = css`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
  `

export const StyledBurger = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'white' : 'white'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #000d23;
  height: 90vh;
  @media (max-width: 768px) {
    height: 80vh;
  }
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};


  div {
    padding: 1rem 0;
  }
  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #16f533;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div>
        <Image
          src="/images/webanah-logo.png"
          width={63}
          height={65}
          layout="fixed"
        />
      </div>
      <div><Link href="/"><a>Home</a></Link></div>
      <div><Link href="/about"><a>About Us</a></Link></div>
      <div><Link href="/services"><a>Services</a></Link></div>
      <div><Link href="/portfolio"><a>Portfolio</a></Link></div>
      <div><Link href="/case-studies"><a>Case Studies</a></Link></div>
      <div><Link href="/blogs"><a>Blogs</a></Link></div>
      <div><Link href="/contact"><a>Contact Us</a></Link></div>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          justify-self: end;
          width: 100%;
            `}
      >
        <faBrands.FacebookF css={base} size="16" />
        <faBrands.Twitter css={base} size="16" />
        <faBrands.LinkedinIn css={base} size="16" />
        <faBrands.Instagram css={base} size="16" />
      </div>
    </StyledMenu>
  )
}
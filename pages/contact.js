/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import { useState, useRef } from "react"
import Head from "next/head"
import { Phone, MapMarkerAlt, Envelope } from "@emotion-icons/fa-solid"
import Navbar from "../src/components/Sub-Components/navbar"
import { Button } from "../src/components/Sub-Components/button"


const Contact = () => (
    <>
        <Head>
            <title>Contact Us</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/webanah-logo.png" type="image/png"></link>
        </Head>
        <Navbar>
            <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 3.75rem);
                  letter-spacing: 0.5rem;
                  color: transparent;
                  -webkit-text-stroke: 0.05rem #16f533;
                  text-align: center;
                  `}
            >
                CONTACT US
            </div>
            <Form />
        </Navbar>
    </>
)

function Form() {
    const [respCode, setRespCode] = useState(null)
    const formRef = useRef()
    const onSubmit = async event => {
        event.preventDefault()
        const res = await fetch('/api/contact', {
            body: JSON.stringify({
                first_name: event.target.firstName.value,
                last_name: event.target.lastName.value,
                email: event.target.email.value,
                subject: event.target.subject.value,
                message: event.target.message.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        if (res.status == 201) {
            console.log("created successfully")
            formRef.current.reset()
            setRespCode(201)
        } else if (res.status == 409) {
            console.log("Conflict")
            setRespCode(409)
        }

        const result = await res.json()
        // result.user => 'Ada Lovelace'

        console.log(result)

        // console.log(
        //     JSON.stringify({
        //         firstName: event.target.firstName.value,
        //         lastName: event.target.lastName.value,
        //         email: event.target.email.value,
        //         subject: event.target.subject.value,
        //         message: event.target.message.value,
        //     })
        // )
    }

    return (
        <>
            <div
                css={css`
                  text-align: center;
                  margin: 0.5rem 0;
                  `}
            >
                {(respCode == 201 && <div
                    css={css`
                      display: inline;
                      color: white;
                      font-weight: bold;
                      border: 0.05rem solid #16f533;
                      padding: 0.5rem;
                      border-radius: 1rem;
                    `}
                >
                    Form Submitted Successfully.</div>) ||
                    (respCode == 409 && <div
                        css={css`
                          display: inline;
                          color: white;
                          font-weight: bold;
                          border: 0.05rem solid red;
                          padding: 0.5rem;
                          border-radius: 1rem;
                    `}
                    >
                        Email Aready Exists.</div>)
                    || null}
            </div>
            <form onSubmit={onSubmit}
                ref={formRef}
                css={css`
                  display: grid;
                  grid-template-columns: 1fr;
                  @media (min-width: 768px) {
                      grid-template-columns: 1fr 1fr;
                  }
                  @media (min-width: 1200px) {
                      grid-template-columns: 1fr 1fr 1fr;
                  }
                  grid-gap: 0.5rem;
                  padding: 0 0.5rem;
                  margin-bottom: 1rem;
                  & > div {
                      display: flex;
                      flex-direction: column;
                  & > label {
                      font-family: 'Green Lantern';
                      font-style: oblique 40deg;
                      color: #16f533;
                      letter-spacing: 0.1rem;
                      padding-top: 0.5rem;
                  }
                  & > textarea {
                      padding: 0.7rem;
                      resize: none;
                      border-radius: 0.5rem;
                      margin-bottom: 1rem;
                      &:focus {
                          border-color: #16f533;
                          outline: none;
                      }
                  }
                  & > input {
                      padding: 0.7rem;
                      border-radius: 0.5rem;
                      &:focus {
                          border-color: #16f533;
                          outline: none;
                      }
                  }
                  }
              `}
            >
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" placeholder="John" autoComplete="name" required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Doe" autoComplete="name" required />
                </div>
                <div
                    css={css`
                  @media (min-width: 768px) {
                      grid-column: 1 / 2;
                  }
                  `}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="johndoe@gmail.com" autoComplete="email" required />
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" type="text" placeholder="I have a question about..." required />
                </div>
                <div
                    css={css`
                  @media (min-width: 768px) {
                      grid-column: 1 / 3;
                  }
                  `}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" type="text" placeholder="Details..."
                        rows={15} required />
                    <div
                        css={css`
                      text-align: center;
                      `}>
                        <Button
                            css={css`
                          padding: 0.5rem 2rem;
                          margin-bottom: 2rem;
                          @media (min-width: 1200px) {
                              margin-bottom: 0;
                          }
                          `} type="submit" primary>Submit</Button>
                    </div>
                </div>

                <div
                    css={css`
                  gap: 2rem;
                  @media (min-width: 768px) {
                      grid-column: 1 / 3;
                      grid-row: 4 / 5;
                  }
                  @media (min-width: 1200px) {
                    /* padding-top: 2rem; */
                    align-self: center;
                    grid-column: 3 / 4;
                    grid-row: 1 / 4;
                  }
                  /* justify-content: space-around; */
                  & > div {
                      text-align: center;
                      border: 0.05rem solid grey;
                      border-radius: 1rem;
                      &:hover {
                          border: 0.05rem solid #16f533;
                      }
                      padding: 0.5rem;
                      div:nth-of-type(1) {
                        font-family: 'Green Lantern';
                        color: #16f533;
                        letter-spacing: 0.25rem;
                      }
                      div:nth-of-type(2) {
                          letter-spacing: 0.1rem;
                      }
                      & > div {
                          padding: 0.5rem;
                          }
                          }`
                    }
                >
                    <div>
                        <Phone size="24" color="#16f533" />
                        <div>Phone</div>
                        <div>0321-1234567</div>
                    </div>
                    <div>
                        <MapMarkerAlt size="24" color="#16f533" />
                        <div>Location</div>
                        <div>magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque</div>
                    </div>
                    <div>
                        <Envelope size="24" color="#16f533" />
                        <div>Email</div>
                        <div>webanah@gmail.com</div>
                    </div>
                </div>

            </form>
        </>
    )
}

const ContactData = () => (
    <div
        css={css`
          display: grid;
          grid-gap: 0.5rem;
          align-content: space-around;
          & > div {
              padding: 0.5rem;
              text-align: center;
              border: 0.05rem solid grey;
              border-radius: 1rem;
              div:nth-of-type(2) {
                  font-family: 'Green Lantern';
                  color: #16f533;
              }
              & > div {
                  padding: 0.5rem;
              }
          }`}>
        <div>
            <Phone size="24" />
            <div>Phone</div>
            <div>0321-1234567</div>
        </div>
        <div>
            <MapMarkerAlt size="24" />
            <div>Location</div>
            <div>magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque</div>
        </div>
        <div>
            <Envelope size="24" />
            <div>Email</div>
            <div>webanah@gmail.com</div>
        </div>
    </div>
)

export default Contact
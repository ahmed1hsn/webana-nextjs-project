/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Head from "next/head"
import Layout from "../components/layout"
import { Button } from "../shared/button"

const Contact = () => (
    <>
        <Head>
            <title>Contact Us</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/webana-assets/webanah-logo.png" type="image/png"></link>
        </Head>
        <Layout>
            <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: 2rem;
                  text-align: center;
                  `}
            >
                CONTACT US
            </div>
            <Form />
        </Layout>
    </>
)
function Form() {
    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch('/api/register', {
            body: JSON.stringify({
                // name: event.target.name.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    return (
        <form // onSubmit={registerUser}
            css={css`
              display: flex;
              flex-direction: column;
              padding: 0 0.5rem;
              margin-bottom: 1rem;
              > label {
                  font-family: 'Green Lantern';
                  font-style: oblique 40deg;
                  color: #16f533;
                  padding-top: 0.5rem;
              }
              > input {
                  padding: 1rem;
                  border-radius: 1rem;
                  &:focus {
                      border-color: #16f533;
                      outline: none;
                  }
              }
              > textarea {
                  padding: 1rem;
                  border-radius: 1rem;
                  margin-bottom: 1rem;
                  &:focus {
                      border-color: #16f533;
                      outline: none;
                  }
              }`}>

            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="John" autoComplete="name" required />

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="Doe" autoComplete="name" required />

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="johndoe@gmail.com" autoComplete="email" required />

            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="I have a question about..." required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" type="text" placeholder="Details..."
            rows={15} required />

            <Button type="submit" primary>Submit</Button>

        </form>
    )
}

export default Contact
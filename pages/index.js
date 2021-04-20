/** @jsx jsx */

import Navbar from "../src/components/Sub-Components/navbar"
import Home from "../src/components/Main-Components/home/home"
import WhatWeDo from "../src/components/Main-Components/home/what-we-do"
import BestSolution from "../src/components/Main-Components/home/best-solution"
import WhyWeStandOut from "../src/components/Main-Components/home/why-we-stand-out"
import { css, jsx } from "@emotion/react"
import React from "react";
import Head from "next/head"
import { Zoom } from "react-awesome-reveal"
// import Layout from "../src/components/Main-Components/Layout";
// import Link from "next/link"

function Main({ ...props }) {
	return (
		<>
			{/* <Layout /> */}
			<Head>
				<title>Home</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="shortcut icon" href="/images/webanah-logo.png" type="image/png"></link>
			</Head>
			<Navbar background='/images/background1.png'>
				<Zoom>
					<Home />
				</Zoom>
				<Zoom>
					<WhatWeDo />
				</Zoom>
				<Zoom>
					<BestSolution />
				</Zoom>
				<Zoom>
					<WhyWeStandOut />
				</Zoom>
			</Navbar>
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: { title: "This is server prop" },
	};
}
export default Main;

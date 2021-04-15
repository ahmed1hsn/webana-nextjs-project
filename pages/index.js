/** @jsx jsx */

import Navbar from "../src/components/navbar"
import Home from "../src/components/home/home"
import WhatWeDo from "../src/components/home/what-we-do"
import BestSolution from "../src/components/home/best-solution"
import WhyWeStandOut from "../src/components/home/why-we-stand-out"
import { css, jsx } from "@emotion/react"
import React from "react";
import Head from "next/head"
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
				<Home />
				<WhatWeDo />
				<BestSolution />
				<WhyWeStandOut />
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

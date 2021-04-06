/** @jsx jsx */

import Layout from "../components/layout"
import Home from "../components/home/home"
import WhatWeDo from "../components/home/what-we-do"
import BestSolution from "../components/home/best-solution"
import WhyWeStandOut from "../components/home/why-we-stand-out"
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
				<link rel="shortcut icon" href="/webana-assets/webanah-logo.png" type="image/png"></link>
			</Head>
			<Layout>
				<Home />
				<WhatWeDo />
				<BestSolution />
				<WhyWeStandOut />
			</Layout>
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: { title: "This is server prop" },
	};
}
export default Main;

/** @jsx jsx */

import Layout from "../components/layout"
import * as home from "../components/home/home"
import * as wwd from "../components/home/what-we-do"
import * as bs from "../components/home/best-solution"
import * as wwso from "../components/home/why-we-stand-out"
import { css, jsx } from "@emotion/react"
import React from "react";
// import Layout from "../src/components/Main-Components/Layout";
// import Link from "next/link"

function Main({ ...props }) {
	return (
		<>
			{/* <Layout /> */}
			<Layout>
				<home.Post />
				<wwd.Post />
				<bs.Post />
				<wwso.Post />
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

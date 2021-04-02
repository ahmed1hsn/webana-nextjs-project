/** @jsx jsx */

import Layout from "../components/layout"
import { css, jsx } from "@emotion/react"
import React from "react";
// import Layout from "../src/components/Main-Components/Layout";
// import Link from "next/link"

function Main({ ...props }) {
	return (
		<>
			{/* <Layout /> */}
			<Layout>
				{/* <Scrolls /> */}
				<h1
					css={css`
					  color: white;
					  `}
				>
					Home</h1>
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

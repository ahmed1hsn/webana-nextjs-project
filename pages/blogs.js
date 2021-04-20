/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Navbar from "../src/components/Sub-Components/navbar"
import BlogsCard from "../src/components/Main-Components/blogs/blog-card"

const Blogs = () => (
    <Navbar background='/images/background2.png'>
        <BlogsCard />
    </Navbar>
)

export default Blogs
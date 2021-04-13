/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import React, { useEffect, useRef } from "react";
import Head from "next/head"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Layout from "../components/layout"
import Home from "../components/animation/home"
import WhatWeDo from "../components/animation/what-we-do"
import BestSolution from "../components/animation/best-solution"
import WhyWeStandOut from "../components/animation/why-we-stand-out"
// import styled from "@emotion/styled/types/base";
// import Layout from "../src/components/Main-Components/Layout";
// import Link from "next/link"

const Container = styled.div`
  width: 400%;
  height: 100%;
  display: flex;
  flex-wrap: no-wrap;
`
const Item = styled.div`
  will-change: transform;
`

function Main({ ...props }) {
    gsap.registerPlugin(ScrollTrigger);
    // const firstRef = useRef(null)
    // const secondRef = useRef(null)
    // const thirdRef = useRef(null)
    // const fourthRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        console.log(gsap.utils.toArray(containerRef.current.querySelectorAll('.panel')))
        let duration = 10,
            sections = gsap.utils.toArray(containerRef.current.querySelectorAll('.panel')),
            // sections = [firstRef, secondRef, thirdRef, fourthRef],
            sectionIncrement = duration / (sections.length - 1),
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    start: "top top",
                    end: "+=5000"
                }
            });

        console.log(sections)

        tl.to(sections, {
            xPercent: -100 * (sections.length - 1),
            duration: duration,
            ease: "none"
        });

        // everything below this is just for the fading/scaling up which is NOT scrubbed - it's all dynamic, triggered when each section enters/leaves so that the fading/scaling occurs at a consistent rate no matter how fast you scroll!
        sections.forEach((section, index) => {
            let tween = gsap.from(section, {
                opacity: 0,
                scale: 0.6,
                duration: 1,
                force3D: true,
                paused: true
            });
            addSectionCallbacks(tl, {
                start: sectionIncrement * (index - 0.99),
                end: sectionIncrement * (index + 0.99),
                onEnter: () => tween.play(),
                onLeave: () => tween.reverse(),
                onEnterBack: () => tween.play(),
                onLeaveBack: () => tween.reverse()
            });
            index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
        });

        // helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
        function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
            let trackDirection = animation => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
                let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
                    prevTime = animation.time();
                animation.direction = animation.reversed() ? -1 : 1;
                animation.eventCallback("onUpdate", () => {
                    let time = animation.time();
                    if (prevTime !== time) {
                        animation.direction = time < prevTime ? -1 : 1;
                        prevTime = time;
                    }
                    onUpdate && onUpdate.call(animation);
                });
            },
                empty = v => v; // in case one of the callbacks isn't defined
            timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
            start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
            end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
        }

    }, []);


    return (
        <>
            {/* <Layout /> */}
            <Head>
                <title>Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/images/webanah-logo.png" type="image/png"></link>
            </Head>

            {/* <Layout>
                <Home />
                <WhatWeDo />
                <BestSolution />
                <WhyWeStandOut />
            </Layout> */}

            {/* <Container className="container" ref={containerRef}>
                <Item className="panel">First</Item>
                <Item className="panel">Second</Item>
                <Item className="panel">Third</Item>
                <Item className="panel">Fourth</Item>
            </Container> */}

            <Container className="container" ref={containerRef}>
                <Item className="panel">
                    <Home />
                </Item>

                <div className="panel">
                    <WhatWeDo />
                </div>

                <div className="panel">
                    <BestSolution />
                </div>

                <div className="panel">
                    <WhyWeStandOut />
                </div>
            </Container>
        </>
    );
}

export default Main;

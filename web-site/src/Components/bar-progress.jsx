import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ScrollStyle = styled.div`
    width: 90%;
    position: sticky;
    background-color: #161616;
    height: 6px;
    top: 2px;
    border-radius: 5px;
    padding: 0 2px;
    display: flex;
    align-items: center;

    > div {
        height: 2px;
        border-radius: 2px;
        background-color: #fff;
    }
`;

const ScrollProgress = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        console.log(document.documentElement);
        console.log("height: " + height);

        const scrolled = (winScroll / height) * 100;
        console.log("scrolled: " + scrolled);
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        /* <div className="containerScroll">
            <div className="barProgress" style={{ width: `${scrollTop}%` }}></div>
        </div> */
        <ScrollStyle>
            <div style={{ width: `${scrollTop}%` }}></div>
        </ScrollStyle>
    );
}

export default  ScrollProgress;
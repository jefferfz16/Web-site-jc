import textFront from "../img/front-end.svg";
import textDev from "../img/developer.svg";
import videoIntro from "../img/video/video-intro.mp4";
import React from 'react';
import styled from 'styled-components';
import IconScroll from "./iconScroll";

const ContainerIntro = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
    position: relative;
    @media (min-width: 768px) {
            height: calc(100vh - 56px);
        }

    .container {
        width: 100%;
        height: 50%;
        display: flex;
        margin-bottom: 20px;
    }

    .containerImage {
        width: 8%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    .containerText {
        display: flex;
        flex-direction: column;
        width: 92%;
        justify-content: flex-end;
        align-items: start;
        img:first-child  {
            height: 60%;
            margin-bottom: 5px;
            @media (min-width: 768px) {
            height: 65%;
            }
        }
        img:last-child {
            height: 22%;
            width: auto;
            @media (min-width: 768px) {
            height: 25%;
            }
        }
    }

    .descriptionIntro {
        width: 100%;
        display: flex;
        > p {
            width: 70%;
            font-size: 0.6rem;
            line-height: 1rem;
            padding-left: calc(8% + 10px);
            color: var(--color1);
            @media (min-width: 768px) {
            font-size: 0.8rem;
            line-height: 1.5rem;
            width: 50%;
            }
            @media (min-width: 1024px) {
            font-size: 0.8rem;
            line-height: 1.5rem;
            width: 40%;
            }
        }
    }
`

const Intro = () => {
    return (
        <ContainerIntro>
            <div className="container">
                <div className="containerImage">
                    <video autoPlay muted loop src={videoIntro} height="200%"></video>
                </div>
                <div className="containerText">
                    <img src={textFront} alt="textFront" />
                    <img src={textDev} alt="textDev" />
                </div>
            </div>
            <div className="descriptionIntro">
                <p>Un salto de diseñador UX/UI a Front end, en este sitio encuentrarás los proyectos que hasta el momento e realizado con mi experiencia.</p>
            </div>
            <IconScroll />
        </ContainerIntro>
    )
}

export default Intro;
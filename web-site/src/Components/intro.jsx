import textFront from "../img/front-end.svg";
import textDev from "../img/developer.svg";
import videoIntro from "../img/video/video-intro.mp4";
import React from "react";
import styled from "styled-components";
import IconScroll from "./iconScroll";

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
        <p>
          Un salto de diseñador UX/UI a Front end, en este sitio encuentrarás
          los proyectos que hasta el momento e realizado con mi experiencia.
        </p>
      </div>
      <IconScroll />
    </ContainerIntro>
  );
};

export default Intro;

const ContainerIntro = styled.div`
  width: 85%;
  max-width: 1800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  position: relative;
  @media (max-width: 1023px) {
    width: 100%;
    padding: 0 1rem;
  }
  @media (max-width: 767px) {
    height: 50vh;
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
    img:first-child {
      height: 60%;
      margin-bottom: 5px;
      @media (max-width: 1023px) {
        height: 45%;
      }
      @media (max-width: 767px) {
        height: 55%;
      }
    }
    img:last-child {
      height: 22%;
      width: auto;
      @media (max-width: 1023px) {
        height: 17%;
      }
      @media (max-width: 767px) {
        height: 20%;
      }
    }
  }

  .descriptionIntro {
    width: 100%;
    display: flex;
    > p {
      width: 40%;
      font-size: 0.8rem;
      line-height: 1rem;
      padding-left: calc(8% + 10px);
      color: var(--color1);
      @media (max-width: 1023px) {
        font-size: 0.9rem;
        line-height: 1.5rem;
        width: 60%;
      }
      @media (max-width: 767px) {
        font-size: 0.8rem;
        width: 90%;
      }
    }
  }
`;

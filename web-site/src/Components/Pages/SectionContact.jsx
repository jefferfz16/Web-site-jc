import React from "react";
import styled, { keyframes } from "styled-components";
import Myphoto from "../../img/foto.png";
import SectionLinks from "../SectionLinks";

const SectionContact = () => {
  return (
    <ContainerGeneral>
      <Containers>
        <div className="image">
          <img src={Myphoto} alt="foto" />
          <Lines>
            <div className="line" />
            <div className="line delay2" />
            <div className="line delay3" />
            <div className="line delay4" />
          </Lines>
        </div>
        <div className="description">
          <p className="title">Hola,</p>
          <p>
            Mi nombre es Jefferson Cepeda soy diseñador gráfico con enfoque en
            diseño UX/UI, cuento con 9 años trabajando en el entorno de diseñar
            experiencias y productos digitales, ahora también cuento con las
            habilidades de programación en (React.js, HTML, CSS, JS), siempre
            con la mejor actitud de seguir creciendo y aprendiendo.
          </p>
        </div>
      </Containers>
      <SectionLinks />
    </ContainerGeneral>
  );
};

export default SectionContact;

const ContainerGeneral = styled.div`
  width: 85%;
  max-width: 1600px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  z-index: 90;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Containers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  .image,
  .description {
    flex: 1;
  }
  .image {
    position: relative;
    padding-left: 10px;
  }
  .image > img {
    width: 70%;
    z-index: 9;
  }
  .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
    .title {
      font-size: 1.2rem;
    }
    > p {
      max-width: 80%;
      font-size: 0.8rem;
      line-height: 2;
    }
    > p::selection {
      background-color: var(--color4);
    }
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    .description {
      margin-top: 2rem;
    }
    .description > p {
      max-width: 100%;
    }
  }
`;

const moveLine = keyframes`
    0%{
      transform: translateX(0);
    }
    50% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0);
    }
  `;

const Lines = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50px;
  z-index: 10;
  width: 30%;
  height: auto;
  .line {
    width: 100%;
    height: 3px;
    border-radius: 6px;
    background: var(--color3);
    background: linear-gradient(45deg, var(--color3) 0%, var(--color4) 80%);
    margin: 5px 0;
    transition: 0.4s;
    position: relative;
    animation: ${moveLine} 2s infinite;
  }
  .delay2 {
    animation-delay: 2s;
    animation-direction: reverse;
  }
  .delay3 {
    animation-delay: 6s;
  }
  .delay4 {
    animation-delay: 8s;
    animation-direction: reverse;
  }
`;

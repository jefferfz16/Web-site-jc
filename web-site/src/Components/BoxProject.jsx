import React from "react";
import styled from "styled-components";
import IconExternal from "../img/externalLink.svg";
import Prueba from "../img/Projects/gifimania.png";

const BoxProject = () => {
  return (
    <ContainerGeneral>
      <Header>
        <div className="title">
          <h2>Nombre del proyecto</h2>
          <p>2021</p>
        </div>
        <img src={IconExternal} alt="External Link" />
      </Header>
      <ContainerImg>
        <img src={Prueba} alt="prueba" />
        <Shadow />
      </ContainerImg>
      <Footer>
        <div className="line" />
        <p>Html - css</p>
      </Footer>
    </ContainerGeneral>
  );
};

export default BoxProject;

const ContainerGeneral = styled.div`
  width: calc(100% / 2);
  margin: 1rem;
  height: auto;
  max-width: 600px;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 100%;
    min-width: fit-content;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    h2 {
      line-height: 1;
    }
    p {
      font-size: 0.8rem;
      color: var(--text2);
    }
  }
  > img {
    transition: 0.4s;
  }
  > img:hover {
    cursor: pointer;
    transform: scale(0.8);
  }
`;

const ContainerImg = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  > img {
    width: 100%;
    z-index: 98;
  }
`;

const Shadow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  bottom: 0;
  left: 0;
`;

const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  .line {
    height: 4px;
    background-color: var(--color1);
    flex: 1;
  }
  > p {
    margin: 0 0.5rem;
    color: var(--text2);
    font-size: 0.8rem;
  }
`;

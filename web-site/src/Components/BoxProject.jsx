import React from "react";
import styled from "styled-components";
import IconExternal from "../img/externalLink.svg";
import { ExternalLink } from "react-external-link";

const BoxProject = ({ data }) => {
  /*Destructuring data */
  const { name, image, link, year, tecnology } = data;
  return (
    <ContainerGeneral>
      <Header>
        <div className="title">
          <h2>{name}</h2>
          <p>{year}</p>
        </div>
        <ExternalLink href={link}>
          <img src={IconExternal} alt="External Link" />
        </ExternalLink>
      </Header>
      <ContainerImg>
        <img src={image} alt={name} />
        <Shadow />
      </ContainerImg>
      <Footer>
        <div className="line" />
        <p>{tecnology}</p>
      </Footer>
    </ContainerGeneral>
  );
};

export default BoxProject;

const ContainerGeneral = styled.div`
  width: calc(100% / 2 - 4rem);
  margin: 2rem;
  height: auto;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 100%;
    min-width: fit-content;
    margin: 2rem 1rem;
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
  > a img {
    transition: 0.4s;
  }
  > a img:hover {
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
    height: 2px;
    background-color: var(--color1);
    flex: 1;
  }
  > p {
    margin: 0 0.5rem;
    color: var(--text2);
    font-size: 0.8rem;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import iconArrow from "../img/arrowUp.svg";
import flag from "../img/flag.svg";
import { ExternalLink } from "react-external-link";
import copy from "copy-to-clipboard";

const SectionLinks = () => {
  let mail = "jefferfz16@mail.com";
  const [text, setText] = useState("");
  const handlerCopy = (e) => {
    setText(e.target.attributes.value.value);
    copy(e.target.attributes.value.value);
  };
  return (
    <ContainerGeneral>
      <Container>
        <RowLine>
          <div className="text">
            <p>LinkedIn</p>
            <p className="hover">
              www.linkedin.com/in/jefferson-cepeda-239297113/
            </p>
          </div>
          <ExternalLink href="https://www.linkedin.com/in/jefferson-cepeda-239297113/">
            <div className="link">
              <p>Link</p>
              <img src={iconArrow} alt="Arrow" />
            </div>
          </ExternalLink>
        </RowLine>
        <RowLine>
          <div className="text">
            <p>Correo electrónico</p>
            <p>{mail}</p>
          </div>
          <div className="link" onClick={handlerCopy} value={mail}>
            <p value={mail}>{text !== "" ? "Copiado" : "Copiar"}</p>
            <img value={mail} src={iconArrow} alt="Arrow" />
          </div>
        </RowLine>
        <RowLine>
          <div className="text">
            <p>Behance</p>
            <p className="hover">behance.net/jeffersoncepeda</p>
          </div>
          <ExternalLink href="https://www.behance.net/jeffersoncepeda">
            <div className="link">
              <p>Link</p>
              <img src={iconArrow} alt="Arrow" />
            </div>
          </ExternalLink>
        </RowLine>
        <RowLine>
          <div className="text">
            <p>GitHub</p>
            <p className="hover">github.com/jefferfz16</p>
          </div>
          <ExternalLink href="https://github.com/jefferfz16">
            <div className="link">
              <p>Link</p>
              <img src={iconArrow} alt="Arrow" />
            </div>
          </ExternalLink>
        </RowLine>
        <RowLine>
          <div className="text">
            <p>Teléfono de contacto</p>
            <p className="hover">
              <span>
                <img src={flag} alt="Colombia" />
              </span>
              +57 301 411 3106
            </p>
          </div>
        </RowLine>
      </Container>
    </ContainerGeneral>
  );
};

export default SectionLinks;

const ContainerGeneral = styled.div`
  margin: 2rem 0;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  @media (max-width: 1023px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RowLine = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--text2);
  max-width: 1000px;
  font-size: 0.8rem;
  &:hover {
    cursor: pointer;
    .text p:last-child {
      visibility: visible;
      transform: translateX(0);
    }
  }
  .text,
  .link {
    display: flex;
    flex: 1;
    align-items: center;
  }
  .text {
    flex-wrap: wrap;
  }
  .text p:first-child {
    margin-right: 1rem;
  }
  .text p:last-child {
    color: var(--text2);
    visibility: hidden;
    transition: 0.2s;
    transform: translateX(-10px);
    @media (max-width: 1050px) {
      visibility: visible;
    }
    @media (max-width: 1023px) {
      transform: translateX(0);
    }
  }
  .hover > span {
    margin-right: 0.5rem;
  }
  .link {
    justify-content: flex-end;
    > p {
      margin-right: 1rem;
      color: var(--text2);
    }
    > img {
      margin-bottom: 5px;
      width: 24px;
      transition: 0.4s;
    }
    &:hover {
      > p {
        text-decoration: underline;
      }
      > img {
        transform: scale(0.8);
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 1rem 0.5rem;
    .text {
      margin-right: 0.5rem;
    }
  }
`;

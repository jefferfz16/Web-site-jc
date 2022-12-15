import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import IconArrowUp from "../img/arrowUp2.svg";
import IconArrowDown from "../img/arrowDown.svg";

const SectionTitle = ({ label, id }) => {
  return (
    <ContainerGeneral id={id}>
      <div className="left">
        <div className="line" />
        <h4>{label}</h4>
      </div>
      <div className="btn">
        <HashLink smooth to="/#top">
          <img src={IconArrowUp} alt="up" />
        </HashLink>
        {label !== "Contacto" && (
          <HashLink smooth to="/#contact">
            <img src={IconArrowDown} alt="down" />
          </HashLink>
        )}
      </div>
    </ContainerGeneral>
  );
};

export default SectionTitle;

const ContainerGeneral = styled.div`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left,
  .btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .left {
    flex: 1;
    .line {
      width: 20%;
      max-width: 250px;
      height: 2px;
      background-color: var(--color1);
      margin-right: 1rem;
    }
  }
  .btn {
    margin-right: 5rem;
    > a:first-child {
      margin-right: 0.5rem;
    }
    > a {
      background-color: var(--color1);
      padding: 0.5rem 0.5rem;
      border-radius: 50px;
      z-index: 80;
      color: var(--white);
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        width: 12px;
      }
    }
  }
  @media (max-width: 1023px) {
    .btn {
      margin-right: 1rem;
    }
  }
  @media (max-width: 767px) {
    padding: 2rem 0;
    margin: 1rem 0;
  }
`;

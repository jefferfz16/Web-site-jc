import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <HeaderContainer id="top">
      <h3>Jefferson cepeda</h3>
      <ul>
        <li>
          <HashLink smooth to="/#projects">
            Proyectos
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact">
            Contacto
          </HashLink>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-size: 1rem;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 0.9rem;
      line-height: 1;
    }
  }
  > ul {
    display: flex;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 2px;
      > a {
        font-size: 0.6rem;
        text-transform: uppercase;
        padding: 0.6rem;
        color: var(--color1);
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          border-bottom: 2px solid var(--color1);
        }
        @media (min-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

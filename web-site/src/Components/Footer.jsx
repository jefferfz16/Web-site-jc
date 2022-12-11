import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>© 2022, Bogotá, Colombia</p>
      <p>Diseñado y desarrollado por Jefferson Cepeda</p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 0.8rem;
  }
  > p:last-child {
    color: var(--text2);
  }
`;

import React from "react";
import styled from "styled-components";

const SectionTitle = ({ label }) => {
  return (
    <ContainerGeneral>
      <div className="line" />
      <h4>{label}</h4>
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
  justify-content: flex-start;
  align-items: center;
  .line {
    width: 20%;
    max-width: 250px;
    height: 2px;
    background-color: var(--color1);
    margin-right: 1rem;
  }
`;

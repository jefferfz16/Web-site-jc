import React from "react";
import styled from "styled-components";
import BoxProject from "../BoxProject";

const SectionProjects = () => {
  return (
    <ContainerGeneral>
      <BoxProject />
      <BoxProject />
      <BoxProject />
      <BoxProject />
    </ContainerGeneral>
  );
};

export default SectionProjects;

const ContainerGeneral = styled.div`
  width: 85%;
  max-width: 1800px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

import React from "react";
import styled from "styled-components";
import { DataProjects } from "../../Data/DataProjects";
import BoxProject from "../BoxProject";

const SectionProjects = () => {
  return (
    <ContainerGeneral>
      {DataProjects.map((data, index) => {
        return <BoxProject key={index} data={data} />;
      })}
    </ContainerGeneral>
  );
};

export default SectionProjects;

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

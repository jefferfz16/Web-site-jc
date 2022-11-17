import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ScrollProgress from "../bar-progress";
import Header from "../header";
import Intro from "../intro";
import SectionTitle from "../SectionTitle";
import SectionProjects from "./SectionProjects";

const Principal = () => {
  return (
    <ContainerGeneral>
      <Helmet>
        <title>Jefferson Cepeda</title>
      </Helmet>
      <Header />
      <ScrollProgress />
      <Intro />
      <SectionTitle label="Proyectos" />
      <SectionProjects />
      <SectionTitle label="Contacto" />
    </ContainerGeneral>
  );
};

export default Principal;

const ContainerGeneral = styled.div`
  height: 5000px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

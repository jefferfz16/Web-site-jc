import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ScrollProgress from "../bar-progress";
import Footer from "../Footer";
import Header from "../header";
import Intro from "../intro";
import SectionTitle from "../SectionTitle";
import SectionContact from "./SectionContact";
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
      <SectionTitle id="projects" label="Proyectos" />
      <SectionProjects />
      <SectionTitle id="contact" label="Contacto" />
      <SectionContact />
      <Footer />
    </ContainerGeneral>
  );
};

export default Principal;

const ContainerGeneral = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

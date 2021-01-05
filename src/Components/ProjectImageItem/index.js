import React from "react";

import {
  Container,
  ImageArea,
  ContentArea,
  TitleProject,
  DescriptionProject,
  ItemTechnologyProject,
  ListTechnologiesProject,
  ButtonLink,
} from "./styles";

function ProjectImageItem({
  image,
  title,
  description,
  technology,
  reverse,
  link,
}) {
  return (
    <Container
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
        backgroundColor: reverse ? "#e5e6ea" : "#fff",
      }}
    >
      <ImageArea src={image} alt="Image Project" />

      <ContentArea>
        <TitleProject>{title}</TitleProject>
        <hr />
        <DescriptionProject>{description}</DescriptionProject>
        <ListTechnologiesProject>
          {technology.map((item) => {
            return <ItemTechnologyProject>{item}</ItemTechnologyProject>;
          })}
        </ListTechnologiesProject>
        {link ? (
          <ButtonLink href={link} target="_blank">
            More Information
          </ButtonLink>
        ) : null}
      </ContentArea>
    </Container>
  );
}

export default ProjectImageItem;

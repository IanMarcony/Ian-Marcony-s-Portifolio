import React from "react";

import {
  Container,
  ContentArea,
  TitleProject,
  DescriptionProject,
  ItemTechnologyProject,
  ListTechnologiesProject,
  ButtonLink,
  VideoArea,
} from "./styles";

function ProjectVideoItem({
  video,
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
      <VideoArea
        src={video}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen={true}
      ></VideoArea>

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

export default ProjectVideoItem;

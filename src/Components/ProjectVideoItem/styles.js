import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const VideoArea = styled.iframe`
  width: 50%;

  margin: 0 auto;
  width: 640px;
  height: 360px;
  @media (max-width: 800px) {
    width: 200px;
    height: 150px;
  }
`;

export const ContentArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  padding: 0.9rem;
  @media (max-width: 800px) {
    width: 50vw;
  }
`;

export const TitleProject = styled.h1`
  color: #2a9d8f;
  font-size: 1.5rem;
  text-align: left;
`;

export const DescriptionProject = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
  color: #2a9d8f;
  font-size: 1rem;
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const ListTechnologiesProject = styled.ul``;

export const ItemTechnologyProject = styled.li`
  color: #2a9d8f;
  font-size: 1rem;
`;

export const ButtonLink = styled.a`
  margin-top: 1rem;
  width: max-content;
  padding: 0.7rem;
  border-radius: 0.6rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #e76f51;

  transition: background-color 0.2s;
  &:hover {
    background-color: #e76f51aa;
  }
  @media (max-width: 800px) {
    width: 140px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

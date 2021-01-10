import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const PerfilImage = styled.img`
  border-radius: 50%;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  background-color: #264653;
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  align-items: center;
  padding: 0.5rem;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const ListButtonsNav = styled.ul`
  display: flexbox;
  flex-direction: row;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const ItemButtonNav = styled.li`
  padding: 0.2rem;
  align-items: center;
  justify-content: center;
`;

export const LinkButtonNav = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  border-radius: 6px;

  &:hover {
    background-color: #10264653;
  }
`;

export const Content = styled.main`
  width: 100%;
  height: max-content;

  padding-top: 3rem;
  padding-bottom: 4rem;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const ContainerInformations = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: max-content;
  padding: 2rem;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const ContentInformation = styled.section`
  text-align: center;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const NameInformation = styled.h1`
  font-size: 24pt;
  color: #fff;

  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const GithubButton = styled.a`
  padding: 0.7rem;
  border-radius: 0.6rem;
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
  }
`;

export const ContactArea = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background-color: #264653;
  width: 100%;
  height: 4rem;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const ListContacts = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;
  margin: 0.6rem auto;
`;
export const ItemContact = styled.li`
  font-size: 1rem;
  color: #fff;

  & + & {
    margin-left: 0.8rem;
  }
  @media (max-width: 800px) {
    font-size: 11pt;
  }
`;

export const CreatorAuthor = styled.span`
  font-size: 1rem;
  text-align: center;
  color: #fff;
  @media (max-width: 800px) {
    font-size: 11pt;
  }
`;

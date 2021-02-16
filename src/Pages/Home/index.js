import React from "react";
import ProjectImageItem from "../../Components/ProjectImageItem";
import ProjectVideoItem from "../../Components/ProjectVideoItem";

import ClioLogo from "../../Assets/Images/Logomarca_CLIO.jpg";
import Perfil from "../../Assets/Images/Perfil.jpg";
import SactLogo from "../../Assets/Images/logo_sact.png";

import TodoListRedux from "../../Assets/Images/to-do-list.png";
import Repository from "../../Assets/Images/repository.png";
import Car from "../../Assets/Images/car.png";
import LogoFinances from "../../Assets/Images/LogoFinances/LogoFinances.png";
import Browser from "../../Assets/Images/browser.png";
import Covid19 from "../../Assets/Images/covid-19.png";
import Popcorn from "../../Assets/Images/popcorn.png";
import Instagram from "../../Assets/Images/instagram.png";
import Network from "../../Assets/Images/network.png";
import DesertIcon from "../../Assets/Images/decor_7.png";
import CheckIcon from "../../Assets/Images/logo_check.png";
import DeathIcon from "../../Assets/Images/stand.png";
import NedIcon from "../../Assets/Images/logo_ned.jpg";
import WikiIcon from "../../Assets/Images/wikipedia-logotype-of-earth-puzzle.png";
import ProjectListIcon from "../../Assets/Images/project.svg";
import IMDBIcon from "../../Assets/Images/imdb.svg";
import BarberIcon from "../../Assets/Images/logo-barber.svg";
import OrdemServicoIcon from "../../Assets/Images/technician.svg";
import GithubExplorerIcon from "../../Assets/Images/logo_github_explorer.svg";
import NeuralIcon from "../../Assets/Images/neural.svg";

import {
  Container,
  Navigation,
  ListButtonsNav,
  ItemButtonNav,
  LinkButtonNav,
  Content,
  ContactArea,
  ContainerInformations,
  NameInformation,
  GithubButton,
  ContentInformation,
  PerfilImage,
  ListContacts,
  ItemContact,
  CreatorAuthor,
} from "./styles";

function Home() {
  const EasySaleIcon =
    "https://raw.githubusercontent.com/IanMarcony/Easy-Sale-Site/master/_imagem/logo_EasySale.png";

  const PitchIcon =
    "https://raw.githubusercontent.com/IanMarcony/Pitch-App/master/Imagens/Logo/logo-pitch.png";

  const HeroIcon =
    "https://raw.githubusercontent.com/IanMarcony/be-the-hero/master/assets/logo.svg";

  return (
    <Container>
      <Navigation>
        <ListButtonsNav>
          <ItemButtonNav>
            <LinkButtonNav
              href="https://www.linkedin.com/in/ian-marcony-94996319b/"
              target="_blank"
            >
              LinkedIn
            </LinkButtonNav>
          </ItemButtonNav>
          <ItemButtonNav>
            <LinkButtonNav href="https://github.com/IanMarcony" target="_blank">
              Github
            </LinkButtonNav>
          </ItemButtonNav>
        </ListButtonsNav>
      </Navigation>

      <Content>
        <ContainerInformations id="#home">
          <ContentInformation>
            <PerfilImage src={Perfil} height={150} />
            <NameInformation>Ian Marcony</NameInformation>
            <GithubButton href="https://github.com/IanMarcony" target="_blank">
              My Github
            </GithubButton>
          </ContentInformation>
        </ContainerInformations>

        <ProjectVideoItem
          id="#projects"
          video="https://www.youtube.com/embed/KC8-sZJarL0"
          title="CLIO"
          description="Virtual  Reality Game to assist in teaching history to
         students with ADHD"
          technology={["C#", "Unity Engine", "Google Cardboard SDK"]}
          link="https://www.youtube.com/watch?v=KC8-sZJarL0"
        />
        <ProjectImageItem
          image={ClioLogo}
          title="Site - CLIO"
          description="Site for more information about CLIO project "
          technology={["ReactJS", "NodeJS"]}
          link="clio-tcc.herokuapp.com"
          reverse
        />
        <ProjectImageItem
          image={ClioLogo}
          title="Site Social Media  -  CLIO"
          description="Site with CLIO's Social Media, created for share the contacts"
          technology={["ReactJS"]}
          link="https://clio-socialmedia.herokuapp.com/"
        />

        <ProjectVideoItem
          video="https://www.youtube.com/embed/N90XiMUOhW8"
          title="Sustainable City"
          description="This project is a game for PC to show some Sustentable City"
          technology={["C#", "Unity Engine"]}
          reverse
        />
        <ProjectImageItem
          image={SactLogo}
          title="SACT"
          description="📋 The SACT project is an internal web application of Fundação Matias Machline (FMM), used for evaluation and visualization of annual projects at the FMM technology and innovation fair"
          technology={["ReactJS", "Typescript", "Javascript"]}
          link="https://github.com/IanMarcony/SACT"
        />
        <ProjectVideoItem
          video="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6749192191001812992"
          title="E-Commerce Fake"
          description="This app is using React, Redux, Redux Saga, Redux Persist. It is a E-commerce to buy products."
          technology={[
            "React Native",
            "Redux, Redux Saga, Redux Persist",
            "Javascript",
          ]}
          link="https://github.com/IanMarcony/E-Commerce-Fake"
          reverse
        />
        <ProjectImageItem
          image={TodoListRedux}
          title="To-do List with Redux"
          description="This is a site to pratice Redux and his technologies"
          technology={["ReactJS", "Javascript"]}
          link="https://github.com/IanMarcony/ReactRedux"
        />
        <ProjectImageItem
          image={Repository}
          title="Search Repository"
          description="This site use axios to search repositories in Github"
          technology={["Html", "Javascript", "React"]}
          link="https://github.com/IanMarcony/search-repository"
          reverse
        />
        <ProjectImageItem
          image={Car}
          title="UberAPP"
          description="This is an app similar to UBER or 99"
          technology={["Android", "Java", "Firebase", "Realtime Firebase"]}
          link="https://github.com/IanMarcony/UBERAPP"
        />
        <ProjectImageItem
          image={LogoFinances}
          title="Finances Project"
          description="This app is to control your finances"
          technology={["React Native", "Javascript", "Firebase"]}
          link="https://github.com/IanMarcony/ProjetoFinancas"
          reverse
        />
        <ProjectImageItem
          image={Browser}
          title="MyBrowser"
          description="This is a project to do a Browser"
          technology={["Android", "Java"]}
          link="https://github.com/IanMarcony/MyBrowser"
        />
        <ProjectImageItem
          image={Covid19}
          title="Covid 19 Alert"
          description="App to compare datas from Governo Federal with datas from Covid19-Brazil Site"
          technology={["React Native", "Javascript"]}
          link="https://github.com/IanMarcony/covid19"
          reverse
        />
        <ProjectImageItem
          image={Popcorn}
          title="Movies App"
          description="App similar to Netflix"
          technology={["React Native", "Javascript"]}
          link="https://github.com/IanMarcony/filmes-react-native"
        />
        <ProjectImageItem
          image={Instagram}
          title="Instagram Fake"
          description="Only application to learn how to use React Native in Development. This app is like Instagram"
          technology={["React Native", "Javascript"]}
          link="https://github.com/IanMarcony/filmes-react-native"
          reverse
        />
        <ProjectImageItem
          image={Network}
          title="FMMBOOK - React Native"
          description="Simple project to learn about Expo and React Native. FMMBOOK is a Social Network"
          technology={["React Native", "Javascript"]}
          link="https://github.com/IanMarcony/FMMBOOK-React-Native"
        />
        <ProjectImageItem
          image={DesertIcon}
          title="Adventure in Desert Game"
          description="A game to explore a simple desert"
          technology={["C#", "Unity Engine"]}
          link="https://github.com/IanMarcony/AdventureInDesert-Unity"
          reverse
        />
        <ProjectImageItem
          image={Network}
          title="FMMBOOK - Site"
          description="FMMBOOK is a Social Network"
          technology={["React Native", "Javascript"]}
          link="https://github.com/IanMarcony/Rede-Social-FMMBOOK"
        />
        <ProjectImageItem
          image={CheckIcon}
          title="Check Student App"
          description="This app is to assist the schools in register frequency during Distance Class. Created beacause the Coronavirus Pandemic"
          technology={["Android", "Java"]}
          link="https://github.com/IanMarcony/check-student-mobile"
          reverse
        />
        <ProjectImageItem
          image={DeathIcon}
          title="Death Run Game"
          description="This game is  the Death Run like the  minigame from Counter Strike"
          technology={["C#", "Unity Engine"]}
          link="https://github.com/IanMarcony/death-run-game"
        />
        <ProjectImageItem
          image={NedIcon}
          title="Ned Run"
          description="A game with running infinity"
          technology={["C#", "Unity Engine"]}
          link="https://github.com/IanMarcony/Ned-Run"
          reverse
        />
        <ProjectImageItem
          image={EasySaleIcon}
          title="Site - Easy Sale"
          description="Site to teach how to use a Easy Sale Software"
          technology={["Html", "NodeJS", "Javascript", "Css"]}
          link="https://github.com/IanMarcony/Easy-Sale-Site"
        />
        <ProjectImageItem
          image={WikiIcon}
          title="Wikifake"
          description="Site like the Wikipedia site"
          technology={["Html", "Css"]}
          link="https://github.com/IanMarcony/Wikifake"
          reverse
        />
        <ProjectImageItem
          image={EasySaleIcon}
          title="Easy Sale"
          description="Managment System to micro businessman aiming to control their sales"
          technology={["Java"]}
          link="https://github.com/IanMarcony/Easy-Sale"
        />
        <ProjectImageItem
          image={PitchIcon}
          title="Pitch App"
          description="App made to vote for the best Pitch"
          technology={["Android", "Java"]}
          link="https://github.com/IanMarcony/Pitch-App"
          reverse
        />
        <ProjectImageItem
          image={ProjectListIcon}
          title="Lista de Projetos"
          description="This site in ReactJS is to register and list the projects from backend in NodeJS"
          technology={["ReactJS", "NodeJS", "React Native", "Javascript"]}
          link="https://github.com/IanMarcony/projects-list"
        />
        <ProjectImageItem
          image={IMDBIcon}
          title="IMDB-fake"
          description="This is application to review movies and tv shows"
          technology={["Android", "ReactJS", "NodeJS", "Javascript", "Java"]}
          link="https://github.com/IanMarcony/IMDB-app"
          reverse
        />
        <ProjectImageItem
          image={HeroIcon}
          title="Be The Hero"
          description="Application to help ONG with donates"
          technology={["ReactJS", "NodeJS", "React Native", "Javascript"]}
          link="https://github.com/IanMarcony/be-the-hero"
        />
        <ProjectImageItem
          image={BarberIcon}
          title="GoBarber"
          description="This is application to barber"
          technology={[
            "ReactJS",
            "NodeJS",
            "React Native",
            "Docker",
            "Javascript",
            "Typescript",
          ]}
          link="https://github.com/IanMarcony/Project-Bootcamp"
          reverse
        />
        <ProjectImageItem
          image={OrdemServicoIcon}
          title="Costomer Service"
          description="Application to costomer service"
          technology={["Spring Boot", "AngularJS", "Java", "Javascript"]}
          link="https://github.com/IanMarcony/BackendSpring"
        />

        <ProjectImageItem
          image={GithubExplorerIcon}
          title="Github Explorer"
          description="Application to search repositories from Github"
          technology={["ReactJS", "Javascript"]}
          link="https://github.com/IanMarcony/Github-Explorer"
          reverse
        />
        <ProjectImageItem
          image={NeuralIcon}
          title="Test Neural Network"
          description="This is test about Machine Learning"
          technology={["Javascript"]}
          link="https://github.com/IanMarcony/Test-Rede-Neural"
        />
      </Content>
      <ContactArea>
        <ListContacts>
          <ItemContact>Email: imarconyls@gmail.com</ItemContact>
          <ItemContact>From: Manaus - AM - Brazil</ItemContact>
        </ListContacts>
        <CreatorAuthor>Created by Ian Marcony</CreatorAuthor>
      </ContactArea>
    </Container>
  );
}

export default Home;

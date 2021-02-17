import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #2a9d8f;
  color: #fff;
}

h1,
a {
  font-weight: 400;
}

a {
  cursor: pointer;
}
@media (max-width: 800px) {
  body {
    width: 100vw;
  }
}


`;

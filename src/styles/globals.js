import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding: 150px;
  }
  body {
    font-family: Mono;
    width: 100%;
    height: 100vh;
    background-color: #0a192f;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #a8b2d1;
    &:hover {
      color: #64ffda;
    }
  }
  span {
    color: #64ffda;
  }
  li {
    list-style-type: none;
  }
  section {
    margin: 0 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1300px) {
      margin: 0 100px;
    }
    @media screen and (max-width: 450px) {
      margin: 0 15px;
    }
  }
`;

export default GlobalStyles;
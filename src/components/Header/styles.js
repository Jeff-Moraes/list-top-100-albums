import styled from "styled-components";

import background from "../../assets/header-background.jpg";

export const HeaderContainer = styled.div`
  background: url(${background}) no-repeat center;
  background-size: cover;
  height: 180px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    color: #555;
    font-weight: 500;
    font-size: 32px;
    font-family: Montserrat, sans-serif;
    background-color: #fff;
    padding: 16px 32px;
    transform: translateY(25px);
    margin: 0 4vw;
    border: solid 1px #eee;
  }
`;

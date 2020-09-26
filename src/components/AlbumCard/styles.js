import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  margin: 0 4vw;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.17);

  display: grid;
  grid-template-columns: minmax(60px, 170px) 1fr;

  & + div {
    margin-top: 12px;
  }

  img {
    width: 100%;
    max-width: 170px;
    padding: 16px;
  }

  .cardInfos {
    margin: 16px 0;

    h1 {
      color: #555;
      font-weight: 500;
      font-size: 24px;
      font-family: Montserrat, sans-serif;
      margin: 20px 0 5px;
    }

    .artistName {
      color: #fbaf01;
      font-weight: 400;
      font-size: 14px;
      font-family: Source Sans Pro, sans-serif;
    }

    .spanContainer {
      margin: 10px 0;

      p {
        color: #555;
        font-weight: 400;
        font-size: 14px;
        font-family: Source Sans Pro, sans-serif;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .cardInfos {
      margin: 0 16px 16px;

      h1 {
        margin: 0;
      }
    }
  }
`;

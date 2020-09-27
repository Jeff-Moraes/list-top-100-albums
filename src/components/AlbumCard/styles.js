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
    display: flex;
    flex-direction: column;

    h1 {
      color: #555;
      font-weight: 500;
      font-size: 24px;
      font-family: Montserrat, sans-serif;
      margin-top: 20px;
    }

    .artistName {
      color: #555;
      font-weight: 400;
      font-size: 14px;
      font-family: Source Sans Pro, sans-serif;
    }

    .detailsButtonContainer {
      margin: 5px 0;
      button {
        color: #555;
        font-size: 12px;
        padding: 4px 8px;
        border: 1px solid #fbaf01;
        border-radius: 4px;
        background-color: #fff;
      }
    }

    .detailsContainer {
      margin: 5px 0;
      color: #777;

      p {
        font-weight: 400;
        font-size: 14px;
        font-family: Source Sans Pro, sans-serif;

        & + p {
          margin-top: 3px;
        }
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

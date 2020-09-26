import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  margin: 0 4vw;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.17);

  display: grid;
  grid-template-columns: 100px 1fr;

  & + div {
    margin-top: 12px;
  }

  img {
    min-height: 50px;
    max-height: 100px;
    max-width: 100px;
    object-fit: cover;
  }

  .cardInfos {
    padding: 20px 16px;

    h1 {
      color: #555;
      font-weight: 500;
      font-size: 24px;
      font-family: Montserrat, sans-serif;
    }

    p {
      display: inline-block;
      color: #fbaf01;
      font-weight: 400;
      font-size: 14px;
      font-family: Source Sans Pro, sans-serif;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

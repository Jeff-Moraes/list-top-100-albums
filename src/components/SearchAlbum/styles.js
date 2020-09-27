import styled from "styled-components";

export const Container = styled.form`
  background: #fff;
  margin-bottom: 20px;
  padding-top: 6vh;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-bottom: 3vh;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.17);

  display: grid;
  grid-template-columns: 2fr 2fr 1fr 120px;

  input {
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #fbaf01;
    padding: 5px;
    color: #555;
    margin: 0 16px;
  }

  div {
    margin: 10px 16px;

    label {
      margin-right: 10px;
      color: #555;
    }

    select {
      color: #555;
      border: 1px solid #fbaf01;
    }
  }

  button[type="submit"] {
    margin: 0 16px;
    padding: 10px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
    background-color: #fdbf30;
    transition: background-color 0.5s;

    &:hover {
      background-color: #fbaf01;
    }
  }

  button[type="button"] {
    margin-right: 16px;
    padding: 10px;
    color: #555;
    border: 1px solid #fdbf30;
    border-radius: 6px;
    background-color: #fff;
    transition: background-color 0.5s;

    svg {
      font-size: 12px;
      color: #ffdecf;
      margin-right: 5px;
      transition: color 0.5s;
    }

    &:hover {
      border: 1px solid #ffdecf;
      background-color: #ffdecf;
      svg {
        color: #e8505b;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    div {
      margin: 16px 16px;
    }

    button[type="button"] {
      margin-top: 10px;
      margin-left: 16px;
    }
  }
`;

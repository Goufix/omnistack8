import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
  }
  form input {
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    color: #666;
  }
  form input::placeholder {
    color: #999;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border: 0;
  span {
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      flex: 1;
      background: rgba(0, 0, 0, 0.1);
      height: 300px;
      border: 0;
      border-radius: 4px;
    }
    input {
      display: none;
    }
    strong {
      position: absolute;
      color: #fff;
      font-size: 20px;
    }
  }
`;

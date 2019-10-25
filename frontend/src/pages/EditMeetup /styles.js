import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 0px auto;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }


    }


    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 200px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: red;
      margin-left: 15px;
      margin-bottom: 10px;
    }
    }


    input.password {
      -webkit-text-security: disc;
    }



    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button#btnUpdate {
      margin: 5px 0 0;
      height: 42px;
      width: 162px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
    }
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
    }
    div {
      button#edit {
        border: 0;
        background: #4dbaf9;
        width: 116px;
        height: 42px;
        color: #fff;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        margin-right: 10px;

        &:hover {
          background: ${darken(0.08, '#4DBAF9')};
        }

        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          span {
            margin-right: 10px;
          }
        }
      }

      button#cancel {
        border: 0;
        background: #f94d6a;
        width: 116px;
        height: 42px;
        color: #fff;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;

        &:hover {
          background: ${darken(0.08, '#F64C75')};
        }
        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }

  img {
    margin-top: 52px;
    height: 300px;
  }

  p {
    margin-top: 30px;
    color: #fff;
    font-size: 18px;
  }

  footer {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    color: #999;
    font-size: 16px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 30px;
      span {
        margin-right: 10px;
      }
    }
  }
`;

export const Meetup = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 62px;
  color: #fff;
  margin: 0 0 10px;

  strong {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  span {
    color: #999;
    font-size: 16px;
    font-weight: normal;
  }
`;

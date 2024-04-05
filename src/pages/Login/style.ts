import { styled } from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;

  .LoginContents {
    padding: 70px;
  }

  .LoginBtnFrame {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .LoginButton {
    border-radius: 10px;
    width: 465px;
    height: 85px;
    background-color: white;
  }
`;

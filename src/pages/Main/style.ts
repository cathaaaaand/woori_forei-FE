import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  .ContentFrame {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ComponentFrame {
    width: 1440px;
    border-top: 1px solid #858585;
    padding: 60px;
  }
  .ContentTitle {
    font-size: 20pt;
    margin-left: 60px;
  }
`;

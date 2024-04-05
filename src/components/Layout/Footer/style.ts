import { styled } from 'styled-components';

export const Footer = styled.div`
  width: 1440px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16pt;
  border-top: 1px solid #858585;
  padding: 50px;
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  .logoWrapper {
    display: flex;
    width: 189px;
    height: 61px;
    background-color: #d9d9d9;
    justify-content: center;
    align-items: center;
  }
`;

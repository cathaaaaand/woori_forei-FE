import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  width: 1440px;
  font-size: 20px;
  padding-top: 50px;

  .logoWrapper {
    display: flex;
    width: 189px;
    height: 61px;
    background-color: #d9d9d9;
    justify-content: center;
    align-items: center;
    transform: translate(0px, -20px);
  }
`;
export const HeaderContents = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  height: 230px;
  gap: 100px;
`;
export const NavWrapper = styled.nav`
  width: 60%;
  list-style-type: none;
  padding: 0;
`;

export const NavContents = styled.ul`
  display: flex;
  justify-content: center;
  gap: 130px;

  // &:hover {
  //   visibility: visible;
  //   transition: transform 0.1s ease-in-out;
  // }
`;
export const NavBottomWrapper = styled.div`
  color: #898989;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginBottomWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  min-height: calc(100vh - 180px);
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .logoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0px, -20px);
  }

  .headerAfterWrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 32px;
    top: 118px;
    width: 100vw;
    max-width: 100%;
    height: 0px;
    transition: all 0.5s;
    z-index: 99;
    overflow: hidden;
    visibility: none;
  }

  &:hover {
    .headerAfterWrapper {
      background: #f1fbff;
      height: 228px;
      z-index: 99;
      visibility: visible;
    }
  }
`;
export const HeaderContents = styled.header`
  position: relative;
  left: 0;
  top: 0;
  font-size: 20px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 4px -4px black;
  width: 100%;
  // width: 1440px;
  //height: 230px;
  gap: 191px;
`;
export const NavWrapper = styled.nav`
  list-style-type: none;
  padding: 0;
  // margin-left: 191px;
  // margin-right: 66px;
`;

export const NavContents = styled.ul`
  display: flex;
  justify-content: center;
  gap: 41px;
  color: #363636;

  div {
    font-size: 19px;
    font-weight: bolder;
  }
`;
export const NavOuterContents = styled.div`
  display: flex;
  justify-content: center;
  gap: 41px;
`;
export const NavBottomWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  transform: translate(-266px, 0px);
  div {
    font-size: 19px;
    color: #505050;
    font-weight: normal;
    &:hover {
      color: black;
      font-weight: bold;
    }
  }
`;

export const LoginBottomWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const logoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  transform: translate(0px, -23px);
`;
export const LoginNavContents = styled.ul`
  display: flex;
  gap: 25px;
`;
export const Footer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 16pt;
  border-top: 1px solid #858585;
  .Inner {
    width: 1440px;
    padding: 50px;
  }
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  .logoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0px, -20px);
  }
  .loginWrapper {
    display: flex;
    gap: 10px;
  }
`;

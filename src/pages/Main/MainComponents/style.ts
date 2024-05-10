import { styled } from 'styled-components';

const flexColumn = `
display: flex;
flex-direction: column;
`;
const flexF = `
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

export const PopularWrapper = styled.div`
  ${flexColumn}
  flex-wrap: wrap;
  align-content: flex-end;
  margin: 50px auto 50px auto;
  transform: translate(45px, 0px);
  .Card {
    width: 797px;
    display: flex;
    gap: 25px;
    overflow-x: hidden;
  }
`;
export const CardFrame = styled.div`
  ${flexF}
  margin-top: 60px;
  background: #f1f7ff;
  height: 487px;

  .CardWrapper {
    ${flexF}
    gap: 90px;
    margin: auto 30px auto 30px;
  }
  .CardColumnWrapper {
    ${flexColumn}
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .CardMapnWrapper {
    ${flexColumn}
    flex-wrap: wrap;
    align-items: center;
    gap: 21px;
    height: 302px;
  }
  .CardFlexWrapper {
    ${flexF}
    gap: 19px;
  }

  .Bold {
    font-size: 19px;
    font-weight: bold;
    margin-right: 9px;
    border-right: 1px solid #1985da;
    padding-right: 9px;
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Descript {
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Card {
    width: 340px;
    height: 480px;
    background-color: #d9d9d9;
  }
`;
export const CardDateFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 18px;
`;
export const CardTitleFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 21px;
  color: #3e3e3e;
  font-size: 24px;
  transform: translate(-145px, -25px);
  p {
    font-weight: bold;
  }
`;
export const CultureCardTitleFrame = styled.div`
  display: flex;
  justify-content: center;
  gap: 721px;
  width: 1440px;

  p {
    font-weight: bold;
  }
  .CultureTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
    color: #3e3e3e;
    font-size: 24px;
  }
`;
export const CardContentFrame = styled.div`
  display: flex;
  gap: 110px;
`;
export const CardDescription = styled.div`
  width: 360px;
  transform: translate(0px, -5px);
  .DContent {
    width: max-content;
    max-width: 360px;
    word-break: break-all;
  }
  .Dtitle {
    color: #0084e3;
    font-size: 80px;
    font-weight: 900;
    margin-bottom: 120px;
  }
  .DTag {
    width: 112px;
    height: 34px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 20px;
    background: #0084e3;
    margin-bottom: 35px;
  }
  .DName {
    color: black;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 35px;
  }
  .Ddescription {
    color: #575757;
    font-size: 19px;
  }
`;
export const ImgCard = styled.img`
  width: 595px;
  height: 472px;
  border: 1px solid transparent;
  border-radius: 10px;
`;
export const flexFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
export const DramaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;

  .smallFrame {
    display: flex;
    gap: 80px;
  }
  .small {
    width: 245px;
    height: 245px;
    margin: 40px 0 40px 0;
    background-color: #d9d9d9;
  }
  .big {
    width: 560px;
    height: 570px;
    background-color: #d9d9d9;
  }
`;
export const NavTotalLine = styled.div`
  width: 164px;
  border-top: 1px solid #cecece;
  border-radius: 0.5px;
`;
export const NavMovelLine = styled.div<{ $pagelinenum: number }>`
  width: ${({ $pagelinenum }) =>
    $pagelinenum < 1 ? `${164 * $pagelinenum}px` : '164px'};
  transition: width 0.3s ease;
  border-top: 1px solid black;
  border-radius: 0.5px;
  position: absolute;
`;
export const NextBeforeBtn = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
`;
export const NextBeforeFrame = styled.div`
  display: flex;
`;
export const NavFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 5px;
`;
export const PlusBtn = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BlueLine = styled.div`
  width: 600px;
  border-top: 1px solid #1985da;
`;

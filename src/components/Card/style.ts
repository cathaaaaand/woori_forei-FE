import { styled } from 'styled-components';

export const CardFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .CardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 90px;
    margin: auto 30px auto 30px;
  }
  .Card {
    width: 340px;
    height: 480px;
    background-color: #d9d9d9;
  }
`;
export const PlaceCard = styled.div`
  display: flex;
  gap: 90px;
  font-size: 25px;

  .CardFrame {
    text-align: center;
  }

  .Card {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 353px;
    height: 407px;
    background-color: #d9d9d9;
    border-radius: 20px;
    margin-top: 30px;
    padding: 40px;
  }
`;
export const SearchCardOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const SearchCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 1320px;
  height: 496px;
`;
export const SearchInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;
  justify-content: center;
  font-size: 16pt;
  .BlueFocusBefore {
    display: flex;
    padding-top: 20px;
    padding-right: 30px;
    padding-bottom: 20px;
    background: #005391;
    border-radius: 10px;
    color: white;
    gap: 70px;
  }
  .DataTitle {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-left: 45px;
  }

  .DataContent {
  }
  .DataUrl {
    padding-top: 20px;
    a {
      width: max-content;
      max-width: 308px;
      word-break: break-all;
    }
  }
`;
export const LinkBtn = styled.button`
  width: 437px;
  height: 93px;
  background-color: #d9d9d9;
  border: none;
  font-size: 18pt;
`;

export const NavTotalLine = styled.div`
  width: 867px;
  height: 1px;
  border: 1px solid #cecece;
  border-radius: 0.5px;
`;
export const NavMovelLine = styled.div<{ $pagelinenum: number }>`
  width: ${({ $pagelinenum }) =>
    $pagelinenum < 1 ? `${867 * $pagelinenum}px` : '867px'};
  transition: width 0.3s ease;
  height: 1px;
  border: 1px solid black;
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
`;

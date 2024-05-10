import { styled } from 'styled-components';

export const BestPlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;
export const BPWrapper = styled.div`
  width: 1440px;
  padding: 60px;
  display: flex;
  flex-direction: column;

  .BPTitle {
    font-size: 25px;
  }

  .BPMap {
    margin: 50px auto 50px auto;
  }
`;
export const SearchInputFrame = styled.div`
  position: relative;
  width: 940px;
  margin: 50px auto 50px auto;
`;
export const SearchInput = styled.input`
  position: relative;
  width: 940px;
  height: 38px;
  border: 1px solid black;
  border-radius: 30px;
  padding-left: 25px;
  font-size: 15pt;
`;
export const SearchInputBtn = styled.div`
  position: absolute;
  top: 10px;
  bottom: 0;
  right: 25px;
  boder: none;
  height: 23px;
  font-size: 15pt;
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
  height: 580px;
  margin-top: 20px;
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
    border-radius: 10px;
    background: white;
    color: black;
    gap: 70px;
    &:hover {
      background: #005391;
      color: white;
    }
  }
  .DataTitle {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 250px;
    padding-left: 45px;
  }

  .DataContent {
    width: 450px;
    li {
      width: 450px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 5px;
    }
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

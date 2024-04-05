import { styled } from 'styled-components';

export const TourTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;
export const TourWrapper = styled.div`
  width: 1440px;
  padding: 60px;
  display: flex;
  flex-direction: column;

  .Title {
    font-size: 25px;
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

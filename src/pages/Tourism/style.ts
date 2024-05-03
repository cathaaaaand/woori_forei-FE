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
    font-size: 15px;
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
  height: 54px;
  border: none;
  border-radius: 30px;
  padding-left: 25px;
  font-size: 15pt;
  background: #f1fbff;
`;
export const SearchInputBtn = styled.div`
  position: absolute;
  top: 12px;
  bottom: 0;
  right: 60px;
  boder: none;
  height: 23px;
  font-size: 15pt;
`;
export const LoadingCard = styled.div`
  width: 1320px;
  height: 496px;
  display: flex;
  align-items: center;
  justify-content: center;
  #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: black;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

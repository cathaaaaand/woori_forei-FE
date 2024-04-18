import { styled } from 'styled-components';

export const SchedulerTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;
export const SchedulerWrapper = styled.div`
  width: 1440px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .Title {
    font-size: 30px;
  }

  .BeforeArrow {
    position: absolute;
    top: 50px;
    left: 305px;
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
  height: 23px;
  font-size: 15pt;
`;

export const StepBtn = styled.button`
  width: 450px;
  height: 75px;
  font-size: 20pt;
  background-color: white;
  border: 1px solid #015ffa;
  border-radius: 10px;
  margin-top: 60px;
`;

export const FinalTitle = styled.div`
  margin-top: 30px;
`;

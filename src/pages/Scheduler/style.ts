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
    display: flex;
    gap: 20px;
    font-size: 30px;
    margin-bottom: 30px;
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

export const FinalTitle = styled.div`
  margin-top: 30px;
`;
export const ListWrapper = styled.div`
  display: flex;
  gap: 21px;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  .Card {
    width: 334px;
    height: 435px;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
  }
`;
export const CardNumber = styled.div`
  width: 40px;
  height: 35px;
  border: none;
  background: #30a8ff;
  border-radius: 50%;
`;
export const Circle = styled.div`
  background: #b2b2b2;
  width: 30px;
  height: 30px;
  border: 1px solid transparent;
  border-radius: 50%;
`;
export const SInput = styled.input`
  width: 356px;
  height: 58px;
  border: 1px solid #4a4a4a;
`;
export const InputBtn = styled.div`
  width: 356px;
  height: 58px;
  border: 1px solid #4a4a4a;
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

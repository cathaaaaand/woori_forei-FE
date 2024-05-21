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
    align-items: center;
    gap: 20px;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .STitle {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    p {
      font-size: 18pt;
      font-weight: bold;
    }
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
  top: 10px;
  bottom: 0;
  right: 25px;
  boder: none;
  height: 23px;
  font-size: 15pt;
`;
export const FinalTitle = styled.div`
  margin-top: 30px;
`;
export const ListWrapper = styled.div`
  display: flex;
  gap: 21px;
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
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  .Card {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  background: #30a8ff;
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: 50%;
`;
export const GCircle = styled.div`
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
  border-radius: 10px;
  font-size: 20pt;
  padding: 10px;
`;
export const InputBtn = styled.div`
  width: 356px;
  height: 58px;
  border: 1px solid #4a4a4a;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
export const InputBtnFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  div {
    display: flex;
    flex-direction: column;
    gap: 17px;
    font-size: 20pt;
  }
  label {
    font-size: 18pt;
  }
`;
export const StepBtn = styled.button`
  width: 356px;
  height: 58px;
  font-size: 20pt;
  background-color: white;
  border: 1px solid #595959;
  border-radius: 10px;
  margin-top: 60px;
`;
export const Nemo = styled.div`
  background: white;
  width: 350px;
  height: 500px;
  border: 1px solid black;
  border-radius: 5px;
`;
export const NemoFrame = styled.div`
  display: flex;
  gap: 50px;
`;
export const CheckFrame = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 53px;
  margin: 10px;
  .index {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #30a8ff;
    color: white;
    font-size: 16pt;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
  }
`;
export const schedulerName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 46px;
  margin-left: 20px;
`;
export const schedulerTotalFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 100px 100px 150px;
  .Title {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

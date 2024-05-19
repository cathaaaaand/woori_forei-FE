import { styled } from 'styled-components';

export const FaqFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: 20pt;
`;
export const FaqInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  padding: 50px;
`;
export const ContentFrame = styled.div``;
export const Line = styled.div`
  border-top: 1px solid #808080;
`;
export const FaqTitleFrame = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  margin-bottom: 20px;
  .FaTitle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
    p {
      font-weight: bold;
      font-size: 35px;
    }
  }
`;
export const WriteBtn = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #b2b2b2;
  display: flex;
  font-size: 18px;
  align-items: center;
`;
export const FaqContentFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  height: 86px;
  padding: 0 60px 0 60px;
  font-size: 16pt;
`;
export const FaqPageFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
export const Circle = styled.div`
  background: #30a8ff;
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: 50%;
`;
export const AccordionBtn = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
`;
export const ContentTitle = styled.div`
  margin: 64px 0 27px 60px;
  .length {
    font-size: 15pt;
    margin-bottom: 12px;
  }
  .typeLabel {
    width: 78px;
    height: 35px;
    background: #0084e3;
    color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 16pt;
      font-weight: bold;
    }
  }
`;
export const NextBeforeFrame = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
export const NextBeforeBtn = styled.button`
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
`;
export const WriteBtnFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 60px;
`;

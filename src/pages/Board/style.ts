import { styled } from 'styled-components';

export const BoardFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 20pt;
`;
export const BoardInnerFrame = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 50px;
  flex-direction: column;
`;
export const BoardTitleFrame = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 60px -40px 20px;
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
  font-size: 18px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
`;
export const ContentTitle = styled.div`
  margin: 90px 0 27px 60px;
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
export const WriteBtnFrame = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
  padding-right: 60px;
`;
export const BoardContentFrame = styled.div``;
export const BoardPageFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
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
export const NextBeforeBtn = styled.button`
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
`;
export const NextBeforeFrame = styled.div`
  display: flex;
  justify-content: center;
`;
export const BoardToDetailBtn = styled.div`
  display: flex;
  gap: 7px;
  margin-left: 930px;
`;

export const PageNationBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 19pt;
`;

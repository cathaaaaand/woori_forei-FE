import { styled } from 'styled-components';

export const BoardFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: 20pt;
`;
export const BoardInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding: 60px;
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
  border: none;
  background: #0084e3;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 18px;
  color: white;
`;
export const ContentTitle = styled.div`
  margin: 90px 0 27px 60px;
`;
export const BoardContentFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #858585;
  border-bottom: 1px solid #858585;
  height: 170px;
  padding: 0 60px 0 60px;
  font-size: 16pt;
`;
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

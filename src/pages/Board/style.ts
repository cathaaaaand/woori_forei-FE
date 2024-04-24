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
  margin: 0 60px -40px 60px;
`;
export const WriteBtn = styled.button`
  border: none;
  background: #d9d9d9;
  width: 100px;
  height: 40px;
  font-size: 18px;
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

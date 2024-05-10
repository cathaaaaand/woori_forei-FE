import { styled } from 'styled-components';

export const FaqFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: 20pt;
  padding: 30px;
`;
export const FaqInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding-top: 60px;
`;
export const ContentFrame = styled.div`
  margin: 50px 0 27px 0;
`;
export const Line = styled.div`
  border-top: 1px solid #858585;
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
  border: none;
  background: #0084e3;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 18px;
  color: white;
`;
export const FaqContentFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #858585;
  height: 160px;
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

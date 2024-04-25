import { styled } from 'styled-components';

export const DetailFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: 20pt;
`;
export const DetailInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding: 50px 0 100px 0;
`;
export const TitleFrame = styled.div`
  margin-left: 85px;
`;
export const ContentTitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 1350px;
  border-bottom: 1px solid #d2d2d2;
  margin-top: 85px;
  padding-bottom: 70px;
  font-size: 18px;
`;
export const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 1350px;
  height: 350px;
  margin-top: 50px;
  font-size: 18px;
`;
export const FaqContentOuterFrame = styled.div`
  padding: 40px;
`;

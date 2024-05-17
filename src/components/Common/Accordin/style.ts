import { styled } from 'styled-components';

export const SmartAccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  width: 1200px;
`;
export const SmartAccordionHeader = styled.div`
  border-top: 1px solid #858585;
  width: 1200px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 60px;
  div {
    display: flex;
    gap: 26px;
  }
`;
export const SmartAccordionBody = styled.div`
  width: 1200px;
  background: #f1f7ff;
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 320px;
    padding: 30px;
  }
`;

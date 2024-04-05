import { styled } from 'styled-components';

export const DramaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;

  .smallFrame {
    display: flex;
    gap: 80px;
  }
  .small {
    width: 245px;
    height: 245px;
    margin: 40px 0 40px 0;
    background-color: #d9d9d9;
  }
  .big {
    width: 560px;
    height: 570px;
    background-color: #d9d9d9;
  }
`;

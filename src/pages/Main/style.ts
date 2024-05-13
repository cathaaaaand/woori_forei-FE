import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .ContentFrame {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ComponentFrame {
    width: 1440px;
    padding: 60px;
  }
  .ContentTitle {
    font-size: 20pt;
    margin-left: 60px;
  }
`;
export const ImaCardFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 787px;
  gap: 31px;

  p {
    display: flex;
    font-weight: bold;
  }
  .CultureTitle {
    display: flex;
    align-items: center;
    gap: 21px;
    color: #3e3e3e;
    font-size: 24px;
  }
  .ImgCardColumn {
    width: 241px;
    height: 503px;
    border-radius: 5px;
    background: #f7f7f7;
    color: transparent;
    img {
      width: 241px;
      height: 503px;
      background-position: center;
      border-radius: 5px;
    }

    &:hover {
      color: white;
    }
    p {
      transform: translate(10px, -30px);
    }
  }
  .ImgCardSquare {
    width: 240px;
    height: 240px;
    border-radius: 5px;
    background: #f7f7f7;
    color: transparent;
    img {
      width: 240px;
      height: 240px;
      background-position: center;
      border-radius: 5px;
    }
    &:hover {
      color: white;
    }
    p {
      text-align: center;
      transform: translate(10px, -35px);
    }
  }
  .ImgCardSquare4 {
    width: 500px;
    height: 500px;
    border-radius: 5px;
    background: #f7f7f7;
    color: transparent;
    img {
      width: 500px;
      height: 500px;
      background-position: center;
      border-radius: 5px;
    }
    &:hover {
      color: white;
    }
    p {
      text-align: center;
      transform: translate(10px, -35px);
    }
  }
  .Flex {
    display: flex;
    gap: 28px;
    margin-bottom: 28px;
  }
`;

import { styled } from 'styled-components';

export const CardFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .CardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 90px;
    margin: auto 30px auto 30px;
  }
  .Card {
    width: 340px;
    height: 480px;
    background-color: #d9d9d9;
  }
`;
export const PlaceCard = styled.div`
  display: flex;
  gap: 90px;
  font-size: 25px;

  .CardFrame {
    text-align: center;
  }

  .Card {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 353px;
    height: 407px;
    background-color: #d9d9d9;
    border-radius: 20px;
    margin-top: 30px;
    padding: 40px;
  }
`;

import { styled } from 'styled-components';

const flexColumn = `
display: flex;
flex-direction: column;
`;
export const PopularWrapper = styled.div`
  ${flexColumn}
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 50px auto 50px auto;

  .Card {
    ${flexColumn}
    position: relative;
    width: 1200px;
    height: 200px;
    justify-content: space-between;
    padding: 30px;
    margin: 15px auto 15px auto;
    background-color: #d9d9d9;
  }

  // .CardContent {
  //   position: absolute;
  //   padding: 30px;
  // }
`;
export const flexFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

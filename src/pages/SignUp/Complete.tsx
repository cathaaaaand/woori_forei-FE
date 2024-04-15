import React from 'react';
import { styled } from 'styled-components';

const Complete = () => {
  return (
    <ModalFrame>
      <ModalInnerFrame>
        <div className="first">회원가입이 완료되었습니다!</div>
        <div className="second">회원가입 후 함께 서울시를 즐겨봐요!</div>
      </ModalInnerFrame>
    </ModalFrame>
  );
};

export default Complete;

const ModalFrame = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 99;
`;
const ModalInnerFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .first {
    font-size: 30pt;
    color: black;
    margin-bottom: 40px;
  }

  .second {
    font-size: 23pt;
    color: #888888;
  }
`;

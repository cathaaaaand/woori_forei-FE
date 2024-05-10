import React from 'react';
import { styled } from 'styled-components';

interface ModalPropsType {
  contentShowHandler: () => void;
}
const Modal = (props: ModalPropsType) => {
  const { contentShowHandler } = props;
  return (
    <ModalFrame>
      <CloseModal onClick={contentShowHandler}>X</CloseModal>
      <div>서비스 이용약관 (일반 회원용)</div>
    </ModalFrame>
  );
};

export default Modal;

const ModalFrame = styled.div`
  position: absolute;
  width: 1289px;
  height: 886px;
  border: 1px solid #d2d2d2;
  boder-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  background-color: white;
`;
const CloseModal = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`;

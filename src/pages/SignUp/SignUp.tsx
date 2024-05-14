import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import google from '../../asset/google.png';
import Step from './Step';
import * as St from './style';

const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [adminShow, setAdminShow] = useState(false);
  const SignUpEmailHandler = () => {
    setShow(true);
    setAdminShow(false);
  };
  const SignUpAdminHandler = () => {
    setShow(true);
    setAdminShow(true);
  };
  const emailBackArrowHandler = () => {
    setShow(false);
    setAdminShow(false);
    navigate('/');
  };
  return (
    <St.SignUpWrapper>
      <div className="LoginOuterWrapper">
        <div className="BackArrow" onClick={emailBackArrowHandler}>
          <IoArrowBackOutline color="#9B9B9B" />
          <div>
            <p>홈</p>
            <p>&#62;</p>
            <p className="Bold">로그인</p>
          </div>
        </div>
        <div className="SignUpTitle">
          <St.Circle />
          {adminShow ? '관리자 회원가입' : '회원 가입'}
        </div>
        {!show && (
          <>
            <St.SignUpDescriptionFrame>
              <St.SignUpDescription>서울시를 즐겨봐요!</St.SignUpDescription>
            </St.SignUpDescriptionFrame>
            <div>
              <div className="SignUpBtnFrame">
                <button className="SignUpButton" onClick={SignUpEmailHandler}>
                  <CiMail size="30" />
                  이메일로 가입하기
                </button>
                <button className="SignUpButton">
                  <img alt="구글로고" src={google} />
                  구글로 가입하기
                </button>
                <St.SignUpToLogin>
                  <div>이미 계정이 있으신가요?</div>
                  <St.LigntoText
                    onClick={() => {
                      navigate('/login');
                    }}
                  >
                    로그인
                  </St.LigntoText>
                </St.SignUpToLogin>
              </div>
              <St.Lign />
              <div onClick={SignUpAdminHandler}>관리자가입</div>
            </div>
          </>
        )}
        {show && <Step adminShow={adminShow} />}
      </div>
    </St.SignUpWrapper>
  );
};

export default SignUp;

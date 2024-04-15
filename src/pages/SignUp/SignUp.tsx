import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
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
  };
  return (
    <St.SignUpWrapper>
      <div className="SignUpTitle">회원가입</div>

      {!show && (
        <>
          <St.SignUpDescriptionFrame>
            <IoIosArrowBack
              onClick={() => {
                navigate(-1);
              }}
            />
            <St.SignUpDescription>
              회원가입 후 함께 서울시를 즐겨봐요!
            </St.SignUpDescription>
          </St.SignUpDescriptionFrame>
          <div>
            <div className="SignUpBtnFrame">
              <button className="SignUpButton" onClick={SignUpEmailHandler}>
                이메일로 가입하기
              </button>
              <button className="SignUpButton">애플로 가입하기</button>
              <button className="SignUpButton">구글로 가입하기</button>
              <St.SignUpToLogin>
                <div>이미 계정이 있으신가요?</div>
                <St.underLign
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  로그인
                </St.underLign>
              </St.SignUpToLogin>
            </div>
            <St.Lign />
            <div onClick={SignUpAdminHandler}>관리자가입</div>
          </div>
        </>
      )}
      {show && (
        <Step
          emailBackArrowHandler={emailBackArrowHandler}
          adminShow={adminShow}
        />
      )}
    </St.SignUpWrapper>
  );
};

export default SignUp;

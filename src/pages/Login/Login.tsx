import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as St from './style';

const Login = () => {
  const navigate = useNavigate();
  const [emailCpShow, setEmailCpShow] = useState(true);
  const [passwordFind, setPasswordFind] = useState(false);
  const [adminShow, setAdminShow] = useState(false);
  const groupToEmailHandler = () => {
    setEmailCpShow(!emailCpShow);
    setAdminShow(false);
  };
  const passwordFindShow = () => {
    setPasswordFind(!passwordFind);
    setEmailCpShow(true);
  };
  const loginToAdminHandler = () => {
    setEmailCpShow(!emailCpShow);
    setAdminShow(!adminShow);
  };
  const passwordFindHandler = () => {
    console.log('비밀번호 재설정 링크 보내기!');
  };
  const defaultIdValue = [
    {
      id: 'loginId',
      password: 'password',
    },
  ];
  const emailLoginHandler = () => {
    if (defaultIdValue[0].id) {
      navigate('/');
    } else {
      alert('이메일 및 비밀번호가 유효하지 않습니다!');
    }
  };
  return (
    <St.LoginWrapper>
      {!passwordFind && (
        <div className="LoginContents">
          <div className="LoginTitle">로그인</div>
          <St.LoginDescription>서울시를 즐겨봐요!</St.LoginDescription>
          <div className="LoginBtnFrame">
            {emailCpShow && (
              <>
                <button className="LoginButton" onClick={groupToEmailHandler}>
                  이메일로 로그인하기
                </button>
                <button className="LoginButton">애플로 로그인하기</button>
                <button className="LoginButton">구글로 로그인하기</button>
                <St.LoginMaintain>
                  <input id="loginMaintain" type="checkbox" />
                  <p>로그인 상태 유지</p>
                </St.LoginMaintain>
              </>
            )}
            {!emailCpShow && (
              <>
                <IoIosArrowBack onClick={groupToEmailHandler} />
                <St.EmailNPasswordFrame>
                  <AiOutlineMail className="LoginIcon" />
                  <input className="LoginIput" />
                </St.EmailNPasswordFrame>
                <St.EmailNPasswordFrame>
                  <AiOutlineUnlock className="LoginIcon" />
                  <input className="LoginIput" />
                </St.EmailNPasswordFrame>
                {adminShow && (
                  <St.EmailNPasswordFrame>
                    <AiOutlineUnlock className="LoginIcon" />
                    <input className="LoginIput" placeholder="관리자 암호" />
                  </St.EmailNPasswordFrame>
                )}
                <St.LoginMaintain>
                  <input id="loginMaintainAdmin" type="checkbox" />
                  <p>로그인 상태 유지</p>
                </St.LoginMaintain>
                <St.LoginBtn onClick={emailLoginHandler}>로그인</St.LoginBtn>
              </>
            )}
          </div>
          <St.OtherMenu>
            <div onClick={passwordFindShow}>비밀번호 찾기</div>|
            <div
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </div>
            |<div onClick={loginToAdminHandler}>관리자 로그인</div>
          </St.OtherMenu>
        </div>
      )}
      {passwordFind && (
        <div>
          <div className="LoginTitle">비밀번호 찾기</div>
          <St.InputDescriptionFrame>
            <IoIosArrowBack onClick={passwordFindShow} />
            <St.LoginDescription>서울시를 즐겨봐요!</St.LoginDescription>
          </St.InputDescriptionFrame>
          <St.InputFrame>
            <St.InputTitle>이메일 주소</St.InputTitle>
            <St.EmailNPasswordFrame>
              <AiOutlineMail className="LoginIcon" />
              <input className="LoginIput" />
            </St.EmailNPasswordFrame>
            <St.PasswordFindBtn onClick={passwordFindHandler}>
              비밀번호 재설정 링크 보내기
            </St.PasswordFindBtn>
          </St.InputFrame>
        </div>
      )}
    </St.LoginWrapper>
  );
};

export default Login;

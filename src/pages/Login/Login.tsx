import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../asset/google.png';
import * as St from './style';
import { googleLoginPostApi, loginApiFn } from 'api/auth';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const googleLoginMutation = useMutation({
    mutationFn: googleLoginPostApi,
  });
  const [emailCpShow, setEmailCpShow] = useState(true);
  const [passwordFind, setPasswordFind] = useState(false);
  const [adminShow, setAdminShow] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginMaintain, setLoginMaintain] = useState(false);
  const { loginApi } = loginApiFn(loginMaintain);
  const { email, password } = loginForm;

  const mutation = useMutation({
    mutationFn: loginApi,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const LoginMaintainOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginMaintain(e.target.checked);
  };
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
  const googleLoginHandler = async () => {
    const googleId = process.env.REACT_GOOGLE_ID;
    window.location.href =
      'https://accounts.google.com/o/oauth2/auth?' +
      `client_id=${googleId}&` +
      'redirect_uri=http://localhost:3000/login&' +
      'response_type=code&' +
      'scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    // console.log(params, code);
    if (code) {
      googleLoginMutation.mutate(code, {
        onSuccess: (data) => {
          alert(data.message);
          navigate('/');
        },
        onError: (error) => {
          //alert(error.message);
          console.log(error);
        },
      });
    }
  }, [location]);
  const emailLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(
      { email: email, password: password },
      {
        onSuccess: (data) => {
          alert(data.message);
          navigate('/');
        },
        onError: (error) => {
          if (email && password) {
            alert(error.message);
          } else {
            alert('이메일 또는 비밀번호 입력해주세요');
          }
        },
      },
    );
  };
  return (
    <St.LoginWrapper>
      {!passwordFind && (
        <div className="LoginContents">
          <div className="LoginTitle">
            <St.Circle />
            <p> 로그인</p>
          </div>
          <St.LoginDescription>서울시를 즐겨봐요!</St.LoginDescription>
          <div className="LoginBtnFrame">
            {emailCpShow && (
              <>
                <button className="LoginButton" onClick={groupToEmailHandler}>
                  <CiMail size="30" />
                  이메일로 로그인하기
                </button>
                <button className="LoginButton" onClick={googleLoginHandler}>
                  <img alt="구글로고" src={google} />
                  구글로 로그인하기
                </button>
              </>
            )}
            {!emailCpShow && (
              <>
                <IoIosArrowBack onClick={groupToEmailHandler} />
                <form id="Login" method="post" onSubmit={emailLoginHandler}>
                  <St.EmailNPasswordFrame>
                    <AiOutlineMail className="LoginIcon" />
                    <input
                      type="text"
                      className="LoginIput"
                      placeholder="email @ email.com"
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                  </St.EmailNPasswordFrame>
                  <St.EmailNPasswordFrame>
                    <AiOutlineUnlock className="LoginIcon" />
                    <input
                      type="password"
                      className="LoginIput"
                      placeholder="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </St.EmailNPasswordFrame>
                </form>
                <St.LoginMaintain>
                  <input
                    id="loginMaintainAdmin"
                    type="checkbox"
                    checked={loginMaintain}
                    onChange={LoginMaintainOnChange}
                  />
                  <p>로그인 상태 유지</p>
                </St.LoginMaintain>
                <St.LoginBtn type="submit" form="Login">
                  로그인
                </St.LoginBtn>
              </>
            )}
          </div>
          <St.OtherMenu>
            <div onClick={loginToAdminHandler}>관리자 로그인</div>|
            <div onClick={passwordFindShow}>비밀번호 찾기</div>|
            <div
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </div>
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

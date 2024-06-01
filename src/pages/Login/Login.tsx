import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../asset/google.png';
import * as St from './style';
import { googleLoginPostApi, loginApi } from 'api/auth';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const googleLoginMutation = useMutation({
    mutationFn: googleLoginPostApi,
  });
  const [emailCpShow, setEmailCpShow] = useState(true);
  const [adminShow, setAdminShow] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
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

  const groupToEmailHandler = () => {
    setEmailCpShow(!emailCpShow);
    setAdminShow(false);
  };
  const loginToAdminHandler = () => {
    setEmailCpShow(!emailCpShow);
    setAdminShow(!adminShow);
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

    if (code) {
      googleLoginMutation.mutate(code, {
        onSuccess: (data) => {
          alert(data.message);
          navigate('/');
        },
        onError: (error) => {
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

              <St.LoginBtn type="submit" form="Login">
                로그인
              </St.LoginBtn>
            </>
          )}
        </div>
        <St.OtherMenu>
          <div onClick={loginToAdminHandler}>관리자 로그인</div>|
          <div
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </div>
        </St.OtherMenu>
      </div>
    </St.LoginWrapper>
  );
};

export default Login;

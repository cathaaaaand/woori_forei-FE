import React from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import * as St from './style';
import { loginOutApi } from 'api/auth';

const Header = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const isLogin = () => {
    const sessionLogin = sessionStorage.getItem('login');
    const cookieLogin = cookies.get('login');
    return sessionLogin || cookieLogin ? true : false;
  };
  const logOutHandler = () => {
    loginOutApi();
    cookies.remove('login');
  };

  return (
    <St.HeaderWrapper>
      <St.HeaderContents>
        <div className="logoWrapper">로고</div>

        <St.NavWrapper>
          <St.NavContents>
            <div>
              <div
                onClick={() => {
                  navigate('/tour');
                }}
              >
                관광
              </div>
              <St.NavBottomWrapper>
                <div
                  onClick={() => {
                    navigate('/place');
                  }}
                >
                  명소
                </div>
                <div
                  onClick={() => {
                    navigate('/experience');
                  }}
                >
                  체험
                </div>
                <div
                  onClick={() => {
                    navigate('/restaurant');
                  }}
                >
                  맛집
                </div>
                <div
                  onClick={() => {
                    navigate('/souvenir');
                  }}
                >
                  기념품
                </div>
              </St.NavBottomWrapper>
            </div>
            <div>
              <div>숙박</div>
              <St.NavBottomWrapper>
                <div
                  onClick={() => {
                    navigate('/hotel');
                  }}
                >
                  호텔
                </div>
                <div
                  onClick={() => {
                    navigate('/homeStay');
                  }}
                >
                  홈스테이
                </div>
              </St.NavBottomWrapper>
            </div>
            <div
              onClick={() => {
                navigate('/scheduler');
              }}
            >
              스케줄러
            </div>
            <div
              onClick={() => {
                navigate('/board');
              }}
            >
              게시판
            </div>
            <div
              onClick={() => {
                navigate('/faq');
              }}
            >
              FAQ
            </div>
          </St.NavContents>
        </St.NavWrapper>

        <div>
          <div>번역</div>

          {!isLogin() ? (
            <St.LoginBottomWrapper>
              <div
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그인
              </div>
              <div
                onClick={() => {
                  navigate('/signup');
                }}
              >
                회원가입
              </div>
            </St.LoginBottomWrapper>
          ) : (
            <St.LoginBottomWrapper>
              <div onClick={logOutHandler}>로그아웃</div>
              <div
                onClick={() => {
                  console.log('마이페이지');
                }}
              >
                마이페이지
              </div>
            </St.LoginBottomWrapper>
          )}
        </div>
      </St.HeaderContents>
    </St.HeaderWrapper>
  );
};

export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as St from './style';

const Header = () => {
  const navigate = useNavigate();
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
            <div>FAQ</div>
          </St.NavContents>
        </St.NavWrapper>

        <div>
          <div>번역</div>
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
        </div>
      </St.HeaderContents>
    </St.HeaderWrapper>
  );
};

export default Header;

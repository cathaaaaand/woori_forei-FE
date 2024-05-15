import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { PiSignpostLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import headerLock from '../../asset/headerLock.png';
import mainLogo from '../../asset/mainLogo.png';
import * as St from './style';

const Header = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  const isLogin = () => {
    return userId ? true : false;
  };
  const logOutHandler = () => {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('userId');
    alert('로그아웃 되었습니다!');
    window.location.reload();
    navigate('/');
  };
  const myPageHandler = () => {
    navigate(`/mypage/${userId}`);
  };
  return (
    <St.HeaderWrapper>
      <St.HeaderContents>
        <div
          className="logoWrapper"
          onClick={() => {
            navigate('/');
          }}
        >
          <img alt="로고" src={mainLogo} />
        </div>
        <St.NavWrapper>
          <St.NavContents>
            <div
              onClick={() => {
                navigate('/tour');
              }}
            >
              관광
            </div>

            <div>숙박</div>

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
        <St.LoginNavContents>
          <St.logoWrapper>
            <CiGlobe size="30px" />
            번역
          </St.logoWrapper>
          {!isLogin() ? (
            <>
              <St.logoWrapper
                onClick={() => {
                  navigate('/login');
                }}
              >
                <img
                  src={headerLock}
                  alt="자물쇠"
                  style={{ width: '30px', height: '30px' }}
                />
                로그인
              </St.logoWrapper>
              <St.logoWrapper
                onClick={() => {
                  navigate('/signup');
                }}
              >
                <PiSignpostLight size="30px" />
                회원가입
              </St.logoWrapper>
              <St.logoWrapper>
                <IoIosSearch size="30px" />
              </St.logoWrapper>
            </>
          ) : (
            <>
              <St.logoWrapper onClick={logOutHandler}>
                <img
                  src={headerLock}
                  alt="자물쇠"
                  style={{ width: '30px', height: '30px' }}
                />
                로그아웃
              </St.logoWrapper>
              <St.logoWrapper onClick={myPageHandler}>
                <GoPerson size="30px" />
                마이페이지
              </St.logoWrapper>
            </>
          )}
        </St.LoginNavContents>
      </St.HeaderContents>

      <div className="headerAfterWrapper">
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

        <St.NavBottomWrapper>
          <div
            onClick={() => {
              navigate('/hotel');
            }}
          >
            호텔
          </div>
        </St.NavBottomWrapper>
      </div>
    </St.HeaderWrapper>
  );
};

export default Header;

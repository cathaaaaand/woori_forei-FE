import React from 'react';
import * as St from './style';

const Login = () => {
  return (
    <St.LoginWrapper>
      <div className="LoginContents">
        <div>로그인</div>
        <div>서울시를 즐겨봐요!</div>
        <div className="LoginBtnFrame">
          <button className="LoginButton">이메일로 로그인하기</button>
          <button className="LoginButton">애플로 로그인하기</button>
          <button className="LoginButton">구글로 로그인하기</button>
          <div>
            <input type="checkbox" />
            <p>로그인 상태 유지</p>
          </div>
        </div>
        <div>
          <div>비밀번호 찾기</div>
          <div>회원가입</div>
          <div>관리자 로그인</div>
        </div>
      </div>
    </St.LoginWrapper>
  );
};

export default Login;

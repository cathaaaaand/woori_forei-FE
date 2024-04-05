import React from 'react';
import * as St from './style';

const Footer = () => {
  return (
    <St.Footer>
      <St.FooterTop>
        <div className="logoWrapper">로고</div>
        <div>로그아웃 | 마이페이지 | 이용안내 | 개인정보처리방침</div>
      </St.FooterTop>
      <div>
        대표자 : 김이름 | 대표메일 : abcd1234@abcd.com | 대표전화 : 1234-1234
      </div>
      <div>사업자등록번호 : 123-12-12345 | 서울특별시</div>
      <div>ⓒ 2024. 캣핸드 all rights reserved.</div>
    </St.Footer>
  );
};

export default Footer;

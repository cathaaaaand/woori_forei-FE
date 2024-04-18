import React from 'react';
import * as St from './style';

const SearchCard = () => {
  const defaultValue = [
    {
      title: '강남관광정보센터',
      time: '서비스시간: 10:00~19:00 (연중무휴)',
      lang: '서비스언어: 영어, 중국어, 일어',
      address: '주소 : 서울시 강남구 압구정로 161',
      phone: '전화 : 02) 3445-0111',
      url: 'e',
    },
    {
      title: '강남관광정보센터',
      time: '서비스시간: 10:00~19:00 (연중무휴)',
      lang: '서비스언어: 영어, 중국어, 일어',
      address: '주소 : 서울시 강남구 압구정로 161',
      phone: '전화 : 02) 3445-0111',
      url: 'e',
    },
    {
      title: '강남관광정보센터',
      time: '서비스시간: 10:00~19:00 (연중무휴)',
      lang: '서비스언어: 영어, 중국어, 일어',
      address: '주소 : 서울시 강남구 압구정로 161',
      phone: '전화 : 02) 3445-0111',
      url: 'e',
    },
  ];
  return (
    <St.SearchCardWrapper>
      {defaultValue.slice(0, 3).map((value, index) => (
        <St.SearchInnerWrapper key={index}>
          <div className="DataTitle">{value.title}</div>
          <div className="DataContent">
            <li>{value.time}</li>
            <li>{value.lang}</li>
            <li>{value.address}</li>
            <li>{value.phone}</li>
          </div>
          <St.LinkBtn>홈페이지 바로가기</St.LinkBtn>
          {/* <div><a href=`${value.url}`>홈페이지 바로가기</a></div> */}
        </St.SearchInnerWrapper>
      ))}
    </St.SearchCardWrapper>
  );
};

export default SearchCard;

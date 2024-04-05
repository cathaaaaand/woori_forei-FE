import React from 'react';

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
    <div>
      {defaultValue.slice(0, 3).map((value, index) => (
        <div key={index}>
          <div>{value.title}</div>
          <div>
            <div>{value.time}</div>
            <div>{value.lang}</div>
            <div>{value.address}</div>
            <div>{value.phone}</div>
          </div>
          <div>{value.url}</div>
          {/* <div><a href=`${value.url}`>홈페이지 바로가기</a></div> */}
        </div>
      ))}
    </div>
  );
};

export default SearchCard;

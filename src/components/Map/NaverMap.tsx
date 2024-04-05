/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    // kakao: any;
    naver: any;
  }
}
// NAVER 지도 API 타입 정의 파일은 NPM 패키지(@types/navermaps)를 통해 설치할 수 있습니다.
// let map: naver.maps.Map;
// const center: naver.maps.LatLng = new naver.maps.LatLng(37.3595704, 127.105399);

// map = new naver.maps.Map('map', {
//     center: center,
//     zoom: 16
// });

const Map = () => {
  const mapRef = useRef(null);
  const { naver } = window;
  const onSuccessGeolocation = (position: any, map: any) => {
    const currentLocation = new naver.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude,
    );
    map.setCenter(currentLocation); // 얻은 좌표를 지도의 중심으로 설정합니다.
    map.setZoom(16); // 지도의 줌 레벨을 변경합니다.

    const marker = new naver.maps.Marker({
      position: currentLocation,
      map: map,
    });
  };
  const location = new naver.maps.LatLng(37.5666103, 126.9783882);
  const mapOptions = {
    // 지도의 초기 중심 좌표
    center: location,
    logoControl: false, // 네이버 로고 표시 X
    mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
    scaleControl: true, // 지도 축척 컨트롤의 표시 여부
    tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
    zoom: 14, // 지도의 초기 줌 레벨
    zoomControl: true, // 줌 컨트롤 표시
    zoomControlOptions: { position: 9 }, // 줌 컨트롤 우하단에 배치
  };
  useEffect(() => {
    const map = new naver.maps.Map(mapRef.current, mapOptions);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position: any) {
        onSuccessGeolocation(position, map);
      });
    } else {
      const defaultLocPosition = new naver.maps.LatLng(37.5666103, 126.9783882);
      onSuccessGeolocation(defaultLocPosition, map);
    }
  }, []);
  return (
    <div>
      <div ref={mapRef} style={{ width: '1143px', height: '594px' }} />
    </div>
  );
};

export default Map;

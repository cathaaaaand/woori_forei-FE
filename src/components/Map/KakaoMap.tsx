/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapType {
  data?: {
    xcode: string;
    ycode: string;
  };
}

const Map = (props: MapType) => {
  const { data } = props;
  const mapRef = useRef(null);
  const { kakao } = window;
  const displayMarker = (markerPosition: any, map: any) => {
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  };

  function transCoordCB(
    result: {
      y: any;
      x: any;
    }[],
    status: any,
  ) {
    // 정상적으로 검색이 완료됐으면
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 7,
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);
    if (status === kakao.maps.services.Status.OK) {
      // 마커를 변환된 위치에 표시합니다
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(result[0].y, result[0].x), // 마커를 표시할 위치입니다
        map: map, // 마커를 표시할 지도객체입니다
      });
      marker.setMap(map);
    }
  }
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 7,
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);
    const moveMarker = (moveLatLon: any) => {
      map.setCenter(moveLatLon);
    };
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        //message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        // 마커와 인포윈도우를 표시합니다
        moveMarker(locPosition);
        displayMarker(locPosition, map);
      });
      if (data) {
        const geocoder = new kakao.maps.services.Geocoder(),
          wtmX = data.xcode,
          wtmY = data.ycode;
        geocoder.transCoord(wtmX, wtmY, transCoordCB, {
          input_coord: kakao.maps.services.Coords.WTM, // 변환을 위해 입력한 좌표계 입니다
          output_coord: kakao.maps.services.Coords.WGS84, // 변환 결과로 받을 좌표계 입니다
        });
      }
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      const defaultLocPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      // , message = 'geolocation을 사용할수 없어요..';
      displayMarker(defaultLocPosition, map);
    }
  }, []);
  return (
    <div>
      <div ref={mapRef} style={{ width: '1143px', height: '594px' }} />
    </div>
  );
};

export default Map;

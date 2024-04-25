import React from 'react';
import * as St from './style';

const FaqDetail = () => {
  return (
    <St.DetailFrame>
      <St.DetailInnerFrame>
        <St.TitleFrame>FAQ</St.TitleFrame>
        <St.FaqContentOuterFrame>
          <St.ContentTitleFrame>
            회원가입 시 위치 정보 공유 동의는 왜 필요한가요?
          </St.ContentTitleFrame>
          <St.ContentFrame>
            <p>
              서비스 내의 ‘내 근처 명소, 맛집, 숙소, 문화체험 찾기 기능’을
              이용할 경우,
            </p>
            <p>사용자의 GPS 정보를 필요로 하게 됩니다.</p>
            <p>
              위치 정보 공유에 동의하지 않으실 경우, 서비스 내의 필수 기능들을
              원활히 이용하지 못할 수도 있다는 점 양해 부탁드립니다.
            </p>
          </St.ContentFrame>
        </St.FaqContentOuterFrame>
      </St.DetailInnerFrame>
    </St.DetailFrame>
  );
};

export default FaqDetail;

import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import * as St from './style';

const Faq = () => {
  const navigate = useNavigate();
  return (
    <St.FaqFrame>
      <St.FaqInnerFrame>
        <St.FaqTitleFrame>
          <p>FAQ</p>
          <St.WriteBtn
            onClick={() => {
              navigate('/faqwrite');
            }}
          >
            글쓰기
          </St.WriteBtn>
        </St.FaqTitleFrame>

        <St.ContentFrame>
          <St.Line />
          <St.FaqContentFrame
            onClick={() => {
              navigate('/faqdetail');
            }}
          >
            <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            <div>24.03.25</div>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            <div>24.03.25</div>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            <div>24.03.25</div>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            <div>24.03.25</div>
          </St.FaqContentFrame>
        </St.ContentFrame>
        <St.FaqPageFrame>
          <div>1/108</div>
          <GoTriangleRight size="30" />
        </St.FaqPageFrame>
      </St.FaqInnerFrame>
    </St.FaqFrame>
  );
};

export default Faq;

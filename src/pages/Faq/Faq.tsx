import React from 'react';
import { Cookies } from 'react-cookie';
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as St from './style';

const Faq = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const cookieLogin = cookies.get('login');
  return (
    <St.FaqFrame>
      <St.FaqInnerFrame>
        <St.FaqTitleFrame>
          <div className="FaTitle">
            <St.Circle />
            <p>FAQ</p>
          </div>
          {cookieLogin && (
            <St.WriteBtn
              onClick={() => {
                navigate('/faqwrite');
              }}
            >
              글쓰기
            </St.WriteBtn>
          )}
        </St.FaqTitleFrame>
        <div>
          <p>총 30 건</p>
          <p>최신글</p>
        </div>
        <St.ContentFrame>
          <St.Line />
          <St.FaqContentFrame
            onClick={() => {
              navigate('/faqdetail');
            }}
          >
            <div>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <button>
              <IoIosArrowDown />
            </button>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <button>
              <IoIosArrowDown />
            </button>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <button>
              <IoIosArrowDown />
            </button>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <button>
              <IoIosArrowDown />
            </button>
          </St.FaqContentFrame>
        </St.ContentFrame>
        <St.FaqPageFrame>
          <IoIosArrowBack size="20px" />
          <div>1 2 3 4</div>
          <IoIosArrowForward size="20px" />
        </St.FaqPageFrame>
      </St.FaqInnerFrame>
    </St.FaqFrame>
  );
};

export default Faq;

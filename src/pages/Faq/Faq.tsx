import React from 'react';
// import { Cookies } from 'react-cookie';
import { FiPlus } from 'react-icons/fi';
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as St from './style';

const Faq = () => {
  const navigate = useNavigate();
  // const cookies = new Cookies();
  // const cookieLogin = cookies.get('login');
  const pageBeforeBtnHandler = () => {
    alert('첫 번째 페이지입니다!');
  };
  const pageNextBtnHandler = () => {
    alert('마지막 페이지입니다!');
  };
  return (
    <St.FaqFrame>
      <St.FaqInnerFrame>
        <St.FaqTitleFrame>
          <div className="FaTitle">
            <St.Circle />
            <p>FAQ</p>
          </div>
        </St.FaqTitleFrame>
        <St.ContentTitle>
          <p className="length">총 30 건</p>
          <St.WriteBtnFrame>
            <div className="typeLabel">
              <p>최신글</p>
            </div>
            <St.WriteBtn
              onClick={() => {
                navigate('/faqwrite');
              }}
            >
              <FiPlus />
            </St.WriteBtn>
          </St.WriteBtnFrame>
        </St.ContentTitle>

        <St.ContentFrame>
          <St.Line />
          <St.FaqContentFrame
            onClick={() => {
              navigate('/faqdetail');
            }}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <St.AccordionBtn>
              <IoIosArrowDown size="20px" />
            </St.AccordionBtn>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <St.AccordionBtn>
              <IoIosArrowDown size="20px" />
            </St.AccordionBtn>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <St.AccordionBtn>
              <IoIosArrowDown size="20px" />
            </St.AccordionBtn>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <St.AccordionBtn>
              <IoIosArrowDown size="20px" />
            </St.AccordionBtn>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <St.AccordionBtn>
              <IoIosArrowDown size="20px" />
            </St.AccordionBtn>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <St.AccordionBtn>
              <IoIosArrowDown size="20px" />
            </St.AccordionBtn>
          </St.FaqContentFrame>
          <St.FaqContentFrame>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p>24.03.25</p>
              <div>회원가입 시 위치 정보 공유 동의는 왜 필요한가요?</div>
            </div>
            <St.AccordionBtn>
              <IoIosArrowDown size="20px" />
            </St.AccordionBtn>
          </St.FaqContentFrame>
        </St.ContentFrame>
        <St.NextBeforeFrame onClick={pageBeforeBtnHandler}>
          <St.NextBeforeBtn>
            <IoIosArrowBack size="20px" />
          </St.NextBeforeBtn>
          1 2 3 4
          {/* {getPage(data).map((page, index) => (
              <St.PageNationBtn
                key={index}
                onClick={() => pageChangeHandler(page)}
              >
                {page}
              </St.PageNationBtn>
            ))} */}
          <St.NextBeforeBtn onClick={pageNextBtnHandler}>
            <IoIosArrowForward size="20px" />
          </St.NextBeforeBtn>
        </St.NextBeforeFrame>
      </St.FaqInnerFrame>
    </St.FaqFrame>
  );
};

export default Faq;

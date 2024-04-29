import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Complete from './Complete';
import Modal from './Modal';
import * as St from './style';

interface StepPropsStyle {
  emailBackArrowHandler: () => void;
  adminShow: boolean;
}
const Step = (props: StepPropsStyle) => {
  const { emailBackArrowHandler, adminShow } = props;
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [contentShow, setContentShow] = useState(false);
  const nextStepHandler = () => {
    setStep(step + 1);
  };
  const beforeStepHandler = () => {
    setStep(step - 1);
  };
  const contentShowHandler = () => {
    setContentShow(!contentShow);
  };
  const EmailAgainHandler = () => {
    console.log('이메일 인증 다시 받기');
  };

  if (step === 4) {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }
  return (
    <div>
      {step === 0 && (
        <div>
          <St.SignUpDescriptionFrame>
            <IoIosArrowBack onClick={emailBackArrowHandler} />
            <St.SignUpDescription>
              회원가입 후 함께 서울시를 즐겨봐요!
            </St.SignUpDescription>
          </St.SignUpDescriptionFrame>
          <St.InputFrame>
            <St.InputTitle>이메일 주소</St.InputTitle>
            <St.EmailNPasswordFrame>
              <AiOutlineMail className="SignUpIcon" />
              <input className="SignUpIput" />
            </St.EmailNPasswordFrame>
            <St.InputTitle>비밀번호</St.InputTitle>
            <St.EmailNPasswordFrame>
              <AiOutlineUnlock className="SignUpIcon" />
              <input className="SignUpIput" />
            </St.EmailNPasswordFrame>
            <St.InputTitle>비밀번호 확인</St.InputTitle>
            <St.EmailNPasswordFrame>
              <AiOutlineUnlock className="SignUpIcon" />
              <input className="SignUpIput" />
            </St.EmailNPasswordFrame>
            {adminShow && (
              <>
                <St.InputTitle>관리자 비밀번호</St.InputTitle>
                <St.EmailNPasswordFrame>
                  <AiOutlineUnlock className="SignUpIcon" />
                  <input className="SignUpIput" />
                </St.EmailNPasswordFrame>
              </>
            )}
            <St.CheckBoxGroup>
              <St.CheckBoxFrame>
                <input id="serviceCheck" type="checkbox" />
                <p>서비스 약관에 동의합니다.</p>
                <St.underLign onClick={contentShowHandler}>
                  내용보기
                </St.underLign>
              </St.CheckBoxFrame>
              <St.CheckBoxFrame>
                <input id="infoCheck" type="checkbox" />
                <p>개인정보 수집 및 이용에 동의합니다.</p>
                <St.underLign onClick={contentShowHandler}>
                  내용보기
                </St.underLign>
              </St.CheckBoxFrame>
              <St.CheckBoxFrame>
                <input id="locationCheck" type="checkbox" />
                <p>위치기반서비스 이용약관에 동의합니다.</p>
                <St.underLign onClick={contentShowHandler}>
                  내용보기
                </St.underLign>
              </St.CheckBoxFrame>
            </St.CheckBoxGroup>
            {contentShow && <Modal contentShowHandler={contentShowHandler} />}
          </St.InputFrame>
        </div>
      )}
      {step === 1 && (
        <St.Step1Frame>
          <div className="mailDescritionFrame">
            <IoIosArrowBack onClick={beforeStepHandler} />
            <St.SignUpDescription>이메일을 인증해주세요.</St.SignUpDescription>
          </div>
          <St.MailContentsFrame>
            <div>
              abcd1234@naver.com&#40;으&#41;로 보내드린
              <br /> 인증 메일을 확인해주세요.
            </div>
            <div className="mailAgain">
              <p>인증 메일을 못 받으셨나요?</p>
              <p className="mailAgainLink" onClick={EmailAgainHandler}>
                다시 받기
              </p>
            </div>
          </St.MailContentsFrame>
        </St.Step1Frame>
      )}
      {step === 2 && (
        <div>
          <St.SignUpDescriptionFrame>
            <IoIosArrowBack onClick={beforeStepHandler} />
            <St.SignUpDescription style={{ transform: 'translate(40px, 0px)' }}>
              필수정보를 입력해주세요.
            </St.SignUpDescription>
          </St.SignUpDescriptionFrame>
          <St.InputFrame style={{ marginBottom: '30px' }}>
            <St.InputTitle>닉네임</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input className="SignUpIputNIcon" />
            </St.EmailNPasswordFrame>
            <St.InputTitle>생일</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input className="SignUpIputNIcon" placeholder="YY/MM/DD" />
            </St.EmailNPasswordFrame>
            <St.InputTitle>국가</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input className="SignUpIputNIcon" />
            </St.EmailNPasswordFrame>
          </St.InputFrame>
        </div>
      )}
      {step === 3 && (
        <div>
          <St.SignUpDescriptionFrame>
            <IoIosArrowBack onClick={beforeStepHandler} />
            <St.SignUpDescription style={{ transform: 'translate(40px, 0px)' }}>
              필수정보를 입력해주세요.
            </St.SignUpDescription>
          </St.SignUpDescriptionFrame>
          <St.InputFrame style={{ marginBottom: '30px' }}>
            <St.InputTitle>MBTI</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input className="SignUpIputNIcon" />
            </St.EmailNPasswordFrame>
            <St.InputTitle>한 줄 자기소개</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input
                className="SignUpIputNIcon"
                placeholder="최대 50자까지 입력 가능합니다."
              />
            </St.EmailNPasswordFrame>
          </St.InputFrame>
        </div>
      )}
      {step === 4 && <Complete />}
      {step < 4 && <St.StepBtn onClick={nextStepHandler}>다음</St.StepBtn>}
    </div>
  );
};

export default Step;

import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Complete from './Complete';
import Modal from './Modal';
import * as St from './style';
import { emailCodeConfirmApi, emailCodeSendApi, signUpApi } from 'api/auth';

interface StepPropsStyle {
  adminShow: boolean;
}
const Step = (props: StepPropsStyle) => {
  const { adminShow } = props;
  const navigate = useNavigate();
  const signUpMutation = useMutation({ mutationFn: signUpApi });
  const emailSendMutation = useMutation({ mutationFn: emailCodeSendApi });
  const emailConfirmMutation = useMutation({ mutationFn: emailCodeConfirmApi });
  const [step, setStep] = useState(0);
  const [contentState, setContentState] = useState('');
  const [contentShow, setContentShow] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [agree, setAgree] = useState({
    isService: false,
    isPersonal: false,
    isLocation: false,
  });
  const checkOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgree((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const [secretCode, setSecretCode] = useState('');
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    nickname: '',
    email: '',
    password: '',
    checkPassword: '',
    description: '',
    mbti: '',
    birthday: '',
    nation: '',
    isAgreed: false,
    isAdmin: false,
  });

  const {
    username,
    nickname,
    email,
    password,
    checkPassword,
    description,
    mbti,
    birthday,
    nation,
    isAdmin,
  } = signUpForm;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const EmailSendHandler = () => {
    emailSendMutation.mutate(
      { email: email },
      {
        onSuccess: (data) => {
          alert(data.message);
        },
        onError: (error) => {
          alert(error);
        },
      },
    );
  };
  const nextStepHandler = () => {
    if (step === 0) {
      const isAllTrue = Object.values(agree).every((value) => value === true);
      const isPassword = password === checkPassword;
      const isStep1 = email && password && isPassword && isAllTrue;
      const code = process.env.REACT_APP_CODE;
      if (isStep1) {
        if (adminShow && secretCode !== code) {
          alert('관리자 비밀번호를 다시 입력하세요');
        } else {
          setSignUpForm((prev) => ({ ...prev, isAdmin: adminShow }));
          setSignUpForm((prev) => ({ ...prev, isAgreed: true }));
          EmailSendHandler();
          setStep(1);
        }
      } else {
        alert('빈값을 채워주세요!');
      }
    }
    if (step === 1) {
      alert('인증을 완료해주세요!');
    }
    if (step === 2) {
      const isStep2 = username && nickname && birthday && nation;
      if (isStep2) {
        setStep(3);
      } else {
        alert('빈값을 채워주세요!');
      }
    }
  };
  const contentShowHandler = (state: string) => {
    setContentShow(!contentShow);
    setContentState(state);
  };

  const EmailCodeConfirmHandler = () => {
    emailConfirmMutation.mutate(
      {
        email: email,
        verificationCode,
      },
      {
        onSuccess: (data) => {
          alert(data.message);
          setStep(2);
        },
        onError: (error) => {
          alert(error);
          return;
        },
      },
    );
  };
  const submitBtnHandler = () => {
    if (step === 3) {
      isAdmin && setSignUpForm((prev) => ({ ...prev, secretCode }));
      setSignUpForm((prev) => ({ ...prev, description }));
      signUpMutation.mutate(signUpForm, {
        onSuccess: (data) => {
          alert(data.message);
          setStep(4);
          setTimeout(() => {
            navigate('/');
          }, 1500);
        },
        onError: (error) => {
          alert(error);
        },
      });
    }
  };
  return (
    <div>
      {step === 0 && (
        <div>
          <St.SignUpDescriptionFrame>
            <St.SignUpDescription>서울시를 즐겨봐요!</St.SignUpDescription>
          </St.SignUpDescriptionFrame>

          <St.InputFrame>
            <St.InputTitle>이메일 주소</St.InputTitle>
            <St.EmailNPasswordFrame>
              <AiOutlineMail className="SignUpIcon" />
              <input
                name="email"
                className="SignUpIput"
                value={email}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
            <St.InputTitle>비밀번호</St.InputTitle>
            <St.EmailNPasswordFrame>
              <AiOutlineUnlock className="SignUpIcon" />
              <input
                name="password"
                className="SignUpIput"
                value={password}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
            <St.InputTitle>비밀번호 확인</St.InputTitle>
            <St.EmailNPasswordFrame>
              <AiOutlineUnlock className="SignUpIcon" />
              <input
                name="checkPassword"
                className="SignUpIput"
                value={checkPassword}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
            {adminShow && (
              <>
                <St.InputTitle>관리자 비밀번호</St.InputTitle>
                <St.EmailNPasswordFrame>
                  <AiOutlineUnlock className="SignUpIcon" />
                  <input
                    className="SignUpIput"
                    value={secretCode}
                    onChange={(e) => setSecretCode(e.target.value)}
                  />
                </St.EmailNPasswordFrame>
              </>
            )}
          </St.InputFrame>
          <St.CheckBoxGroup>
            <St.CheckBoxFrame>
              <input
                id="serviceCheck"
                name="isService"
                type="checkbox"
                checked={agree.isService}
                onChange={checkOnChange}
              />
              <p>서비스 약관에 동의합니다.</p>
              <St.LigntoText onClick={() => contentShowHandler('service')}>
                내용보기
              </St.LigntoText>
            </St.CheckBoxFrame>
            <St.CheckBoxFrame>
              <input
                id="infoCheck"
                name="isPersonal"
                type="checkbox"
                checked={agree.isPersonal}
                onChange={checkOnChange}
              />
              <p>개인정보 수집 및 이용에 동의합니다.</p>
              <St.LigntoText onClick={() => contentShowHandler('personal')}>
                내용보기
              </St.LigntoText>
            </St.CheckBoxFrame>
            <St.CheckBoxFrame>
              <input
                id="locationCheck"
                name="isLocation"
                type="checkbox"
                checked={agree.isLocation}
                onChange={checkOnChange}
              />
              <p>위치기반서비스 이용약관에 동의합니다.</p>
              <St.LigntoText onClick={() => contentShowHandler('location')}>
                내용보기
              </St.LigntoText>
            </St.CheckBoxFrame>
          </St.CheckBoxGroup>
          {contentShow && (
            <Modal
              contentShowHandler={contentShowHandler}
              contentState={contentState}
            />
          )}
        </div>
      )}
      {step === 1 && (
        <St.Step1Frame>
          <St.SignUpDescription>이메일을 인증해주세요.</St.SignUpDescription>
          <St.MailContentsFrame>
            {emailSendMutation.isPending ? (
              <>
                메일을 전송중입니다.
                <div id="loading" />
              </>
            ) : (
              <>
                <div>
                  {email}&#40;으&#41;로 보내드린
                  <br /> 인증 메일을 확인해주세요.
                </div>
                {emailSendMutation.isPending ? (
                  <>
                    인증코드를 확인중입니다.
                    <div id="loading" />
                  </>
                ) : (
                  <>
                    <label className="valueLabel">인증 번호 입력</label>
                    <St.ValueFrame>
                      <input
                        className="ValueIput"
                        value={verificationCode}
                        onChange={(e) => {
                          setVerificationCode(e.target.value);
                        }}
                      />
                    </St.ValueFrame>
                  </>
                )}
                <St.StepBtn onClick={EmailCodeConfirmHandler}>인증</St.StepBtn>
                <div className="mailAgain">
                  <p>인증 메일을 못 받으셨나요?</p>
                  <p className="mailAgainLink" onClick={EmailSendHandler}>
                    다시 받기
                  </p>
                </div>
              </>
            )}
          </St.MailContentsFrame>
        </St.Step1Frame>
      )}
      {step === 2 && (
        <div>
          <St.SignUpDescriptionFrame>
            <St.SignUpDescription>
              필수정보를 입력해주세요.
            </St.SignUpDescription>
          </St.SignUpDescriptionFrame>
          <St.InputFrame style={{ marginBottom: '30px' }}>
            <St.InputTitle>이름</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input
                className="SignUpIputNIcon"
                name="username"
                value={username}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
            <St.InputTitle>닉네임</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input
                className="SignUpIputNIcon"
                name="nickname"
                value={nickname}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
            <St.InputTitle>생일</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input
                className="SignUpIputNIcon"
                placeholder="YY/MM/DD"
                name="birthday"
                value={birthday}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
            <St.InputTitle>국가</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input
                className="SignUpIputNIcon"
                onChange={onChange}
                name="nation"
                value={nation}
              />
            </St.EmailNPasswordFrame>
          </St.InputFrame>
        </div>
      )}
      {step === 3 && (
        <div>
          <St.SignUpDescriptionFrame>
            <St.SignUpDescription>추가 정보를 적어주세요.</St.SignUpDescription>
          </St.SignUpDescriptionFrame>
          <St.InputFrame>
            <St.InputTitle>MBTI</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input
                className="SignUpIputNIcon"
                name="mbti"
                value={mbti}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
            <St.InputTitle>한 줄 자기소개</St.InputTitle>
            <St.EmailNPasswordFrame>
              <input
                className="SignUpIputNIcon"
                placeholder="최대 50자까지 입력 가능합니다."
                name="description"
                value={description}
                onChange={onChange}
              />
            </St.EmailNPasswordFrame>
          </St.InputFrame>
        </div>
      )}
      {step === 4 && <Complete />}
      {step !== 1 && step < 3 && (
        <St.StepBtn onClick={nextStepHandler}>다음</St.StepBtn>
      )}
      {step === 3 && (
        <St.StepBtn onClick={submitBtnHandler}>제출하기</St.StepBtn>
      )}
    </div>
  );
};

export default Step;

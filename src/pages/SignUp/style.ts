import { styled } from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  font-size: 17pt;
  color: #444444;
  padding: 30px;
  .LoginOuterWrapper {
    padding: 70px;
  }

  .SignUpTitle {
    display: flex;
    font-size: 30pt;
    margin-bottom: 30px;
    color: black;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transform: translate(-10px, 0);
    font-weight: bold;
  }

  .SignUpBtnFrame {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }

  .SignUpButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    font-size: 16pt;
    border-radius: 10px;
    width: 356px;
    height: 58px;
    background-color: white;
  }
  .BackArrow {
    position: absolute;
    top: 180px;
    left: 350px;
    display: flex;
    gap: 20px;
    color: #707070;
    div {
      display: flex;
      gap: 5px;
    }
    .Bold {
      font-weight: bold;
    }
  }
`;
export const SignUpDescriptionFrame = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  color: #a8a8a8;
  font-size: 16pt;
`;
export const SignUpDescription = styled.div`
  margin-bottom: 20px;
`;
export const OtherMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d2d2d2;
  margin-top: 20px;
  padding-top: 35px;
`;

export const EmailNPasswordFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: black;
  .SignUpIput {
    width: 356px;
    height: 58px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding-left: 80px;
  }

  .SignUpIputNIcon {
    width: 356px;
    height: 75px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding-left: 20px;
    font-size: 16pt;
  }

  .SignUpIcon {
    position: absolute;
    left: 25px;
  }
`;

export const StepBtn = styled.button`
  width: 356px;
  height: 58px;
  font-size: 16pt;
  background-color: #0d84da;
  border: 1px solid #30a8ff;
  border-radius: 10px;
  color: white;
`;
export const SignUpToLogin = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;
export const Lign = styled.div`
  border-top: 1px solid #d2d2d2;
  margin: 20px auto 50px auto;
`;
export const InputTitle = styled.div`
  font-size: 16pt;
  color: black;
`;
export const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 30px 30px 30px 30px;
`;
export const InputDescriptionFrame = styled.div`
  display: flex;
  padding-left: 29px;
  gap: 105px;
`;
export const CheckBoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  padding: 20px 0 20px 0;
  font-size: 18px;
  padding-left: 30px;
`;
export const CheckBoxFrame = styled.div`
  display: flex;
  gap: 10px;
  color: #888888;

  input[type='checkbox'] {
    border-color: #d2d2d2;
  }
`;

export const LigntoText = styled.div`
  color: #888888;
`;
export const Step1Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .mailAgain {
    display: flex;
    gap: 20px;
    font-size: 16px;
  }

  .mailAgainLink {
    color: blue;
    font-weight: bold;
  }
`;
export const ValueFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: black;

  .ValueIput {
    width: 356px;
    height: 60px;
    border: 1px solid #444444;
    border-radius: 10px;
    padding-left: 20px;
    font-size: 20pt;
  }
`;
export const MailContentsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 30px 150px 30px;
  color: black;
  gap: 20px;
  .valueLabel {
    margin-top: 10px;
    font-size: 16pt;
    transform: translate(-100px, 0px);
  }
  #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: black;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export const Circle = styled.div`
  background: #30a8ff;
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: 50%;
`;

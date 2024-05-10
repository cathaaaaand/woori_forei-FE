import { styled } from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  font-size: 17pt;
  color: #888888;
  padding: 60px;

  .SignUpTitle {
    font-size: 25pt;
    margin-bottom: 30px;
    color: black;
  }

  .SignUpBtnFrame {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }

  .SignUpButton {
    font-size: 20pt;
    border-radius: 10px;
    width: 465px;
    height: 85px;
    background-color: white;
  }
`;
export const SignUpDescriptionFrame = styled.div`
  display: flex;
  gap: 40px;
  transform: translate(20px, 0px);
`;
export const SignUpDescription = styled.div`
  font-size: 20pt;
  margin-bottom: 20px;
`;
export const OtherMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d2d2d2;
  width: 525px;
  margin-top: 20px;
  padding-top: 35px;
`;

export const EmailNPasswordFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: black;

  .SignUpIput {
    width: 465px;
    height: 75px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding-left: 80px;
    font-size: 20pt;
  }

  .SignUpIputNIcon {
    width: 465px;
    height: 75px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding-left: 20px;
    font-size: 20pt;
  }

  .SignUpIcon {
    position: absolute;
    left: 25px;
  }
`;

export const StepBtn = styled.button`
  width: 450px;
  height: 75px;
  font-size: 20pt;
  background-color: #005391;
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
  width: 460px;
  margin: 20px auto 50px auto;
`;
export const InputTitle = styled.div`
  font-size: 20pt;
  color: black;
`;
export const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
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
  gap: 20px;
  padding: 20px 0 20px 0;
  font-size: 16pt;
`;
export const CheckBoxFrame = styled.div`
  display: flex;
  gap: 10px;
  color: black;
`;
export const underLign = styled.div`
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: #d2d2d2;
  color: #888888;
`;
export const Step1Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .mailAgain {
    display: flex;
    gap: 20px;
  }

  .mailAgainLink {
    color: blue;
  }

  .mailDescritionFrame {
    display: flex;
    gap: 60px;
    transform: translate(20px, 0px);
  }
`;
export const MailContentsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 170px 30px 150px 30px;
  color: black;
  gap: 20px;
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

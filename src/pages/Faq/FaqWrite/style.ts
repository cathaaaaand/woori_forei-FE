import { styled } from 'styled-components';

export const WriteFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: 20pt;
`;
export const WriteInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding: 60px;
  padding: 100px 45px 100px 45px;
`;
export const TitleInputFrame = styled.div`
  position: relative;
  margin: 75px 0px 20px 0px;
`;
export const WriteTitleInput = styled.input`
  position: relative;
  width: 1350px;
  border: none;
  border-bottom: 1px solid #d2d2d2;
  font-size: 14pt;
  padding-bottom: 20px;
  padding-top: 20px;
  color: #888888;
`;
export const WriteTitleBtn = styled.button`
  position: absolute;
  border: 1px solid #5c8bd1;
  border-radius: 10px;
  width: 70px;
  height: 35px;
  background: white;
  font-size: 14pt;
  top: 20px;
  right: 5px;
`;
export const WriteContentInput = styled.textarea`
  width: 1350px;
  height: 300px;
  border: none;
  margin-bottom: 20px;
  font-size: 14pt;
  color: #888888;
`;
export const WriteImgFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1350px;
  height: 260px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  color: #888888;

  label {
    font-size: 14pt;
  }

  input {
    display: none;
  }
  img {
    height: 250px;
    object-fit: cover;
  }
`;

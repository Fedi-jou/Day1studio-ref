import styled from "styled-components";

export const Contactwrapper = styled.div`
  height: 100vh;
  padding: 50px 100px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  background: linear-gradient(326deg, #101522 0%, #010606 74%);
  color: white;
`;

export const Contacttitle = styled.div`
  text-align: center;
  color: white;
`;

export const Contactcontainer = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`; // u can take it off

export const Infocontainer = styled.div`
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Formcontainer = styled.div`
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

export const Inputwrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`;
export const Inputbox = styled.input`
  background: transparent;
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  /* border-bottom: 2px solid #333; */
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  outline: none;
  resize: none;
  &:focus ~ span {
    color: #1bfaad;
    font-size: 14px;
    transform: translateY(-20px);
  }
  &:valid ~ span {
    color: #1bfaad;
    font-size: 14px;
    transform: translateY(-20px);
  }
`;

export const Inputname = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
`;

export const Buttonsubmit = styled.input`
  width: 100px;
  background: #00bcd4;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
`;

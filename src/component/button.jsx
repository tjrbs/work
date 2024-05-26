import styled from "styled-component";

const ButtonDiv = styled.div`
  display: flex;
  width: 378px;
  height: 52px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 7px;
  background: var(--Main, #85d6d1);
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 127.336%; /* 17.827px */
`;

export default function Button({ text }) {
  return <ButtonDiv>{text}</ButtonDiv>;
}
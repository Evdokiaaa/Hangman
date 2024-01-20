import styled from "styled-components";

const HangmanContainer = styled.div`
  position: relative;
`;
const HangmanLineRight = styled.div`
  position: absolute;
  width: 10px;
  height: 50px;
  background: #000;
  right: 0;
  top: 0;
`;
const HangmanLineTop = styled.div`
  width: 300px;
  height: 10px;
  margin-left: 140px;
  background: #000;
`;
const HangmanLineTwo = styled.div`
  width: 10px;
  height: 400px;
  margin-left: 140px;
  background: #000;
`;
const HangmanLineBottom = styled.div`
  width: 300px;
  height: 10px;
  background: #000;
`;

//
const HangmanHead = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff;
  border: 10px solid #000;
  position: absolute;
  right: -27px;
  top: 40px;
`;
const HangmanBody = styled.div`
  width: 10px;
  height: 120px;
  background: #000;
  position: absolute;
  right: 0px;
  top: 100px;
`;
const HangmanRightHand = styled.div`
  width: 10px;
  height: 60px;
  background: #000;
  position: absolute;
  right: -22px;
  top: 110px;
  transform: rotate(50deg);
`;
const HangmanLeftHand = styled.div`
  width: 10px;
  height: 60px;
  background: #000;
  position: absolute;
  right: 20px;
  top: 110px;
  transform: rotate(-50deg);
`;

const HangmanRightLeg = styled.div`
  width: 10px;
  height: 80px;
  background: #000;
  position: absolute;
  right: -19px;
  top: 210px;
  transform: rotate(-30deg);
`;
const HangmanLeftLeg = styled.div`
  width: 10px;
  height: 80px;
  background: #000;
  position: absolute;
  right: 20px;
  top: 207px;
  transform: rotate(30deg);
`;
type HangmanProps = {
  wrongGuesses: number;
};
export default function Hangman({ wrongGuesses }: HangmanProps) {
  const hangmanParts = [
    <HangmanHead key="head" />,
    <HangmanBody key="body" />,
    <HangmanRightHand key="rightHand" />,
    <HangmanLeftHand key="leftHand" />,
    <HangmanRightLeg key="rightLeg" />,
    <HangmanLeftLeg key="leftLeg" />,
  ];
  return (
    <HangmanContainer>
      <HangmanLineRight></HangmanLineRight>
      {hangmanParts.slice(0, wrongGuesses).map((part) => part)}{" "}
      {/**Рендарим челика в зависимости от кол-во неправильных попыток */}
      <HangmanLineTop></HangmanLineTop>
      <HangmanLineTwo></HangmanLineTwo>
      <HangmanLineBottom></HangmanLineBottom>
    </HangmanContainer>
  );
}

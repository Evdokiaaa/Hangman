import styled from "styled-components";
import KEYS from "../utils/keys";
type KeyProps = {
  $isActive: boolean;
  $isInactive: boolean;
};
const KeysContainer = styled.div`
  display: grid;
  gap: 10px;
  align-self: normal;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`;
const Key = styled.button<KeyProps>`
  background: ${({ $isActive, $isInactive }) =>
    $isActive ? "green" : $isInactive ? "gray" : "white"};
  color: ${({ $isActive, $isInactive }) =>
    $isActive || $isInactive ? "#fff" : "#000"};

  &:hover {
    background: teal;
  }
  padding: 10px;
  font-size: 24px;
  font-weight: 700;
  border: none;
  border: 5px solid #000;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    background: teal;
    color: #fff;
  }
`;
type KeyboardProps = {
  inactive: string[];
  activeLetter: string[];
  disabled: boolean;
  addGuessedLetters: (key: string) => void;
};
const Keyboard = ({
  inactive,
  activeLetter,
  addGuessedLetters,
  disabled = false,
}: KeyboardProps) => {
  return (
    <KeysContainer>
      {KEYS.map((key, i) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactive.includes(key);
        return (
          <Key
            key={i}
            $isActive={isActive}
            $isInactive={isInactive}
            disabled={isActive || isInactive || disabled}
            onClick={() => addGuessedLetters(key)}
          >
            {key.toUpperCase()}
          </Key>
        );
      })}
    </KeysContainer>
  );
};

export default Keyboard;

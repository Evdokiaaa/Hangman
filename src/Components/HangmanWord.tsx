import styled from "styled-components";

const HangmanWordContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 52px;
  font-weight: 700;
`;

const HangmanWordBottom = styled.span`
  border-bottom: 5px solid #000;
`;
type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

export default function HangmanWord({
  wordToGuess,
  guessedLetters,
  reveal,
}: HangmanWordProps) {
  return (
    <HangmanWordContainer>
      {wordToGuess.split("").map((letter: string, i: number) => (
        <HangmanWordBottom key={i}>
          <span
            style={{
              visibility:
                reveal || guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
            }}
          >
            {i === 0 ? letter.toUpperCase() : letter}
          </span>
        </HangmanWordBottom>
      ))}
    </HangmanWordContainer>
  );
}

import React from "react";
import words from "./words.json";
import Container from "./Components/Container";
import HangmanTitle from "./Components/HangmanTitle";
import Hangman from "./Components/Hangman";
import HangmanWord from "./Components/HangmanWord";
import Keyboard from "./Components/Keyboard";
const App = () => {
  const [wordToGuess] = React.useState(() =>
    words[Math.floor(Math.random() * words.length) + 1].toLowerCase()
  );
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const lose = incorrectLetters.length >= 6;
  const win = wordToGuess
    .split("")
    .every((val) => guessedLetters.includes(val));

  const addGuessedLetters = React.useCallback(
    (key: string) => {
      if (guessedLetters.includes(key) || win || lose) return; //Если буква уже есть или в/п то выходим
      setGuessedLetters([...guessedLetters, key]);
    },
    [guessedLetters, win, lose]
  );
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetters(key);
    };
    document.addEventListener("keypress", handleKey);
    return () => document.removeEventListener("keypress", handleKey);
  }, [guessedLetters]);

  console.log(wordToGuess);
  return (
    <Container>
      <HangmanTitle>
        {win && "You won the game! Refresh the page to start again"}
        {lose && "You lost the game! Refresh the page to start again"}
      </HangmanTitle>
      <Hangman wrongGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={lose}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        inactive={incorrectLetters}
        activeLetter={guessedLetters.filter((l) => wordToGuess.includes(l))}
        addGuessedLetters={addGuessedLetters}
        disabled={win || lose}
      />
    </Container>
  );
};

export default App;

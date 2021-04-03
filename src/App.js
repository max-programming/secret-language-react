/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import TextInput from "./components/TextInput";

function App() {
  const [normalText, setNormalText] = useState("");
  const [secretText, setSecretText] = useState("");

  useEffect(() => translateText("normal"), [normalText]);
  useEffect(() => translateText("secret"), [secretText]);
  useEffect(() => {
    document.documentElement.className = "dark";
    document.body.classList.add(
      "bg-gray-200",
      "dark:bg-gray-700",
      "dark:text-white"
    );
  }, []);

  // Translate text function
  const translateText = type => {
    const text = type === "normal" ? normalText : secretText;
    const setText = newText =>
      type === "normal" ? setSecretText(newText) : setNormalText(newText);

    const newText = text
      .split("")
      .map(letter => {
        if (letter.toLowerCase() === "a") {
          return type === "normal" ? "z" : "b";
        }
        if (letter.toLowerCase() === "z") {
          return type === "normal" ? "y" : "a";
        }
        if (letter === " ") {
          return " ";
        }
        // 33 - 64
        // 91 - 96
        // 123 - 126

        if (
          !isNaN(Number(letter)) ||
          (letter.charCodeAt(0) >= 33 && letter.charCodeAt(0) <= 64) ||
          (letter.charCodeAt(0) >= 91 && letter.charCodeAt(0) <= 96) ||
          (letter.charCodeAt(0) >= 123 && letter.charCodeAt(0) <= 126)
        ) {
          return letter;
        }
        return String.fromCharCode(
          type === "normal"
            ? letter.toLowerCase().charCodeAt(0) - 1
            : letter.toLowerCase().charCodeAt(0) + 1
        );
      })
      .join("");

    setText(newText);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <Info />
      <div className="mt-3 flex justify-center items-center flex-col xl:flex-row">
        <TextInput
          type="normal"
          value={normalText}
          setValue={e => setNormalText(e.target.value)}
        />
        <TextInput
          type="secret"
          value={secretText}
          setValue={e => setSecretText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;

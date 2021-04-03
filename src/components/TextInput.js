import { useRef } from "react";
import CopyButton from "./CopyButton";

const TextInput = ({ type, value, setValue }) => {
  const txtRef = useRef();
  const media = window.matchMedia("(min-width: 768px)");
  const copyText = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(value);
    } else {
      const textarea = txtRef.current;
      textarea.select();
      document.execCommand("copy", true, value);
    }
  };
  return (
    <div className="m-2 md:m-4 flex flex-col">
      <div className="flex justify-between items-center">
        <label htmlFor={type}>
          <b>{type === "normal" ? "Normal" : "Secret"}</b> text
        </label>
        <CopyButton copyText={copyText} />
      </div>
      <textarea
        value={value}
        onChange={setValue}
        placeholder={type === "normal" ? "Normal text" : "Secret text"}
        rows={media.matches ? 10 : 5}
        cols={media.matches ? 35 : 25}
        ref={txtRef}
        spellCheck={type === "normal"}
        title={
          type === "normal" ? "Normal text goes here" : "Secret text goes here"
        }
        className={`border-4 border-gradient-tl-textarea rounded-md text-lg outline-none p-2 font-mono transition-all md:text-3xl md:p-3 dark:bg-gray-800 dark:border-gradient-tl-textareadark`}
      ></textarea>
    </div>
  );
};

export default TextInput;

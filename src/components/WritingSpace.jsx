import React, { useState } from "react";
import style from "./Writing.module.css";
import Editor from "@monaco-editor/react";
const WritingSpace = ({ textHandler, theme, count }) => {
  return (
    <>
      <div className={style.writtingSpace}>
      
        <Editor
          defaultLanguage="javascript"
          defaultValue={`//WelCome Here;`}
          onChange={(val) => {textHandler(val);}}
          theme={theme === "light" ? "light" : "vs-dark"}
          options={{
            fontSize: count,
            lineNumbers: "on",
            minimap: { enabled: false },
            wordWrap: "on",
            cursorBlinking: "smooth",

            renderValidationDecorations: "off",
          }}
          className={style.textarea}
        />
      </div>
    </>
  );
};

export default WritingSpace;

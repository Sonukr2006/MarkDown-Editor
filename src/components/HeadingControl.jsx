import React from "react";
import { Moon, Sun, Fullscreen, ArrowDown,   } from "lucide-react";
import style from "./HeadingControl.module.css";
import WritingHeading from "./WritingHeading";
import PreviewerHeading from "./PreviewerHeading";
import downloadMarkdownAsHTML from './HtmlDownload'

const HeadingControl = ({text, theme, setTheme, fullIcon, setfullIcon, setCount, count }) => {
  return (
    <>
      <div className={style.div}>
        <h1>📖 Markdown Editor</h1>
        <div className={style.fullIcon}>
          <div className={style.Dark}>
            <button
              className="px-4 py-5  border"
              onClick={()=> downloadMarkdownAsHTML(text)}
            >
              <ArrowDown/>
            </button>
          </div>
          <div >
            <button onClick={() => setfullIcon(fullIcon === "full" ? "half" : "full")}>
              <Fullscreen size={25} />
            </button>
          </div>
          <div className={style.Dark}>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-4 py-5  border"
            >
              {theme === "light" ? <Moon /> : <Sun size={25} />}
            </button>
          </div>
        </div>
      </div>
      <div className={style.heading}>
        <WritingHeading setCount={setCount} count={count}/>
        <PreviewerHeading />
      </div>
    </>
  );
};

export default HeadingControl;

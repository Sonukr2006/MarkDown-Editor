import React, { useState } from "react";
import { Moon, Sun, Fullscreen, ArrowDown } from "lucide-react";
import style from "./HeadingControl.module.css";
import WritingHeading from "./WritingHeading";
import PreviewerHeading from "./PreviewerHeading";
import downloadMarkdownAsHTML from "./HtmlDownload";
import downloadMarkdown from "./MDfile"

const HeadingControl = ({
  text,
  theme,
  setTheme,
  fullIcon,
  setfullIcon,
  setCount,
  count,
}) => {

  const [downloadTogle, setDownloadTogle] = useState(false);
  const [fileName, setFileName] = useState("");

  return (
    <>
      <div className={style.div}>
        <h1>📖 Markdown Editor</h1>
        <div className={style.fullIcon}>
          <div className={style.Dark}>
            <button
              className={style.tooltip}
              onClick={() => setDownloadTogle(true)}
            >
              <ArrowDown />
              <span className={style.tooltipText}>DownLoad File ⏬ </span>
            </button>
            {downloadTogle && (
                    <div className={style.popupOverlay}>
                      <div className={style.popupBox}>
                        <h2 className={style.popupTitle}>Download Options</h2>
            
                        <div className={style.popupActions}>
                          <input type="text" placeholder="Enter file name" className={style.popupInput} value={fileName} onChange={(e) => setFileName(e.target.value)}/>
                          <button className={style.popupBtn} onClick={()=> downloadMarkdownAsHTML(text, fileName)}>Download as HTML</button>
                          <button className={style.popupBtn} onClick={()=> downloadMarkdown(text, fileName)}>Download as Markdown</button>
                        </div>
                        <button className="popupClose" onClick={() => setDownloadTogle(false)}>
                          Close
                        </button>
                      </div>
                    </div>
                  )}
          </div>
          <div>
            <button
              onClick={() => setfullIcon(fullIcon === "full" ? "half" : "full")}
              className={style.tooltip}
            >
              <Fullscreen size={25} />
              <span className={style.tooltipText}>FullScreen 😱 </span>
            </button>
          </div>
          <div className={style.Dark}>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={style.tooltip}
            >
              {theme === "light" ? <Moon /> : <Sun size={25} />}
              <span className={style.tooltipText}>Dark🌙/Light⛅ </span>
            </button>
          </div>
        </div>
      </div>
      <div className={style.heading}>
        <WritingHeading setCount={setCount} count={count} />
        <PreviewerHeading />
      </div>
    </>
  );
};

export default HeadingControl;

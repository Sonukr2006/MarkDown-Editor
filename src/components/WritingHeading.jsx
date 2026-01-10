import React, { useState } from "react";
import style from "./WrithingHeading.module.css";
import { Code, Cross, Menu } from "lucide-react";

const WritingHeading = ({ setCount, count }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <div className={style.WritingHeading}>
        <Code color="green" fontWeight="800" />
        Editor
        <div>
          <button onClick={() => setMenuOpen(true)}>
              <Menu color="gray" />
            </button>
        </div>
      </div>
      {menuOpen && (
        <div className={style.popupOverlay}>
          <div className={style.popupBox}>
            <h2 className={style.popupTitle}>Editor Setting</h2>

            <div className={style.popupActions}>
              <button className={style.popupBtn} onClick={()=> setCount(count+2)}>FontSize A+</button>
              <button className={style.popupBtn} onClick={()=> setCount(count-2)}>FontSize A-</button>
            </div>
            <button className="popupClose" onClick={() => setMenuOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WritingHeading;

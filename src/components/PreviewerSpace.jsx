import React from 'react'
import style from './Previewer.module.css'
import Markdown from 'react-markdown'
import { TbCopyCheck } from "react-icons/tb";
import PreviewerHeading from './PreviewerHeading';


const PreviewerSpace = ({contant}) => {
  const mark = <Markdown>{contant}</Markdown>

  const Pasrshing = () =>{
    if(contant === '```'){
      let str = '';
      let i = 0;

      while (contant !== '```'){
        str.includes(contant);
        i++;
      }

      return str;
    }
  }
  
  
  return (
    <>
      <div className={style.previewerSpace}>
        {mark }
    </div>
    </>
  )
}

export default PreviewerSpace
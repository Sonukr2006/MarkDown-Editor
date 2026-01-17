import React from 'react'
import style from './Previewer.module.css'
import Markdown from 'react-markdown'
import { TbCopyCheck } from "react-icons/tb";
import PreviewerHeading from './PreviewerHeading';


const PreviewerSpace = ({contant}) => {
  const mark = <Markdown>{contant}</Markdown>
  return (
    <>
      <div className={style.previewerSpace}>
        {mark }
    </div>
    </>
  )
}

export default PreviewerSpace

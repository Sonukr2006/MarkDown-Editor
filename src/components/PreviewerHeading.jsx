import React from 'react'
import style from './PreviewerHeading.module.css'
import { Eye } from 'lucide-react'

const PreviewerHeading = () => {
  return (
    <div className={style.PreviewerHeading}><Eye color='green'size={22}/>Preview</div>
  )
}

export default PreviewerHeading
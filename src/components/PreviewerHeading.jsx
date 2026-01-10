import React from 'react'
import style from './PreviewerHeading.module.css'
import { ArrowBigDown, Eye } from 'lucide-react'

const PreviewerHeading = () => {
  return (
    <div className={style.PreviewerHeading}><Eye color='green'size={22}/>Preview<ArrowBigDown size={22} className={style.arrow}/></div>
  )
}

export default PreviewerHeading
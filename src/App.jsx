import React, { useEffect, useState } from 'react'
import { Logic } from './store/Logic'
import PreviewerSpace from './components/PreviewerSpace'
import WritingSpace from './components/WritingSpace'
import HeadingControl from './components/HeadingControl'
import DOMPurify from 'dompurify';
import {marked} from 'marked';


const App = () => {
  const [text, settext] = useState('');
  const [theme, setTheme] = useState(false);
const [count, setcount] = useState(20);

 useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [fullIcon, setfullIcon] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("fullScreen", fullIcon);
  }, [fullIcon]);
  

  return (
    <>
      <HeadingControl text={text} theme={theme} setTheme={setTheme} fullIcon={fullIcon} setfullIcon={setfullIcon} setCount={setcount} count={count}/>
      <Logic>
        <WritingSpace textHandler={settext} theme={theme} count={count}/>
        <PreviewerSpace contant={text} />
      </Logic>
    </>
  )
}

export default App
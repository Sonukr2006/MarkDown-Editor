import React, { useEffect, useState } from 'react'
import { Logic } from './store/Logic'
import PreviewerSpace from './components/PreviewerSpace'
import WritingSpace from './components/WritingSpace'
import HeadingControl from './components/HeadingControl'
import DOMPurify from 'dompurify';
import {marked} from 'marked';


const App = () => {
  const [text, settext] = useState('');
  const [count, setcount] = useState(20);
  const [theme, setTheme] = useState(() => {
    // Load from localStorage on first render
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
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
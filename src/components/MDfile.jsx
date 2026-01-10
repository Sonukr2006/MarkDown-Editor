import { useState } from "react";

export default function downloadMarkdown(text, fileName) {
  console.log(text);
  console.log(fileName);

  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.md`; // ✅ custom name
  a.click();

  URL.revokeObjectURL(url);
};

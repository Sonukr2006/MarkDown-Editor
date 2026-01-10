import { marked } from "marked";

export default function MDFile(markdownText) {
  
  const blob = new Blob([markdownText], { type: "text/md;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "document.md"; // ✅ file name
  a.click();

  URL.revokeObjectURL(url);
}

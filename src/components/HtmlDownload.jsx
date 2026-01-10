import { marked } from "marked";

export default function downloadMarkdownAsHTML(markdownText, fileName) {
  const htmlBody = marked.parse(markdownText);
  
  

  const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Exported File</title>

  <!-- ✅ GitHub style -->
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.min.css" />

  <style>
    body { padding: 20px; }
  </style>
</head>

<body class="markdown-body">
  ${htmlBody}
</body>
</html>`;

  const blob = new Blob([fullHTML], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.html`; // ✅ file name
  a.click();

  URL.revokeObjectURL(url);
}

import React, { useState } from "react";

const CodePenClone = () => {
  const [html, setHtml] = useState("<p>Hello, World!</p>");
  const [css, setCss] = useState("p { color: blue; }");
  const [js, setJs] = useState("console.log('Hello from JS');");

  const generateOutput = () => {
    const srcDoc = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    return srcDoc;
  };
  

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl mb-4">React CodePen Clone</h1>
      <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
        <textarea
          className="p-2 bg-gray-800 text-white w-full h-40"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          placeholder="Write HTML here..."
        />
        <textarea
          className="p-2 bg-gray-800 text-white w-full h-40"
          value={css}
          onChange={(e) => setCss(e.target.value)}
          placeholder="Write CSS here..."
        />
        <textarea
          className="p-2 bg-gray-800 text-white w-full h-40"
          value={js}
          onChange={(e) => setJs(e.target.value)}
          placeholder="Write JavaScript here..."
        />
      </div>
      <h2 className="text-xl mt-4">Output</h2>
      <iframe
        title="output"
        className="w-full max-w-5xl h-64 bg-white mt-2"
        srcDoc={generateOutput()}
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default CodePenClone;

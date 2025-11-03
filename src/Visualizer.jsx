
import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { parseAndAnalyze } from './utils/compiler';

export default function Visualizer() {
  const [code, setCode] = useState(`function App() {
  return <div>Hello <b>World</b></div>;
}`);
  const [analysis, setAnalysis] = useState('');

  useEffect(() => {
    const res = parseAndAnalyze(code);
    setAnalysis(res);
  }, [code]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '80vh' }}>
      <div>
        <h3>Source Code</h3>
        <Editor
          height="70vh"
          defaultLanguage="javascript"
          value={code}
          onChange={(v) => setCode(v || '')}
          theme="vs-dark"
        />
      </div>
      <div>
        <h3>AST Analysis</h3>
        <pre style={{ background: '#111', color: '#0f0', padding: '1rem', height: '70vh', overflow: 'auto' }}>
          {analysis}
        </pre>
      </div>
    </div>
  );
}

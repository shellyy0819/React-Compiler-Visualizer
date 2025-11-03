'use memo';

import React from 'react';
import Visualizer from './Visualizer';
import BeforeCompilerExample from './before-compiler-example/App';
import AfterCompilerExample from './after-compiler-example/App';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      {/* Demo React Compiler Visualizer */}
      {/* <h1>⚛️ React Compiler Visualizer</h1>
      <Visualizer /> */}

      {/* Before and After Compiler usage effect  */}
      {/* <BeforeCompilerExample/> */}
      <AfterCompilerExample/>
    </div>
  );
}

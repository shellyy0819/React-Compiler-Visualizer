
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import { useRef } from 'react';

export function parseAndAnalyze(code) {
  try {
    const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });
    const info = [];

    traverse(ast, {
      JSXElement(path) {
        const nodeName = path.node.openingElement.name.name;
        info.push(`Found JSX Element: <${nodeName}>`);
      },
      FunctionDeclaration(path) {
        info.push(`Function: ${path.node.id.name}`);
      },
    });

    return info.join('\n');
  } catch (err) {
    return '❌ Error parsing code: ' + err.message;
  }
}

export function useRenderCount(name) {
  const count = useRef(0);
  count.current++;
  console.log(`${name} rendered ${count.current} times`);
}

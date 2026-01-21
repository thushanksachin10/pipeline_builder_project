// textNode.js

import { useState, useEffect, useRef, useMemo } from "react";
import { BaseNode } from "./BaseNode";

/**
 * Extracts valid JS variable names inside {{ }}
 * Example: "Hello {{input}} {{ user_name }}"
 */
const extractVariables = (text) => {
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const vars = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }

  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  // 🔹 Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // 🔹 Extract variables → dynamic handles
  const variables = useMemo(() => extractVariables(text), [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((v) => `${id}-${v}`)}
      outputs={[`${id}-output`]}
      width={260}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text and use {{variables}}"
        style={{
          width: "100%",
          resize: "none",
          overflow: "hidden",
          fontSize: "12px",
          padding: "6px",
        }}
      />
    </BaseNode>
  );
};

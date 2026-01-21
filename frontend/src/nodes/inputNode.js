// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id);
  const [type, setType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      outputs={[`${id}-value`]}
    >
      <label>
        Name:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};
// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id);
  const [type, setType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      inputs={[`${id}-value`]}
    >
      <label>
        Name:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option>Text</option>
          <option>Image</option>
        </select>
      </label>
    </BaseNode>
  );
};

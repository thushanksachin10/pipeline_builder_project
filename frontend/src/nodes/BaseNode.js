import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200
}) => {
  return (
    <div className="base-node" style={{ width }}>
      {/* Inputs */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Header */}
      <div className="node-header">{title}</div>

      {/* Body */}
      <div className="node-body">{children}</div>

      {/* Outputs */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 40 + index * 20 }}
        />
      ))}
    </div>
  );
};

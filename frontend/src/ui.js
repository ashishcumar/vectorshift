import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap, MarkerType } from "reactflow";
import { selector, useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import "reactflow/dist/style.css";
import TimerNode from "./nodes/timerNode";
import PipelineNode from "./nodes/pipelineNode";
import OpenAi from "./nodes/openAi";
import Chat from "./nodes/chat";
import { NumberNode } from "./nodes/numberNode";
import { ConditionNode } from "./nodes/conditionNode";
import { TransformNode } from "./nodes/transformNode";
import { FilterNode } from "./nodes/filterNode";
import { MergeNode } from "./nodes/mergeNode";

const gridSize = 15;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  text: TextNode,
  timer: TimerNode,
  pipeline: PipelineNode,
  openai: OpenAi,
  chat: Chat,
  number: NumberNode,
  condition: ConditionNode,
  transform: TransformNode,
  filter: FilterNode,
  merge: MergeNode,
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <>
      <div
        ref={reactFlowWrapper}
        style={{
          width: "100%",
          height: "calc(100vh - 200px)",
          minHeight: "500px",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
        >
          <Background color="#e5e7eb" gap={gridSize} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </>
  );
};

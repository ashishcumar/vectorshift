import { useState } from "react";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

const useSelectAndRemoveNode = () => {
  const [selectedNode, setSelectedNode] = useState();
  const selector = (state) => ({
    nodes: state.nodes,
    updateNodeField: state.updateNodeField,
  });
  const { nodes, updateNodeField } = useStore(selector, shallow);
  const updateSelectedNode = (id) => {
    const node = nodes.find((currNode) => currNode.selected && id === "remove");
    if (node && selectedNode !== node.id) {
      setSelectedNode(node);
    } else {
      updateNodeField(selectedNode.id, selectedNode, false);
    }
  };

  return { selectedNode, updateSelectedNode };
};

export default useSelectAndRemoveNode;

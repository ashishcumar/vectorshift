import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { Grid } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { useState } from "react";
import useApiCall from "./customHook/useApiCall";
import PipelineSuccess from "./components/modals/PipelineSuccess";

function App() {
  const [showModal, setShowModal] = useState(false);

  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    resetNode: state.resetNode,
  });

  const { handleSubmit, response, loading } = useApiCall(setShowModal);
  const { resetNode } = useStore(selector, shallow);
  return (
    <Grid
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "0",
        background: "#f9fafb",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PipelineSuccess
        response={response}
        showModal={showModal}
        setShowModal={setShowModal}
        resetNode={resetNode}
      />

      <Grid
        style={{
          background: "#ffffff",
          borderRadius: "0",
          border: "none",
          position: "relative",
          overflow: "hidden",
          boxShadow: "none",
          maxWidth: "100%",
          height: "100vh",
        }}
      >
        <PipelineToolbar />
        <PipelineUI />
        <div style={{ 
          padding: "16px 24px", 
          display: "flex", 
          justifyContent: "center",
          background: "#ffffff",
          borderTop: "1px solid #e5e7eb"
        }}>
          <SubmitButton handleSubmit={handleSubmit} loading={loading} />
        </div>
      </Grid>
    </Grid>
  );
}

export default App;


// Part 1: Node Abstraction : a reusable abstraction for existing nodes and  5 new nodes

// Part 2: Styling

// Part 3: Text Node Logic :- width/height change dynamically and Allow users to define variables using {{ variableName }} syntax
// and new Handle on the left side for each variable detected

// Part 4: Backend Integration
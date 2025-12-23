import { Button } from "@chakra-ui/react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export const SubmitButton = ({ handleSubmit, loading }) => {
  const selector = (state) => ({
    nodes: state.nodes,
  });

  const { nodes } = useStore(selector, shallow);
  return (
    <Button
      sx={{
        margin: "auto",
        display: "block",
        padding: "10px 20px",
        background: "#2563eb",
        color: "white",
        borderRadius: "5px",
        width: "fit-content",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        transition: "all 0.15s ease",
        border: "none",
        letterSpacing: "0.01em",
        "&:hover": {
          background: "#1d4ed8",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
        },
        "&:disabled": {
          opacity: 0.5,
          cursor: "not-allowed",
          background: "#9ca3af",
        },
      }}
      width={"fit-content"}
      onClick={handleSubmit}
      disabled={!nodes?.length}
      isLoading={loading}
    >
      Submit Pipeline
    </Button>
  );
};

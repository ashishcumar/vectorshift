import React from "react";
import { Grid, Input, Text, Tooltip } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

function TextField({ type, title, val, setVal, placeholder, toolTip }) {
  return (
    <Grid margin="8px 0">
      <Text
        sx={{
          fontSize: "13px",
          fontWeight: "500",
          color: "#374151",
          marginBottom: "6px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {title}
        {toolTip && (
          <Tooltip label={toolTip} aria-label="A tooltip">
            <QuestionOutlineIcon fontSize="12px" color="#9ca3af" />
          </Tooltip>
        )}
      </Text>
      <Input
        type={type || "text"}
        placeholder={placeholder || "Enter text..."}
        value={val || ""}
        onChange={(e) => setVal(e.target.value)}
        sx={{
          height: "32px",
          padding: "0 10px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          fontSize: "13px",
          backgroundColor: "#ffffff",
          transition: "all 0.15s ease",
          "&:hover": {
            borderColor: "#9ca3af",
          },
          "&:focus": {
            borderColor: "#3b82f6",
            boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
            outline: "none",
          },
        }}
      />
    </Grid>
  );
}

export default TextField;

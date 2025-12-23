import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import NodesWrapper from "../nodes-components/NodesWrapper";
import ResizableTextarea from "../nodes-components/ResizableTextArea";
import { Box, Input, Tooltip } from "@chakra-ui/react";
import TextSvg from "../Assets/SVG/TextSvg";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const [titleText, setTitleText] = useState(id);
  const [variable, setVariable] = useState([]);
  const [textHeight, setTextHeight] = useState(40);
  const [nodeHeight, setNodeHeight] = useState(200);

  useEffect(() => {
    const newHeight = Math.max(200, 150 + textHeight);
    setNodeHeight(newHeight);
    useStore.getState().updateNodeField(id, "height", newHeight);
  }, [textHeight, id]);

  return (
    <NodesWrapper
      headingText={"Text"}
      subHeading={
        "Accepts Text from upstream nodes and allows you to write additional text / concatenate different texts to pass to downstream nodes."
      }
      icon={<TextSvg />}
      id={id}
    >
      <Input
        value={titleText}
        sx={{
          border: "none",
          outline: "none",
          background: "primaryLight200",
          textAlign: "center",
          maxH: "30px",
          margin: "4px 0",
          fontSize: "12px",
        }}
        onChange={(e) => setTitleText(e.target.value)}
      />

      {variable.length > 0 && variable.map((item, i) => {
        const topPos = `${((i + 1) / (variable.length + 1)) * 100}%`;
        return (
          <Tooltip
            key={`${id}-input-${item}`}
            label={`Variable: ${item}`}
            placement="right"
            hasArrow
          >
            <Box 
              position="absolute" 
              left="-8px" 
              top={topPos}
              zIndex={10}
            >
              <Handle
                type="target"
                position={Position.Left}
                id={`${id}-${item}`}
                style={{
                  left: "-8px",
                }}
              />
            </Box>
          </Tooltip>
        );
      })}

      <ResizableTextarea
        setVariable={setVariable}
        heading={"Text"}
        toolTip={"The text to be processed"}
        placeholder={"Type {{ variableName }} to utilize variables"}
        minHeight={60}
        maxHeight={400}
        onResize={setTextHeight}
      />

      <Box position="absolute" right="0" top="50%">
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-output`}
        />
      </Box>
    </NodesWrapper>
  );
};

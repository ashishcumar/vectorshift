import React from "react";
import HeadingWithText from "../nodes-components/HeadingWithText";
import { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import CheckboxWithText from "../nodes-components/CheckboxWithText";
import SelectList from "../nodes-components/Select";
import { pipelineList } from "../helpers/dropdownJson";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import PipelineSvg from "../Assets/SVG/PipelineSvg";
import { Handle, Position } from "reactflow";

function PipelineNode({ id }) {
  const [titleText, setTitleText] = useState(id);
  const [selectedPipeline, setSelectedPipeline] = useState();
  

  return (
    <NodesWrapper
      headingText={"Pipeline"}
      subHeading={
        "Not seeing the inputs and outputs you expect? Did you deploy your pipeline?"
      }
      icon={<PipelineSvg />}
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
          color: "secondary",
          "&:hover": {
            border: "none",
            outline: "none",
          },
          "&:focus": {
            border: "none",
            outline: "none",
          },
          "&:active": {
            border: "none",
            outline: "none",
          },
        }}
        onChange={(e) => setTitleText(e.target.value)}
      />
      <Box position={"relative"} zIndex={"dropdown"} overflow={"scroll"}>
        <SelectList
          headingText={"Pipeline"}
          optionList={pipelineList}
          setVal={setSelectedPipeline}
          val={selectedPipeline}
          tag={true}
        />
      </Box>

      <Handle
        type="source"
        className="handle"
        position={Position.Right}
        id={`${id}-pipeline`}
      />

      <Button variant={'outline'} width={'full'} margin={'8px 0 0 0'}>
         + New Pipeline
      </Button>
    </NodesWrapper>
  );
}

export default PipelineNode;

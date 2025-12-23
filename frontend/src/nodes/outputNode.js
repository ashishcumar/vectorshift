import { useState } from "react";
import { Handle, Position } from "reactflow";
import NodesWrapper from "../nodes-components/NodesWrapper";
import TextField from "../nodes-components/TextField";
import SelectList from "../nodes-components/Select";
import { outputDropdown } from "../helpers/dropdownJson";
import OutputSvg from "../Assets/SVG/OutputSvg";
import {
  Flex,
  Grid,
  HStack,
  Input,
  Switch,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import ResizableTextarea from "../nodes-components/ResizableTextArea";

export const OutputNode = ({ id, data }) => {
  const [titleText, setTitleText] = useState(id);
  const [outputType, setOutputType] = useState(data.outputType || "Text");
  const [variable, setVariable] = useState([]);
  const [bool, setBool] = useState(false);

  return (
    <NodesWrapper
      headingText={"Output"}
      subHeading={"Output data of different types from your workflow."}
      icon={<OutputSvg />}
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
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{
          left: "-8px",
        }}
      />
      <SelectList
        headingText={"Type"}
        optionList={outputDropdown}
        setVal={setOutputType}
        val={outputType}
        toolTip="outputType :- Output raw text"
      />

      <ResizableTextarea
        setVariable={setVariable}
        heading={"Output"}
        placeholder={"Type {{ to utilize variables"}
      />

      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={"sm"}
        marginTop={"4px"}
      >
        <Text>Format output</Text>

        <HStack spacing={2} align="center">
          <Text fontSize="sm">{bool ? "Yes" : "No"}</Text>
          <Switch size="sm" checked={bool} onChange={() => setBool(!bool)} />
        </HStack>
      </Flex>
    </NodesWrapper>
  );
};

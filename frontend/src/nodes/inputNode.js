import { useState } from "react";
import { Handle, Position } from "reactflow";
import SelectList from "../nodes-components/Select";
import TextField from "../nodes-components/TextField";
import NodesWrapper from "../nodes-components/NodesWrapper";
import { inputDropdown } from "../helpers/dropdownJson";
import InputSvg from "../Assets/SVG/InputSvg";
import { Input } from "@chakra-ui/react";

export const InputNode = ({ id, data }) => {
  const [titleText, setTitleText] = useState(id);
  const [inputType, setInputType] = useState(data.inputType || "Text");
  return (
    <NodesWrapper
      headingText={"Input"}
      subHeading={"Pass data of different types into your workflow"}
      icon={<InputSvg />}
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
      <SelectList
        headingText={"Type"}
        optionList={inputDropdown}
        val={inputType}
        setVal={setInputType}
        toolTip="inputType :- File of any type: PDF, Word, MP3, JPEG, etc."
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodesWrapper>
  );
};

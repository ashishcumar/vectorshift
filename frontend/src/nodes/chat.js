import React, { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import SelectList from "../nodes-components/Select";
import { chatMemoryList } from "../helpers/dropdownJson";
import ChatSvg from "../Assets/SVG/ChatSvg";
import { Handle, Position } from "reactflow";
import { Input } from "@chakra-ui/react";

function Chat({ id }) {
  const [titleText, setTitleText] = useState(id);
  const [memory, setMemory] = useState("");
  return (
    <NodesWrapper
      headingText={"Chat Memory"}
      icon={<ChatSvg />}
      id={id}
      subHeading={"Give connected nodes access to conversation history."}
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
        optionList={chatMemoryList}
        toolTip="The type of memory to use"
        setVal={setMemory}
        val={memory}
        placeholder={chatMemoryList[0]?.label}
      />
      <Handle
        className="handle"
        type="source"
        position={Position.Left}
        id={`${id}-chat`}
        style={{
          left:'-8px'
        }}
      />
    </NodesWrapper>
  );
}

export default Chat;

import React, { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import TextField from "../nodes-components/TextField";
import TimerSvg from "../Assets/SVG/TimerSvg";
import { Handle, Position } from "reactflow";
import { Input } from "@chakra-ui/react";
import { dateFormats, pipelineList, timezones } from "../helpers/dropdownJson";
import SelectList from "../nodes-components/Select";

function TimerNode({ id }) {
  const [time, setTime] = useState();
  const [titleText, setTitleText] = useState(id);
  const [timezone, setSelectedTimezone] = useState();
  const [outputFormat, setOutputFormat] = useState();
  return (
    <NodesWrapper
      headingText={"Time"}
      subHeading={"Outputs the current time (often connected to LLM node)"}
      icon={<TimerSvg />}
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
        headingText={"Timezone"}
        optionList={timezones}
        setVal={setSelectedTimezone}
        val={timezone}
        toolTip="The timezone of the time node"
        placeholder={timezones[0].label}
      />
      <SelectList
        headingText={"Output Format"}
        optionList={dateFormats}
        setVal={setOutputFormat}
        val={outputFormat}
        toolTip="The format of the output time"
        placeholder={dateFormats[0].label}
      />
      <Handle
        type="source"
        className="handle"
        position={Position.Right}
        id={`${id}-timer`}
      />
    </NodesWrapper>
  );
}

export default TimerNode;

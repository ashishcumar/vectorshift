import React, { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import TextField from "../nodes-components/TextField";
import SelectList from "../nodes-components/Select";
import { openAiLlmList } from "../helpers/dropdownJson";
import { Box, Flex, Text } from "@chakra-ui/react";
import CheckboxWithText from "../nodes-components/CheckboxWithText";
import OpenAiSvg from "../Assets/SVG/OpenAiSvg";
import { Handle, Position } from "reactflow";

function OpenAi({id}) {
  const [system, setSystem] = useState();
  const [prompt, setPrompt] = useState();
  const [model, setModel] = useState();
  const [usePersonalKey, setUsePersonalKey] = useState();
  const [apiKey, setApiKey] = useState();

  return (
    <NodesWrapper headingText={"Open Ai"} icon={<OpenAiSvg />} id={id}>
      {!system ? (
        <Flex
          sx={{
            position: "absolute",
            right: "92%",
            padding: "12px",
            top: "24%",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontSize: "12px", color: "#111927" }}> System </Text>
          <Box
            sx={{
              height: "16px",
              width: "16px",
              border: "1px solid black",
              borderRadius: "50px",
              background: "white",
            }}
          ></Box>
        </Flex>
      ) : null}
      {!prompt ? (
        <Flex
          sx={{
            position: "absolute",
            right: "92%",
            padding: "12px",
            top: "48%",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontSize: "12px", color: "#111927" }}> Prompt </Text>
          <Box
            sx={{
              height: "16px",
              width: "16px",
              border: "1px solid black",
              borderRadius: "50px",
              background: "white",
            }}
          ></Box>
        </Flex>
      ) : null}
      <TextField
        title={"System"}
        setVal={setSystem}
        type={"text"}
        val={system}
      />
      <TextField
        title={"Prompt"}
        setVal={setPrompt}
        type={"text"}
        val={prompt}
      />
      <SelectList
        headingText={"Model"}
        optionList={openAiLlmList}
        setVal={setModel}
        val={model}
      />
      <CheckboxWithText
        text={"Use Personal Api Key"}
        setVal={setUsePersonalKey}
        val={usePersonalKey}
      />
      {usePersonalKey ? (
        <TextField
          title={"API Key"}
          type={"password"}
          val={apiKey}
          setVal={(e) => setApiKey(e.target.value)}
        />
      ) : null}
      <Handle type="source" className="handle" position={Position.Right} id={`${id}-openAi`} />
    </NodesWrapper>
  );
}

export default OpenAi;

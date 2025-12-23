import React, { useEffect } from "react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import "../index.css";
import CloseSvg from "../Assets/SVG/CloseSvg.js";
import MinimizeSvg from "../Assets/SVG/MinimizeSvg.js";
import ReloadSvg from "../Assets/SVG/ReloadSvg.js";
import SettingSvg from "../Assets/SVG/SettingSvg.js";
import { IoMdCloseCircle } from "react-icons/io";

function HeadingWithText({ headingText, subHeading, icon, fontSizeParam, id }) {
  const [selectedNode, setSelectedNode] = useState("");
  const selector = (state) => ({
    removeNode: state.removeNode,
  });
  const { removeNode, nodes } = useStore(selector, shallow);

  const updateSelectedNode = () => {
    if (!selectedNode) {
      setSelectedNode(id);
    } else if (selectedNode === id) {
      removeNode(id);
    } else {
      console.log("unhandled case");
    }
  };

  useEffect(() => {
    if (id && nodes) {
      setSelectedNode(nodes?.find((item) => item.id == id));
    }
  }, [id]);

  return (
    <Grid
      padding={"10px 12px"}
      background={"#f9fafb"}
      borderRadius={"4px"}
      border={"1px solid"}
      borderColor={"#e5e7eb"}
      gridTemplateColumns={"2fr 1fr"}
      color={"#111827"}
      marginBottom={"10px"}
    >
      <Flex
        sx={{
          gap: "12px",
          alignItems: "center",
        }}
      >
        <Box>{icon}</Box>
        <Text
          className={"headingText"}
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#111827",
            letterSpacing: "-0.01em",
          }}
        >
          {headingText}
        </Text>
      </Flex>
      <Flex
        gap={"8px"}
        alignItems={"center"}
        className="headingIcon"
        justifyContent={"right"}
      >
        <Tooltip label={"Minimize Node"} fontSize={10}>
          <Box>
            <MinimizeSvg size={16} />
          </Box>
        </Tooltip>

        <Tooltip label={"Open Settings"} fontSize={10}>
          <Box>
            <SettingSvg size={16} />
          </Box>
        </Tooltip>
        <Tooltip
          label={selectedNode == id ? "Confirm Delete" : "Delete node"}
          fontSize={10}
        >
          <Flex
            onClick={updateSelectedNode}
            className={selectedNode == id ? "deleteIcon" : "delete"}
          >
            {/* <CloseSvg size={16} /> */}
            <IoMdCloseCircle />
          </Flex>
        </Tooltip>
      </Flex>
      {subHeading?.length ? (
        <Text
          gridColumn="1 / -1"
          fontSize={"12px"}
          color={"#6b7280"}
          padding={"6px 0 0 0"}
          lineHeight={"1.5"}
          fontWeight={"400"}
        >
          {subHeading}
        </Text>
      ) : null}
    </Grid>
  );
}

export default HeadingWithText;

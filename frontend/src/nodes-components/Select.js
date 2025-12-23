import { ChevronDownIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Icon,
  List,
  ListItem,
  useOutsideClick,
  Grid,
  Tag,
  Tooltip,
} from "@chakra-ui/react";
import { useState, useRef } from "react";

const SelectList = ({
  headingText,
  optionList = [],
  val,
  setVal,
  placeholder = "Select...",
  toolTip = "",
  tag,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setVal(option);
    setIsOpen(false);
  };

  return (
    <Grid>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={tag ?"8px 0" : "4px 0"}
      >
        <Flex alignItems={"center"} gap={"8px"}>
          <Text
            sx={{
              fontSize: "13px",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "6px",
            }}
          >
            {headingText}
          </Text>
          {toolTip ? (
            <Tooltip label={toolTip} fontSize={"10px"}>
              <QuestionOutlineIcon
                fontSize="12px"
                color="#9ca3af"
              />
            </Tooltip>
          ) : null}
        </Flex>
        {tag ? (
          <Tag
            sx={{
              fontSize: "10px",
              backgroundColor: "primary",
              color: "#f0f4ff",
              padding: "0px 4px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Dropdown
          </Tag>
        ) : null}
      </Flex>

      <Box
        position="relative"
        width="100%"
        overflow={"visible"}
        zIndex={"auto"}
      >
        <Flex
          align="center"
          justify="space-between"
          height="32px"
          px="10px"
          border="1px solid"
          borderColor={isOpen ? "#3b82f6" : "#d1d5db"}
          borderRadius="4px"
          cursor="pointer"
          _hover={{ borderColor: "#9ca3af" }}
          onClick={() => setIsOpen(!isOpen)}
          bg="white"
          boxShadow={isOpen ? "0 0 0 3px rgba(59, 130, 246, 0.1)" : "none"}
          transition="all 0.15s ease"
        >
          <Text fontSize="13px" color={val ? "#111827" : "#9ca3af"}>
            {val?.label || placeholder}
          </Text>
          <Icon
            as={ChevronDownIcon}
            w={5}
            h={5}
            transition="transform 0.2s"
            transform={isOpen ? "rotate(180deg)" : "none"}
          />
        </Flex>

        {isOpen && (
          <Box
            top="100%"
            left="0"
            right="0"
            zIndex="dropdown"
            mt="2"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="md"
            maxHeight="200px"
            overflowY="scroll"
          >
            <List spacing={0}>
              {optionList.map((option) => (
                <ListItem
                  key={option.value}
                  p={2.5}
                  fontSize="sm"
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  bg={
                    val?.value === option.value
                      ? "primaryLight200"
                      : "transparent"
                  }
                  color={val?.value === option.value ? "primary" : "gray.800"}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default SelectList;

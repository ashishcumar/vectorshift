import { useState, useMemo } from "react";
import { Handle, Position } from "reactflow";
import NodesWrapper from "./NodesWrapper";
import TextField from "./TextField";
import SelectList from "./Select";
import ResizableTextarea from "./ResizableTextArea";
import { Input, Flex, HStack, Text, Switch, Box } from "@chakra-ui/react";

export const BaseNode = ({
  id,
  data = {},
  headingText,
  subHeading,
  icon,
  inputHandles = [],
  outputHandles = [],
  fields = [],
  children,
  onFieldChange,
}) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    fields.forEach((field) => {
      initialState[field.name] = data[field.name] || field.defaultValue || "";
    });
    return initialState;
  });

  const [titleText, setTitleText] = useState(data.title || id);

  const handleFieldChange = (fieldName, value) => {
    setFieldValues((prev) => {
      const newValues = { ...prev, [fieldName]: value };
      if (onFieldChange) {
        onFieldChange(id, fieldName, value);
      }
      return newValues;
    });
  };

  const renderField = (field) => {
    const value = fieldValues[field.name] || "";

    switch (field.type) {
      case "text":
        return (
          <TextField
            key={field.name}
            title={field.label}
            type={field.inputType || "text"}
            val={value}
            setVal={(val) => handleFieldChange(field.name, val)}
            toolTip={field.toolTip}
          />
        );

      case "select":
        const selectValue = typeof value === 'object' && value !== null ? value : 
          field.options?.find(opt => opt.value === value) || null;
        return (
          <SelectList
            key={field.name}
            headingText={field.label}
            optionList={field.options || []}
            val={selectValue}
            setVal={(val) => handleFieldChange(field.name, val?.value || val)}
            toolTip={field.toolTip}
            placeholder={field.placeholder}
          />
        );

      case "textarea":
        return (
          <ResizableTextarea
            key={field.name}
            heading={field.label}
            placeholder={field.placeholder || "Type {{ to utilize variables"}
            toolTip={field.toolTip}
            setVariable={field.setVariable || (() => {})}
            value={value}
            onChange={(val) => handleFieldChange(field.name, val)}
          />
        );

      case "switch":
        return (
          <Flex
            key={field.name}
            justifyContent="space-between"
            alignItems="center"
            fontSize="sm"
            marginTop="4px"
          >
            <Text>{field.label}</Text>
            <HStack spacing={2} align="center">
              <Text fontSize="sm">{value ? "Yes" : "No"}</Text>
              <Switch
                size="sm"
                isChecked={value}
                onChange={(e) => handleFieldChange(field.name, e.target.checked)}
              />
            </HStack>
          </Flex>
        );

      case "custom":
        return field.render ? field.render(value, (val) => handleFieldChange(field.name, val)) : null;

      default:
        return null;
    }
  };

  return (
    <NodesWrapper
      headingText={headingText}
      subHeading={subHeading}
      icon={icon}
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

      {inputHandles.map((handle, index) => (
        <Box
          key={`input-${handle.id}`}
          position="absolute"
          left="-8px"
          top={handle.position || `${((index + 1) / (inputHandles.length + 1)) * 100}%`}
        >
          <Handle
            type="target"
            position={Position.Left}
            id={handle.id}
            style={{
              left: "-8px",
            }}
          />
        </Box>
      ))}

      {fields.map((field) => renderField(field))}

      {children}

      {outputHandles.map((handle, index) => (
        <Box
          key={`output-${handle.id}`}
          position="absolute"
          right="0"
          top={handle.position || `${((index + 1) / (outputHandles.length + 1)) * 100}%`}
        >
          <Handle
            type="source"
            position={Position.Right}
            id={handle.id}
            style={{
              right: "-8px",
            }}
          />
        </Box>
      ))}
    </NodesWrapper>
  );
};

export default BaseNode;

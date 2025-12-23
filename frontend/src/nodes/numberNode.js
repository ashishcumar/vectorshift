import { BaseNode } from "../nodes-components/BaseNode";
import NumberSvg from "../Assets/SVG/NumberSvg";

export const NumberNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      headingText="Number"
      subHeading="Perform numeric operations and calculations"
      icon={<NumberSvg />}
      inputHandles={[
        { id: `${id}-value1`, label: "Value 1" },
        { id: `${id}-value2`, label: "Value 2" },
      ]}
      outputHandles={[
        { id: `${id}-result`, label: "Result" },
      ]}
      fields={[
        {
          name: "operation",
          type: "select",
          label: "Operation",
          options: [
            { value: "add", label: "Add" },
            { value: "subtract", label: "Subtract" },
            { value: "multiply", label: "Multiply" },
            { value: "divide", label: "Divide" },
            { value: "modulo", label: "Modulo" },
          ],
          defaultValue: "add",
          toolTip: "Select the mathematical operation to perform",
        },
        {
          name: "value",
          type: "text",
          label: "Default Value",
          inputType: "number",
          defaultValue: "0",
          toolTip: "Default numeric value if no input is connected",
        },
      ]}
    />
  );
};

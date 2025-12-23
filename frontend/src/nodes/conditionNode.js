import { BaseNode } from "../nodes-components/BaseNode";
import ConditionSvg from "../Assets/SVG/ConditionSvg";

export const ConditionNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      headingText="Condition"
      subHeading="Evaluate conditions and route data based on true/false outcomes"
      icon={<ConditionSvg />}
      inputHandles={[
        { id: `${id}-input`, label: "Input" },
      ]}
      outputHandles={[
        { id: `${id}-true`, label: "True" },
        { id: `${id}-false`, label: "False" },
      ]}
      fields={[
        {
          name: "condition",
          type: "textarea",
          label: "Condition",
          placeholder: "Enter condition logic, e.g., {{ input }} > 10",
          toolTip: "JavaScript expression to evaluate",
        },
        {
          name: "operator",
          type: "select",
          label: "Operator",
          options: [
            { value: "equals", label: "Equals (==)" },
            { value: "notEquals", label: "Not Equals (!=)" },
            { value: "greaterThan", label: "Greater Than (>)" },
            { value: "lessThan", label: "Less Than (<)" },
            { value: "contains", label: "Contains" },
          ],
          defaultValue: "equals",
          toolTip: "Comparison operator to use",
        },
      ]}
    />
  );
};

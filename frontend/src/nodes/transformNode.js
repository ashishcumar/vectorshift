import { BaseNode } from "../nodes-components/BaseNode";
import TransformSvg from "../Assets/SVG/TransformSvg";

export const TransformNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      headingText="Transform"
      subHeading="Transform and reshape data using custom transformation logic"
      icon={<TransformSvg />}
      inputHandles={[
        { id: `${id}-input`, label: "Input Data" },
      ]}
      outputHandles={[
        { id: `${id}-output`, label: "Transformed Data" },
      ]}
      fields={[
        {
          name: "transformation",
          type: "textarea",
          label: "Transformation Logic",
          placeholder: "Enter transformation code, e.g., {{ input }}.toUpperCase()",
          toolTip: "JavaScript code to transform the input data",
        },
        {
          name: "outputFormat",
          type: "select",
          label: "Output Format",
          options: [
            { value: "json", label: "JSON" },
            { value: "text", label: "Text" },
            { value: "array", label: "Array" },
            { value: "object", label: "Object" },
          ],
          defaultValue: "json",
          toolTip: "Format of the transformed output",
        },
      ]}
    />
  );
};

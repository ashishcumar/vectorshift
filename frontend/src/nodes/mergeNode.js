import { BaseNode } from "../nodes-components/BaseNode";
import MergeSvg from "../Assets/SVG/MergeSvg";

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      headingText="Merge"
      subHeading="Combine multiple inputs into a single output using various merge strategies"
      icon={<MergeSvg />}
      inputHandles={[
        { id: `${id}-input1`, label: "Input 1" },
        { id: `${id}-input2`, label: "Input 2" },
        { id: `${id}-input3`, label: "Input 3" },
      ]}
      outputHandles={[
        { id: `${id}-merged`, label: "Merged Output" },
      ]}
      fields={[
        {
          name: "mergeStrategy",
          type: "select",
          label: "Merge Strategy",
          options: [
            { value: "concat", label: "Concatenate" },
            { value: "merge", label: "Merge Objects" },
            { value: "array", label: "Combine as Array" },
            { value: "custom", label: "Custom Logic" },
          ],
          defaultValue: "concat",
          toolTip: "How to combine the inputs",
        },
        {
          name: "separator",
          type: "text",
          label: "Separator",
          defaultValue: ", ",
          toolTip: "Separator to use when concatenating",
        },
        {
          name: "customLogic",
          type: "textarea",
          label: "Custom Merge Logic",
          placeholder: "Enter custom merge code, e.g., {{ input1 }} + ' ' + {{ input2 }}",
          toolTip: "Custom JavaScript code for merging (only used if strategy is Custom)",
        },
      ]}
    />
  );
};

import { BaseNode } from "../nodes-components/BaseNode";
import FilterSvg from "../Assets/SVG/FilterSvg";

export const FilterNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      headingText="Filter"
      subHeading="Filter data based on specified criteria and conditions"
      icon={<FilterSvg />}
      inputHandles={[
        { id: `${id}-input`, label: "Input Data" },
      ]}
      outputHandles={[
        { id: `${id}-filtered`, label: "Filtered Output" },
        { id: `${id}-rejected`, label: "Rejected Items" },
      ]}
      fields={[
        {
          name: "filterCriteria",
          type: "textarea",
          label: "Filter Criteria",
          placeholder: "Enter filter condition, e.g., {{ item }}.length > 5",
          toolTip: "Condition to filter items",
        },
        {
          name: "filterType",
          type: "select",
          label: "Filter Type",
          options: [
            { value: "include", label: "Include Matching" },
            { value: "exclude", label: "Exclude Matching" },
            { value: "custom", label: "Custom Logic" },
          ],
          defaultValue: "include",
          toolTip: "Type of filtering to apply",
        },
        {
          name: "caseSensitive",
          type: "switch",
          label: "Case Sensitive",
          defaultValue: false,
          toolTip: "Whether filtering should be case sensitive",
        },
      ]}
    />
  );
};

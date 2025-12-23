import bool from "../Assets/bool.webp";
import InputSvg from "../Assets/SVG/InputSvg";
import OutputSvg from "../Assets/SVG/OutputSvg";
import ChatSvg from "../Assets/SVG/ChatSvg";
import ConditionalSvg from "../Assets/SVG/ConditionalSvg";
import OpenAiSvg from "../Assets/SVG/OpenAiSvg";
import PipelineSvg from "../Assets/SVG/PipelineSvg";
import TextSvg from "../Assets/SVG/TextSvg";
import TimerSvg from "../Assets/SVG/TimerSvg";
import NumberSvg from "../Assets/SVG/NumberSvg";
import ConditionSvg from "../Assets/SVG/ConditionSvg";
import TransformSvg from "../Assets/SVG/TransformSvg";
import FilterSvg from "../Assets/SVG/FilterSvg";
import MergeSvg from "../Assets/SVG/MergeSvg";
import awsLogo from "../Assets/aws-logo.png";

export const inputDropdown = [
  {
    label: "Text",
    value: "Text",
  },
  {
    label: "File",
    value: "File",
  },
  {
    label: "Audio",
    value: "Audio",
  },
    {
    label: "List of files",
    value: "List of files",
  },
    {
    label: "Image",
    value: "Image",
  },
    {
    label: "Integer",
    value: "Integer",
  },
    {
    label: "Boolean",
    value: "Boolean",
  },
    {
    label: "Decimal",
    value: "Decimal",
  },
];

export const outputDropdown = [
  {
    label: "Text",
    value: "Text",
  },
  {
    label: "Image",
    value: "Image",
  },
  {
    label: "Formatted Text",
    value: "Formatted Text",
  },
  {
    label: "Audio",
    value: "Audio",
  },
  {
    label: "JSON",
    value: "JSON",
  },
  {
    label: "File",
    value: "File",
  },
];

export const toolBarJson = [
  {
    type: "customInput",
    label: "Input",
    icon: <InputSvg />,
  },
  {
    type: "customOutput",
    label: "Output",
    icon: <OutputSvg />,
  },
  {
    type: "text",
    label: "Text",
    icon: <TextSvg />,
  },
  {
    type: "openai",
    label: "LLM",
    icon: <OpenAiSvg />,
  },
  {
    type: "timer",
    label: "Time",
    icon: <TimerSvg />,
  },
  {
    type: "pipeline",
    label: "Pipeline",
    icon: <PipelineSvg />,
  },
  {
    type: "chat",
    label: "Chat",
    icon: <ChatSvg />,
  },
  {
    type: "number",
    label: "Number",
    icon: <NumberSvg />,
  },
  {
    type: "condition",
    label: "Condition",
    icon: <ConditionSvg />,
  },
  {
    type: "transform",
    label: "Transform",
    icon: <TransformSvg />,
  },
  {
    type: "filter",
    label: "Filter",
    icon: <FilterSvg />,
  },
  {
    type: "merge",
    label: "Merge",
    icon: <MergeSvg />,
  },
];

export const openAiLlmList = [
  {
    label: "gpt-4-turbo-2024-04-09",
    value: "gpt-4-turbo-2024-04-09",
  },
  {
    label: "gpt-3.5-turbo",
    value: "gpt-3.5-turbo",
  },
  {
    label: "gpt-3.5-turbo-16k",
    value: "gpt-3.5-turbo-16k",
  },
  {
    label: "gpt-4",
    value: "gpt-4",
  },
  {
    label: "gpt-4o",
    value: "gpt-4o",
  },
  {
    label: "gpt-4o-mini",
    value: "gpt-4o-mini",
  },
  {
    label: "gpt-4-32k",
    value: "gpt-4-32k",
  },
  {
    label: "gpt-4-turbo",
    value: "gpt-4-turbo",
  },
];

export const pipelineList = [
  {
    label: "pipeline-1",
    value: "pipeline-1",
  },
  {
    label: "pipeline-2",
    value: "pipeline-2",
  },
  {
    label: "pipeline-3",
    value: "pipeline-3",
  },
  {
    label: "pipeline-4",
    value: "pipeline-4",
  },
];

export const timezones = [
  { label: "Pacific Time (US & Canada)", value: "America/Los_Angeles" },
  { label: "Mountain Time (US & Canada)", value: "America/Denver" },
  { label: "Central Time (US & Canada)", value: "America/Chicago" },
  { label: "Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "Greenwich Mean Time (GMT)", value: "Etc/Greenwich" },
  { label: "India Standard Time (IST)", value: "Asia/Kolkata" }
];

export const dateFormats = [
  { label: "DD/MM/YYYY", value: "dd/MM/yyyy" },
  { label: "MM/DD/YYYY", value: "MM/dd/yyyy" },
  { label: "YYYY-MM-DD", value: "yyyy-MM-dd" },
  { label: "DD MMM, YYYY", value: "dd MMM, yyyy" }
];
export const chatMemoryList = [
  {
    label: "Full-Formatted",
    value: "Full-Formatted",
  },
  {
    label: "Full-Raw",
    value: "Full-Raw",
  },
  {
    label: "Token-Buffer",
    value: "Token-Buffer",
  },
  {
    label: "Vector-Database",
    value: "Vector-Database",
  },
  {
    label: "Message Buffer",
    value: "Message Buffer",
  },
];

export const awsLlm = [
  {
    label:"Titan-text-express",
    value:"Titan-text-express"
  },
  {
    label:"Titan-text-lite",
    value:"Titan-text-lite"
  }
]
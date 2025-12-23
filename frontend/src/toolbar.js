
import { Flex } from "@chakra-ui/react";
import { DraggableNode } from "./draggableNode";
import { toolBarJson } from "./helpers/dropdownJson";
export const PipelineToolbar = () => {
  return (
    <Flex
      gap={'10px'}
      background={'#ffffff'}
      borderRadius={'0'}
      borderBottom={'1px solid'}
      borderColor={'#e5e7eb'}
      alignItems={'center'}
      padding={'14px 20px'}
      flexWrap={'wrap'}
      boxShadow={'none'}
    >
      {toolBarJson?.map(({ type, label, icon }, i) => {
        return <DraggableNode type={type} label={label} key={i} icon={icon}/>;
      })}
    </Flex>
  );
};

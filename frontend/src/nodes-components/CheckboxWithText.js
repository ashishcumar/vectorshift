import { Checkbox, Text } from "@chakra-ui/react";
import React from "react";

function CheckboxWithText({ val, setVal, text }) {
  return (
    <Checkbox
      isChecked={val}
      onChange={() => setVal(!val)}
      sx={{ fontSize: "10px" }}
    >
     <Text sx={{fontSize:'12px'}}> {text}</Text>
    </Checkbox>
  );
}

export default CheckboxWithText;

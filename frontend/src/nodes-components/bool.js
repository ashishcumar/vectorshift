import { Grid, Switch, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "./TextField";

function Bool({ type, val, setVal,boolVal,setBoolVal }) {
  return (
    <Grid sx={{ gap: "8px" }}>
      <TextField setVal={setVal} title={"Text"} val={val} type={type} />
      <Grid sx={{ gridTemplateColumns: "2fr 1fr", placeContent: "center" }}>
        <Text
          sx={{
            fontSize: "sm",
            fontWeight: "600",
            marginBottom: "4px",
            color: "secondaryLight",
          }}
        >
          Response (boolean) 
        </Text>
        <Switch
          size={"sm"}
          sx={{
            margin: "auto",
          }}
          isChecked={boolVal}
          onChange={() => setBoolVal(!boolVal)}
        />
      </Grid>
    </Grid>
  );
}

export default Bool;

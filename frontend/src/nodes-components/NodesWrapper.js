import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import HeadingWithText from "./HeadingWithText";

function NodesWrapper({ headingText, subHeading, icon, children, width, id }) {
  return (
    <Grid className="nodeWrapper">
      <HeadingWithText
        headingText={headingText}
        subHeading={subHeading}
        icon={icon}
        id={id}
      />
      <Box marginTop="4px">{children}</Box>
    </Grid>
  );
}

export default NodesWrapper;

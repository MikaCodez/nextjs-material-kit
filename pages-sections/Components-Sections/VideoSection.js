import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

const useStyles = makeStyles({
  videoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // Align content to the right
    height: "30vh", // Adjust height as needed
    maxWidth: "40%", // Adjust width as needed
    margin: "auto", // Center the container horizontally
  },
  video: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default function VideoSection() {
  const classes = useStyles();
  return (
    <GridContainer className={classes.videoContainer}>
      <GridItem>
        <video className={classes.video} controls>
          <source
            src="https://lsn-staging.s3.amazonaws.com/static/marketing-page-v2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </GridItem>
    </GridContainer>
  );
}

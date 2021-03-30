import React from "react";
import styles from "./Timeline.module.css";
import { Chrono } from "react-chrono";
import data from "./timelineData";
import useWindowSize from "../../shared/util/windowSize"

const Timeline = () => {
  const size = useWindowSize();
  const bigScreenMode = "VERTICAL_ALTERNATING";
  const smallScreenMode = "VERTICAL";

  return (
    <div className={styles.timeline}>
        <Chrono 
        items={data} 
        mode={size.width <= 850 ? smallScreenMode : bigScreenMode} 
        hideControls 
        theme={{
          primary: "blue", 
          secondary: "#E6E8FA", 
          }}/>
      </div>
  );
};

export default Timeline;

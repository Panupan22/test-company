import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EastIcon from "@mui/icons-material/East";

import React from "react";

const Home = () => {
  const styles = {
    container: {
      background: "URL('/assets/images/background.jpeg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      width: "100vw",
      height: "100vh",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <Button variant="contained" color="success" endIcon={<EastIcon />}>
        LET'S GO
      </Button>
    </div>
  );
};

export default Home;

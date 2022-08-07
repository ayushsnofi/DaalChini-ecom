import { Box, Button, Paper, Typography, Link } from "@mui/material";
import { fontWeight, textAlign } from "@mui/system";
import { useEffect } from "react";
import { useContext } from "react";
import SwipeableTemporaryDrawer from "../components/Drawer";
import SwipeableEdgeDrawer from "../components/Drawer";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { globalContext } from "../context/GlobalContext";

export default function HomePage() {
  const { openCart } = useContext(globalContext);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "140vh",
        m: 0,
        p: 0,
      }}
    >
      <Box>
        {/* <Box
          component="header"
          sx={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            //   justifyContent: "space-between",
            backgroundColor: "#24292e",
            width: "100%",
            height: "5rem",
            m: 0,
          }}
        ></Box> */}
        <ProductList />
      </Box>
      {openCart ? <SwipeableTemporaryDrawer /> : ""}
      <Box sx={{ mb: 0, pb: 0 }}>
        <Footer />
      </Box>
    </Paper>
  );
}

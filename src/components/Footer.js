import { Box, Button, IconButton, Paper, SwipeableDrawer } from "@mui/material";
import { Typography } from "antd";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useContext, useState } from "react";
import { globalContext } from "../context/GlobalContext";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";

export default function Footer(props) {
  const {
    openCart,
    setOpenCart,
    product,
    totalPrice,
    drawerMenu,
    setDrawerMenu,
    setItemList,
    setTotalPrice,
    setTotalProduct,
  } = useContext(globalContext);
  const [alert, setAlert] = useState(false);

  const loginToggle = () => {
    setOpenCart(!openCart);
    setDrawerMenu("login");
  };

  const openCartToggle = () => {
    setOpenCart(!openCart);
    setDrawerMenu("cart");
  };

  const handlePayment = () => {
    setAlert(true);
    setOpenCart(!openCart);
    setDrawerMenu("login");
    setItemList([]);
    setTotalPrice(0);
    setTotalProduct(0);
  };
  return (
    <Paper
      elevation={3}
      sx={{
        height: "8rem",
        width: "100%",
        position: "fixed",
        zIndex: "10000",
        pb: 2,
        mb: 5,
        backgroundColor: "#6ac06a",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          color: "whitesmoke",
          backgroundColor: "#1f8522",
          p: 1,
          mb: 6,
          ml: 6,
          width: "9rem",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>Total Rs. {totalPrice}</Typography>
          <Box sx={{ ml: 1 }} onClick={openCartToggle}>
            {openCart ? (
              <KeyboardArrowDownIcon fontSize="large" />
            ) : (
              <KeyboardArrowUpIcon fontSize="large" />
            )}
          </Box>
        </Box>
        <Typography>{product} Item(s)</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{ pr: 8, color: "whitesmoke", fontSize: "1.2rem" }}>
          {drawerMenu === "cart" ? (
            <Button variant="filled" onClick={loginToggle}>
              Login
            </Button>
          ) : drawerMenu === "login" ? (
            <Button variant="filled" onClick={() => setDrawerMenu("checkout")}>
              continue
            </Button>
          ) : drawerMenu === "checkout" ? (
            <Button variant="filled" onClick={handlePayment}>
              Select Payment
            </Button>
          ) : (
            ""
          )}
        </Box>
        {alert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Order Confirmed— check it out!
            </Alert>
          </Stack>
        )}
        <Box>
          <ArrowForwardIcon sx={{ color: "whitesmoke" }} fontSize="medium" />
        </Box>
      </Box>
    </Paper>
  );
}

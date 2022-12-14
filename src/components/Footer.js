import {
  Box,
  Button,
  IconButton,
  Paper,
  Snackbar,
  SwipeableDrawer,
} from "@mui/material";
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
    orderConfirmed,
    setOrderConfirmed,
  } = useContext(globalContext);
  const [alert, setAlert] = useState(false);

  const loginToggle = () => {
    if (openCart) {
      console.log("hey");
      setDrawerMenu("login");
    } else {
      setOpenCart(!openCart);
      setDrawerMenu("login");
    }
  };

  const openCartToggle = () => {
    setOpenCart(!openCart);
    setDrawerMenu("cart");
  };

  const handlePayment = () => {
    setAlert(true);
    setOpenCart(!openCart);
    setDrawerMenu("cart");
    setItemList([]);
    setTotalPrice(0);
    setTotalProduct(0);
    setOrderConfirmed(!orderConfirmed);
    console.log("order");
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
        m: 0,
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
          // mb: 2,
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            pr: 8,
            color: "whitesmoke",
            fontSize: "1.2rem",
          }}
        >
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
          <Box>
            <ArrowForwardIcon sx={{ color: "whitesmoke" }} fontSize="medium" />
          </Box>
        </Box>
        {alert && (
          <Snackbar
            open={alert}
            autoHideDuration={6000}
            onClose={() => setAlert(!alert)}
          >
            <Alert
              onClose={() => setAlert(!alert)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Order Confirmed - check it out!
            </Alert>
          </Snackbar>
        )}
      </Box>
    </Paper>
  );
}

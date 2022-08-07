import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";

import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ButtonBox from "./QuantiyButtonMini";
import { useState } from "react";
import { useEffect } from "react";

export default function SwipeableTemporaryDrawer() {
  const {
    openCart,
    setOpenCart,
    itemList,
    drawerMenu,
    setDrawerMenu,
    totalPrice,
  } = useContext(globalContext);
  const [errorMessage, setErrorMessage] = useState(false);
  const [phoneNo, setPhoneNo] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let total = 0;
    itemList.map((item) => {
      total += item.totalQuantity;
    });
    setTotalQuantity(total);
  }, [itemList]);

  const handleChange = (e) => {
    const no = parseInt(e.target.value);
    setPhoneNo(no);
  };
  const handleSubmit = () => {
    if (typeof phoneNo !== "number") {
      setErrorMessage(true);
    } else {
      setDrawerMenu("checkout");
      setErrorMessage(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenCart(open);
  };

  const list = () => (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {drawerMenu === "cart" ? (
          <>
            {" "}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                }}
              >
                Cart Details
              </Typography>
            </Box>
            <Box>
              <TableContainer component={Paper}>
                <Table
                  sx={{
                    minWidth: 300,
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      <TableCell
                        sx={{
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        Items
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        Qty
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {itemList.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          fontSize: "1rem",
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.recipe}
                        </TableCell>
                        <TableCell align="right">{ButtonBox(row)}</TableCell>
                        <TableCell align="right">
                          {row.totalQuantity * row.discountprc}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>Total </TableCell>
                      <TableCell align="right">{totalQuantity} </TableCell>
                      <TableCell align="right">{totalPrice}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </>
        ) : drawerMenu === "login" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              widhth: "100%",
              margin: "auto",
              justifyContent: "center",
              alignItem: "center",
              p: 8,
            }}
          >
            <TextField
              sx={{ width: "100%", textAlign: "center" }}
              error={errorMessage}
              label="Enter Phone Number"
              defaultValue={phoneNo}
              onChange={(e, value) => handleChange(e)}
              helperText="Login using Phone Number"
            />
            <Button
              variant="filled"
              // label="Submit"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#1f8522",
                color: "#6ac06a",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Submit
            </Button>

            <Button
              sx={{ color: "#1f8522", textDecoration: "underline" }}
              onClick={() => setDrawerMenu("checkout")}
            >
              Will do it later
            </Button>
          </Box>
        ) : drawerMenu === "checkout" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // widhth: "100%",
              // margin: "auto",
              // justifyContent: "center",
              alignItem: "center",
              padding: "2rem 1rem 2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "600", pb: 2 }}>
                Checkout
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600", pb: 2 }}>
                Pick up
                <Divider></Divider>
              </Typography>
              <Typography variant="body1">Neb Sarai New Delhi</Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ padding: "1rem 0 .5rem", fontWeight: "600" }}
              >
                Cart Details
                <Divider></Divider>
              </Typography>

              <Box>
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      minWidth: 300,
                    }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow
                        sx={{
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        <TableCell
                          sx={{
                            fontFamily: "sans-serif",
                            fontWeight: "600",
                            fontSize: "1rem",
                          }}
                        >
                          Items
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontFamily: "sans-serif",
                            fontWeight: "600",
                            fontSize: "1rem",
                          }}
                        >
                          Qty
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontFamily: "sans-serif",
                            fontWeight: "600",
                            fontSize: "1rem",
                          }}
                        >
                          Amount
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {itemList.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            fontSize: "1rem",
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.recipe}
                          </TableCell>
                          <TableCell align="right">{ButtonBox(row)}</TableCell>
                          <TableCell align="right">
                            {row.totalQuantity * row.discountprc}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell>Total </TableCell>
                        <TableCell align="right">{totalQuantity} </TableCell>
                        <TableCell align="right">{totalPrice}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Divider />
      <Box sx={{ height: "9rem" }}></Box>
    </>
  );

  return (
    <div>
      {/* {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}> */}
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <SwipeableDrawer
        anchor={"bottom"}
        open={openCart}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
      {/* </React.Fragment>
      ))} */}
    </div>
  );
}

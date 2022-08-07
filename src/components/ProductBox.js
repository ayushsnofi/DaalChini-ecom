import {
  Box,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useEffect } from "react";

import { useContext, useState } from "react";
import { globalContext } from "../context/GlobalContext";
import QuantityButton from "./QuantityButton";
import Image from "mui-image";

export default function ProductBox(props) {
  const { itemList } = useContext(globalContext);
  const [state, setState] = useState(true);
  useEffect(() => {
    setState(!state);
  }, [itemList]);
  return (
    <>
      <Paper
        elevation={3}
        component="div"
        sx={{
          mt: 2,
          display: "grid",
          gridTemplateColumns: "15% 85%",
          justifyContent: "space-between",
          width: "100%",
          height: "8rem",
        }}
      >
        <Paper
          component={"image"}
          elevation={3}
          sx={{
            height: "8rem",
            display: "flex",
          }}
        >
          <Image
            src={props.imageUrl}
            sx={{
              borderRadius: "5px",

              display: "flex",
              flexDirection: "row",
              height: "100%",
              width: "100%",
              fit: "cover",
              background: "cover",
            }}
          />
        </Paper>
        <Paper elevation={2} sx={{ display: "grid" }}>
          <Typography variant="h6" sx={{ pt: 1, pl: 1 }}>
            {props.recipe}
          </Typography>
          <Typography sx={{ pl: 1, display: "flex", wordWrap: "break-word" }}>
            {props.descp}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ pl: 1 }}>
                <span>&#8377;</span> {props.discountprc}
              </Typography>
              <Typography
                sx={{
                  pl: 3,
                  textDecoration: "line-through",
                  color: "rgb(75 67 67 / 87%)",
                }}
              >
                <span>&#8377;</span> {props.actualprc}
              </Typography>
            </Box>
            <QuantityButton
              imageUrl={props.imageUrl}
              recipe={props.recipe}
              descp={props.descp}
              discountprc={props.discountprc}
              actualprc={props.actualprc}
              totalQuantity={props.totalQuantity}
            />
          </Box>
        </Paper>
      </Paper>
    </>
  );
}
